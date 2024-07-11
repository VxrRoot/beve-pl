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
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const CustomerEmailTemplate = ({ name }: KoalaWelcomeEmailProps) => (
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
        <Text style={paragraph}>Cześć {name}!</Text>
        <Text style={paragraph}>
          Dziękujemy za wiadomość! Skontaktujemy się z Tobą najszybciej jak
          możliwe
        </Text>
        <Text style={paragraph}>
          Miłego dnia,
          <br />
          Beve
        </Text>
        <Hr style={hr} />
        {/* <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text> */}
      </Container>
    </Body>
  </Html>
);

CustomerEmailTemplate.PreviewProps = {
  name: "Alan",
} as KoalaWelcomeEmailProps;

export default CustomerEmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

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
