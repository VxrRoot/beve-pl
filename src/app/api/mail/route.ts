import { render } from "@react-email/render";
import CustomerEmailTemplate from "@/emails/CustomerEmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import CompanyEmailTemplate from "../../../emails/CompanyEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
  const {
    name,
    email,
    phone,
    message,
    cupType,
    design,
    cupAmount,
    nip,
    companyName,
    country,
    postCode,
    city,
    street,
    buildingNumber,
    flatNumber,
    shipmentData,
    shipmentCountry,
    shipmentPostCode,
    shipmentCity,
    shipmentStreet,
    shipmentBuildingNumber,
    shipmentFlatNumber,
    contactType,
    pickupDate,
    consent,
    returnDate,
    serviceType,
    boxes,
    cupProducer,
    sendDate,
    boxesAmount,
  } = await request.json();
  //   const { data, error } = await resend.emails.send({
  //     from: "Acme <onboarding@resend.dev>",
  //     to: [email],
  //     subject: "Hello world",
  //     react: CustomerEmailTemplate({ name }),
  //   });

  const { data: companyData, error: companyError } = await resend.emails.send({
    from: "Beve <kontakt@bevecup.com>",
    to: ["beve@bevecup.com", email],
    subject: `Beve kontakt - ${contactType}`,
    react: CompanyEmailTemplate({
      name,
      email,
      phone,
      message,
      cupType,
      design,
      cupAmount,
      nip,
      companyName,
      country,
      postCode,
      city,
      street,
      buildingNumber,
      flatNumber,
      contactType,
      shipmentBuildingNumber,
      shipmentCity,
      shipmentCountry,
      shipmentData,
      shipmentFlatNumber,
      shipmentPostCode,
      shipmentStreet,
      pickupDate,
      consent,
      returnDate,
      serviceType,
      boxes,
      cupProducer,
      sendDate,
      boxesAmount,
    }),
  });

  if (companyError) {
    return NextResponse.json(companyError);
  }

  return NextResponse.json({ code: 200, message: "Wysłano poprawnie" });
}
