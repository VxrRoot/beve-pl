import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const BIR_URL =
  "https://wyszukiwarkaregontest.stat.gov.pl/wsBIR/UslugaBIRzewnPubl.svc";
const BIR_WSDL_URL =
  "https://wyszukiwarkaregontest.stat.gov.pl/wsBIR/wsdl/UslugaBIRzewnPubl-ver11-test.wsdl";
const API_KEY = "d71b422d2989495286d7"; // Klucz testowy

export async function POST(request: NextRequest) {
  const { nip } = await request.json();

  if (!nip) {
    return NextResponse.json(
      {
        error: `Internal Server Error: Missing NIP`,
      },
      { status: 500 }
    );
  }

  try {
    // Logowanie do usługi BIR
    const loginResponse = await axios.post(
      `${BIR_URL}`,
      `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ns="http://CIS/BIR/PUBL/2014/07">
      <soap:Header xmlns:wsa="http://www.w3.org/2005/08/addressing">
          <wsa:To>https://wyszukiwarkaregon.test.stat.gov.pl/wsBIR/UslugaBIRzewnPubl.svc</wsa:To>
          <wsa:Action>http://CIS/BIR/PUBL/2014/07/IUslugaBIRzewnPubl/Zaloguj</wsa:Action>
      </soap:Header>
      <soap:Body>
          <ns:Zaloguj>
              <ns:pKluczUzytkownika>${API_KEY}</ns:pKluczUzytkownika>
          </ns:Zaloguj>
      </soap:Body>
  </soap:Envelope>`,
      {
        headers: {
          "Content-Type": 'multipart/related; type="application/xop+xml"',
          SOAPAction: "http://CIS/BIR/PUBL/2014/07/IUslugaBIRzewnPubl/Zaloguj",
        },
      }
    );
    console.log(nip);

    console.log(loginResponse);

    const sessionId = loginResponse.data.match(
      /<ZalogujResult>(.*?)<\/ZalogujResult>/
    )[1];

    // Wyszukiwanie danych podmiotu na podstawie NIP
    const searchResponse = await axios.post(
      BIR_URL,
      `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bir="http://CIS/BIR/PUBL/2014/07">
              <soapenv:Header/>
              <soapenv:Body>
                <bir:DaneSzukajPodmioty>
                  <bir:pParametryWyszukiwania>
                    <bir:Nip>${nip}</bir:Nip>
                  </bir:pParametryWyszukiwania>
                </bir:DaneSzukajPodmioty>
              </soapenv:Body>
            </soapenv:Envelope>`,
      {
        headers: {
          "Content-Type": "text/xml",
          sid: sessionId,
        },
      }
    );

    const regon = searchResponse.data.match(/<Regon>(.*?)<\/Regon>/)[1];

    // Pobranie pełnego raportu o podmiocie
    const reportResponse = await axios.post(
      BIR_URL,
      `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bir="http://CIS/BIR/PUBL/2014/07">
              <soapenv:Header/>
              <soapenv:Body>
                <bir:DanePobierzPelnyRaport>
                  <bir:pRegon>${regon}</bir:pRegon>
                  <bir:pNazwaRaportu>BIR11OsPrawna</bir:pNazwaRaportu>
                </bir:DanePobierzPelnyRaport>
              </soapenv:Body>
            </soapenv:Envelope>`,
      {
        headers: {
          "Content-Type": "text/xml",
          sid: sessionId,
        },
      }
    );

    // Przetworzenie odpowiedzi
    const companyData = {
      name: reportResponse.data.match(/<praw_nazwa>(.*?)<\/praw_nazwa>/)[1],
      country: reportResponse.data.match(/<praw_kraj>(.*?)<\/praw_kraj>/)[1],
      postalCode: reportResponse.data.match(
        /<praw_kodPocztowy>(.*?)<\/praw_kodPocztowy>/
      )[1],
      city: reportResponse.data.match(
        /<praw_miejscowosc>(.*?)<\/praw_miejscowosc>/
      )[1],
      street: reportResponse.data.match(/<praw_ulica>(.*?)<\/praw_ulica>/)[1],
      buildingNumber: reportResponse.data.match(
        /<praw_numerNieruchomosci>(.*?)<\/praw_numerNieruchomosci>/
      )[1],
    };

    // Wylogowanie z usługi BIR
    await axios.post(
      BIR_URL,
      `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bir="http://CIS/BIR/PUBL/2014/07">
              <soapenv:Header/>
              <soapenv:Body>
                <bir:Wyloguj>
                  <bir:pIdentyfikatorSesji>${sessionId}</bir:pIdentyfikatorSesji>
                </bir:Wyloguj>
              </soapenv:Body>
            </soapenv:Envelope>`,
      { headers: { "Content-Type": "text/xml" } }
    );

    return NextResponse.json({ companyData: "OK" });
  } catch (error) {
    //     console.error("Error communicating with BIR service:", error);
    return NextResponse.json(
      {
        error: `${error}`,
      },
      { status: 500 }
    );
  }
}
