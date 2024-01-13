import styled from "styled-components";
import { Container } from "./Container";
import HeaderBannerImg from "../assets/images/auxiliary_one_llc_banner_white_black.png";

const HomeHeader = styled.div`
  background-image: url(${require("../assets/images/pexels-markus-spiske-4383298.jpg")});
  background-size: cover;
  max-height: 450px;
  width: 100%;
  color: #fff;
  text-align: center;
  padding: 15% 0;
`;

const Row = styled.div`
  color: #000;
  padding: 15px;
  margin-top: 30px;
  margin-bottom: 30px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 75%;

    h2 {
      width: 30%;
      margin: 0;
    }

    p {
      width: 70%;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 760px) {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin: 0;
      width: 100%;

      h2 {
        text-align: center;
      }
      h2,
      p {
        width: 100%;
      }
    }
  }
`;

const HeaderBanner = styled.img`
  max-width: 520px;
  width: 100%;
  margin-bottom: -50px;
`;

export const About = () => {
  return (
    <div>
      <HomeHeader id="about-1">
        <HeaderBanner src={HeaderBannerImg} />
        <h4
          style={{ fontFamily: "Open Sans, sans-serif", fontWeight: "bolder" }}
        >
          Your go-to destination for specialized and supplemental software
          development
        </h4>
      </HomeHeader>
      <Row id="about-2">
        <Container>
          <div>
            {" "}
            <h2>Who we are</h2>
            <p>
              At the helm of our dynamic LLC based in Hamden, Connecticut, is
              Nate Paulemon, the owner and director who defines the essence of
              our company. We are a forward-thinking organization specializing
              in the development of web and desktop applications. Our commitment
              is deeply rooted in remaining at the forefront of technology
              trends, a mission led by Nate himself. Through our collective
              expertise, we diligently craft high-quality, custom applications
              that embody our core values of creativity, efficiency, and
              customer-centricity. As a company, we take immense pride in our
              unique ability to seamlessly transform ideas into functional,
              user-friendly software that leaves a tangible impact in the
              ever-evolving digital realm.
            </p>
          </div>
        </Container>
      </Row>
      <Row>
        <Container>
          <div>
            {" "}
            <h2>Who we serve</h2>
            <p>
              At our core, we are committed to serving a diverse range of
              clients, including established businesses, individuals, and
              startups who are looking to launch or improve their digital
              presence. We understand that the needs of each client segment can
              vary significantly, and that's why our solutions are tailored to
              meet these specific needs.
            </p>
          </div>
        </Container>
      </Row>
      <Row>
        <Container>
          <div>
            {" "}
            <h2>Tools we use</h2>
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                fontSize: "15px",
              }}
            >
              <span>
                <b>Programming Languages: </b> JavaScript, TypeScript, PHP,
                Java, SQL
              </span>
              <br />
              <span>
                <b>Front-End Technologies: </b> VueJS, ReactJS, Redux, Mobx,
                HTML, CSS, JQuery
              </span>
              <br />
              <span>
                <b>Back-End Technologies: </b> Apache, ExpressJS, MySQL,
                MongoDB, AWS, Azure
              </span>
              <br />
              <span>
                <b>Frameworks: </b> MeteorJS, NW.js, ElectronJS, Symfony
              </span>
              <br />
              <span>
                <b>Continuous Integration / Continuous Development: </b> Gitlab,
                Circle, Sentry, Docker
              </span>
            </p>
          </div>
        </Container>
      </Row>
    </div>
  );
};
