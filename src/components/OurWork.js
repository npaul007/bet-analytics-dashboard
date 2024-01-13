import styled from "styled-components";
import { Container } from "./Container";
import { WorkFlow } from "./WorkFlow";

const Wrapper = styled.div`
  color: #fff;
  background: #000;
  padding: 15px;
`;

const CardWrapper = styled.div`
  margin: 0 auto;
`;

const CardRow = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 760px) {
    flex-direction: column;
  }

  gap: 10px;
`;

const Card = styled.div`
  @media screen and (min-width: 760px) {
    width: 50%;
  }
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  max-height: 300px;
  height: 100%;
  width: 100%;
  background: #fff;
`;

const Caption = styled.p`
  text-align: center;

  a {
    color: #add8e6;
    text-decoration: none;
  }
`;

const HeaderText = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const SubHeaderText = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

export const OurWork = () => {
  return (
    <Wrapper id="work">
      <Container>
        <HeaderText>The Work</HeaderText>
        <SubHeaderText>Web Development</SubHeaderText>
        <CardRow>
          <Card>
            <Image src={require("../assets/images/lebrunshvac.png")} />
            <Caption>
              <a href="https://lebrunshvac.com" target="blank">
                <b>Lebrun's HVAC Services -</b>
              </a>
              Created a static website with a functioning email form working
              using PHP
            </Caption>
          </Card>
          <Card>
            <Image src={require("../assets/images/bonzanmi.png")} />
            <Caption>
              <a href="https://bonzanmi.azurewebsites.net" target="blank">
                <b>Bon Zanmi Haitian Cuisine -</b>
              </a>
              [In Progress] Developed from scratch, a Web Application that
              allows users the ability to place food orders online by credit
              card - including email and text automation to alert users of order
              statuses.
            </Caption>
          </Card>
        </CardRow>
        <CardWrapper>
          <SubHeaderText>Desktop Application Development</SubHeaderText>
          <CardRow>
            <Card>
              <Image src={require("../assets/images/roku_remote.png")} />
              <Caption>
                <span>
                  <b>Roku Remote - </b>
                </span>
                A Desktop application, that when connected to the same Wi-Fi
                network of Roku Device(s) allows a user to control it from their
                keyboard, and adjust television settings
              </Caption>
            </Card>
            <Card>
              <Image src={require("../assets/images/cueit.jpeg")} />
              <Caption>
                <a
                  href="https://www.cuescript.tv/cueiT-software.php"
                  target="blank"
                >
                  <b>Cue-iT - </b>
                </a>
                Developed new features and provided maintenance on an Enterprise
                Teleprompting Desktop Application used in the Broadcasting
                industry worldwide
              </Caption>
            </Card>
            <Card>
              <Image src={require("../assets/images/stat_crawler.png")} />
              <Caption>
                <span>
                  <b>Stat Crawler - </b>
                </span>
                A Desktop Application that allows users to crawl and compare
                statistical data of individual NBA players (leveraging the
                balldontlie API)
              </Caption>
            </Card>
          </CardRow>
        </CardWrapper>
        <CardWrapper>
          <SubHeaderText>How We Get It Done</SubHeaderText>
          <WorkFlow />
        </CardWrapper>
      </Container>
    </Wrapper>
  );
};
