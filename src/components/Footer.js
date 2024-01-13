import React from "react";
import styled from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { gtagReportConversion } from "../modules/utils";
import { GTM_EMAIL_EVENT, GTM_PHONE_CALL_EVENT } from "../modules/constants";

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px;

  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterRow>
          <div>
            <h3>Contact</h3>
            <a
              href="mailto:nate.paulemon@auxiliaryone.io"
              target="__blank"
              onClick={() => gtagReportConversion(undefined, GTM_EMAIL_EVENT)}
            >
              <MailIcon />
              <p>nate.paulemon@auxiliaryone.io</p>
            </a>
            <a
              href="tel:+2037165681"
              target="__blank"
              onClick={() =>
                gtagReportConversion(undefined, GTM_PHONE_CALL_EVENT)
              }
            >
              <PhoneIcon />
              <p>+1-203-716-5681</p>
            </a>
          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} Auxiliary One LLC</p>
            <p>All rights reserved.</p>
          </div>
        </FooterRow>
      </FooterContent>
    </FooterContainer>
  );
};
