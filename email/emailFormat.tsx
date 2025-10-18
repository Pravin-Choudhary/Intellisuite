import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  social: string;
  message: string;
}

export const ContactEmail = ({ name, email, social, message }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#f9fafb", fontFamily: "Arial, sans-serif" }}>
        <Container style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "8px" }}>
          <Heading style={{ color: "#111827", fontSize: "20px", marginBottom: "12px" }}>
            New Dashboard Setup Request 🚀
          </Heading>
          <Section style={{ borderTop: "1px solid #e5e7eb", paddingTop: "12px" }}>
            <Text><strong>Name:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Text><strong>Social Handle:</strong> {social}</Text>
            <Text><strong>Message:</strong></Text>
            <Text>{message}</Text>
          </Section>
        </Container>
        <Text style={{ color: "#9ca3af", fontSize: "12px", marginTop: "24px", textAlign: "center" }}>
          Sent via IntelliSuite Dashboard Contact Form
        </Text>
      </Body>
    </Html>
  );
};

export default ContactEmail;
