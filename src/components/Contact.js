import styled from "styled-components";
import { Container } from "./Container";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useCallback } from "react";
import { every } from "lodash";
import { GTM_EMAIL_EVENT, SEND_EMAIL } from "../modules/constants";
import { gtagReportConversion, replaceCarriageReturns } from "../modules/utils";

const Row = styled.div`
  color: #000;
  background: #fff;
  padding: 15px;
  z-index: 0;

  .contact-btn {
    background-color: black;
    @media screen and (min-width: 720px) {
      width: 120px;
    }

    @media screen and (max-width: 720px) {
      width: 100%;
    }
  }

  .contact-btn:hover {
    background-color: #fff;
    color: #000;
  }

  @media screen and (max-width: 720px) {
    text-align: center;
  }
`;

const FlexRow = styled.div`
  display: flex;

  @media screen and (min-width: 760px) {
    flex-direction: row;

    * {
      width: 90%;
      gap: 10%;
    }
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

const Form = styled.form`
  margin: 0 auto;

  * {
    margin: 15px 0;
  }
`;

const TextArea = styled.textarea`
  min-height: 200px;
  max-height: 200px;
  width: 100%;
  font-family: sans-serif;
  resize: none;
  padding: 1em;
  box-sizing: border-box;
  resize: vertical;
  border: 2px solid #ccc;
  border-radius: 5px;
`;

const Caption = styled.p`
  font-weight: normal;
`;

const HeaderText = styled.h2`
  margin-bottom: 30px;
`;

const initialFormState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [formValues, setFormValues] = useState(initialFormState);

  const { firstName, lastName, phoneNumber, email, message } = formValues;

  const onFormChange = useCallback(
    (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    },
    [formValues, setFormValues]
  );

  const formValid = useCallback(() => {
    return every([
      firstName.length,
      lastName.length,
      phoneNumber.length,
      email.length,
      message.length,
    ]);
  }, [firstName, lastName, phoneNumber, email, message]);

  const sendEmail = useCallback(() => {
    if (formValid()) {
      const body = replaceCarriageReturns(
        `${message}%0D%0A%0D%0APhone: ${phoneNumber}%0D%0AEmail: ${email}%0D%0AName: ${firstName} ${lastName}`
      );
      const href = `mailto:${SEND_EMAIL}?subject=Auxiliary One Site Inquiry&body=${body}`;

      window.open(href);
      setFormValues(initialFormState);

      gtagReportConversion(undefined, GTM_EMAIL_EVENT);
    }
  }, [
    setFormValues,
    formValid,
    email,
    firstName,
    lastName,
    phoneNumber,
    message,
  ]);

  return (
    <Row id="contact">
      <Container>
        <HeaderText>Contact</HeaderText>
        <Caption>Think we can help with a Project? Send us a Message!</Caption>
        <Form>
          <FlexRow>
            <TextField
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={onFormChange}
              required
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={onFormChange}
              required
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onFormChange}
              required
            />
            <TextField
              label="Email"
              name="email"
              value={email}
              onChange={onFormChange}
              required
            />
          </FlexRow>
          <TextArea
            label="Message"
            name="message"
            className="messageField"
            placeholder="Message"
            onChange={onFormChange}
            value={message}
            required
          />
          <br />
          <Button
            className="contact-btn"
            variant="contained"
            onClick={sendEmail}
          >
            Send
          </Button>
        </Form>
      </Container>
    </Row>
  );
};
