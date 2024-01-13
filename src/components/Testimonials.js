import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
import StarIcon from "@mui/icons-material/Star";

const Wrapper = styled.div`
  background-color: #a7bed7;
  padding: 30px 15px 30px 15px;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }

  @media screen and (min-width: 720px) {
    flex-direction: row;
  }
`;

const Card = styled.div`
  background-color: #fff;
  padding: 10px;
  text-align: center;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 720px) {
    width: 50%;
  }
`;

const Quote = styled.p`
  font-size: 16px;
  color: #666;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  font-style: italic;
  height: 90%;
  display: flex;
  align-items: center;
`;

const Name = styled.p`
  font-size: 16px;
  color: #999;
  font-weight: bolder;
  height: 10%;
  margin: 0 0 10px;
`;

const StarRow = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 25px;
`;

const Star = styled(StarIcon)`
  color: yellow;
`;

export const Testimonials = () => {
  return (
    <Wrapper id="testimonials">
      <Container>
        <h1>Testimonials</h1>
        <StarRow>
          <Star fontSize="large" />
          <Star fontSize="large" />
          <Star fontSize="large" />
          <Star fontSize="large" />
          <Star fontSize="large" />
        </StarRow>
        <Row>
          <Card>
            <Quote>
              "We worked with Nate on our website design for our business
              rebrand and the results were outstanding. We were able to
              collaborate and share our thoughts during the process and he was
              able to interpret our ideas into an effective and visually
              appealing website. This website has brought us continuous
              inquiries and revenue to our business. We highly recommend working
              with Nate on your next website or development project."
            </Quote>
            <Name>- Lebrun's HVAC Services</Name>
          </Card>
          <Card>
            <Quote>
              "Nate is a dedicated and passionate programmer that has made many
              contributions to CueScript's success in the teleprompting
              industry. Never shying away from innovative technology, he laid
              the groundwork for CueScript's speech following prompter
              technology, "Say-iT". He wrote clean and efficient code that
              helped the next generation of programmers to continue where he
              left off. He continues to be a trusted resource for CueScript's
              development team."
            </Quote>
            <Name>- CueScript</Name>
          </Card>
          <Card>
            <Quote>
              "Working with Nate was a pleasure! The website that he created for
              our business is easy to update and manage! He is always responsive
              to any questions I have! Looking forward to working with him for
              many more projects! Highly recommended!"
            </Quote>
            <Name>- Bon Zanmi Haitian Cuisine</Name>
          </Card>
        </Row>
      </Container>
    </Wrapper>
  );
};
