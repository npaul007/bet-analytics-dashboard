import styled from "styled-components";
import HeaderBannerImg from "../assets/images/auxiliary_one_llc_banner_white_black.png";

const SecretWrapper = styled.div`
  background-color: #000;
  width: 100%;
  height: 84vh;
  color: #fff;
  text-align: center;
  padding: 15% 0;
`;


const HeaderBanner = styled.img`
  max-width: 520px;
  width: 100%;
  margin-bottom: -50px;
`;

export const SecretPage = ({secretStore}) => {

  return (
    <SecretWrapper>
        <HeaderBanner src={HeaderBannerImg}/>
        <h3 onClick={() => secretStore.increment()}>
            COMING SOON
        </h3>
    </SecretWrapper>
  );
};
