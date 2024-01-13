import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
