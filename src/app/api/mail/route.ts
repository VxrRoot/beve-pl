import { render } from "@react-email/render";
import CustomerEmailTemplate from "@/emails/CustomerEmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import CompanyEmailTemplate from "@/emails/companyEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
  const {
    name,
    email,
    phone,
    message,
    consent,
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
    returnDate,
  } = await request.json();

  //   const { data, error } = await resend.emails.send({
  //     from: "Acme <onboarding@resend.dev>",
  //     to: [email],
  //     subject: "Hello world",
  //     react: CustomerEmailTemplate({ name }),
  //   });

  const { data: companyData, error: companyError } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [email],
    subject: "Hello world",
    react: CompanyEmailTemplate({
      name,
      email,
      phone,
      message,
      consent,
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
      returnDate,
    }),
  });

  if (companyError) {
    return NextResponse.json(companyError);
  }

  return NextResponse.json({ message: "Wysłano poprawnie" });
}
