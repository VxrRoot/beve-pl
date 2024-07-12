import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface KoalaWelcomeEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  cupType: string;
  design: string;
  cupAmount: string;
  nip: string;
  companyName: string;
  country: string;
  postCode: string;
  city: string;
  street: string;
  buildingNumber: string;
  consent: boolean;
  flatNumber: string;
  shipmentData: string;
  shipmentCountry: string;
  shipmentPostCode: string;
  shipmentCity: string;
  shipmentStreet: string;
  shipmentBuildingNumber: string;
  shipmentFlatNumber: string;
  contactType: string;
  pickupDate?: string;
  returnDate?: string;

  serviceType?: string;
  boxes?: string;
  cupProducer?: string;
  sendDate?: string;
  boxesAmount?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const CompanyEmailTemplate = (props: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/logo.png`}
          width="170"
          height="50"
          alt="Koala"
          style={logo}
        />
        <Text style={paragraph}>
          Nowa wiadomość od: {props.name} - {props.contactType}
        </Text>
        <Text style={paragraph}>
          <ul style={listStyle}>
            {/* Contact info */}
            <Text style={paragraph}>Konfiguracja</Text>
            {props.cupType && (
              <li style={listElementStyle}>Rodzaj kubka: {props.cupType}</li>
            )}
            {props.design && (
              <li style={listElementStyle}>
                Projekt graficzny: {props.design}
              </li>
            )}
            {props.cupAmount && (
              <li style={listElementStyle}>Ilość kubków: {props.cupAmount}</li>
            )}
            {props.pickupDate && (
              <li style={listElementStyle}>Data odbioru: {props.pickupDate}</li>
            )}
            {props.sendDate && (
              <li style={listElementStyle}>Data wysłania: {props.sendDate}</li>
            )}
            {props.returnDate && (
              <li style={listElementStyle}>Data zwrotu: {props.returnDate}</li>
            )}
            {props.serviceType && (
              <li style={listElementStyle}>
                Rodzaj usługi: {props.serviceType}
              </li>
            )}
            {props.boxes && (
              <li style={listElementStyle}>Skrzynki: {props.boxes}</li>
            )}
            {props.boxesAmount && (
              <li style={listElementStyle}>
                Ilość skrzynek: {props.boxesAmount}
              </li>
            )}
            {props.cupProducer && (
              <li style={listElementStyle}>
                Producent kubków: {props.cupProducer}
              </li>
            )}
            {/* Company / Shipment Info */}
            <Text style={paragraph}>Dane Firmy / Wysyłki</Text>
            <li style={listElementStyle}>Nip: {props.nip}</li>
            <li style={listElementStyle}>Nazwa firmy: {props.companyName}</li>
            <li style={listElementStyle}>Kraj: {props.country}</li>
            <li style={listElementStyle}>Kod pocztowy: {props.postCode}</li>
            <li style={listElementStyle}>Miejscowosc: {props.city}</li>
            <li style={listElementStyle}>Ulica: {props.street}</li>
            <li style={listElementStyle}>
              Numer budynku: {props.buildingNumber}
            </li>
            <li style={listElementStyle}>
              Numer mieszkania: {props.flatNumber}
            </li>

            <li style={listElementStyle}>Wysyłka: {props.shipmentData}</li>

            {props.shipmentData === "Inne dane wysyłki" && (
              <div>
                <li style={listElementStyle}>
                  Kraj wysyłki: {props.shipmentCountry}
                </li>
                <li style={listElementStyle}>
                  Kod wysyłki: {props.shipmentPostCode}
                </li>
                <li style={listElementStyle}>
                  Miejscowosc wysyłki: {props.shipmentCity}
                </li>
                <li style={listElementStyle}>
                  Ulica wysyłki: {props.shipmentStreet}
                </li>
                <li style={listElementStyle}>
                  Numer budynku wysyłki: {props.shipmentBuildingNumber}
                </li>
                <li style={listElementStyle}>
                  Numer mieszkania wysyłki: {props.shipmentFlatNumber}
                </li>
              </div>
            )}
            {/* Customer info */}
            <Text style={paragraph}>Dane kontaktowe</Text>
            <li style={listElementStyle}>Imię i nazwisko: {props.name}</li>
            <li style={listElementStyle}>Adres email: {props.email}</li>
            <li style={listElementStyle}>Telefon: {props.phone}</li>
            <li style={listElementStyle}>Wiadomość: {props.message}</li>
            <li style={listElementStyle}>
              Zgoda na przetwarzanie danych: {props.consent && "Tak"}
            </li>
          </ul>
        </Text>
        {/* <Text style={paragraph}>
          Miłego dnia,
          <br />
          Beve
        </Text> */}
        <Hr style={hr} />
        {/* <Text style={footer}>
              470 Noor Ave STE B #1148, South San Francisco, CA 94080
            </Text> */}
      </Container>
    </Body>
  </Html>
);

CompanyEmailTemplate.PreviewProps = {
  name: "Alan",
} as KoalaWelcomeEmailProps;

export default CompanyEmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const listStyle = {};

const listElementStyle = {};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
