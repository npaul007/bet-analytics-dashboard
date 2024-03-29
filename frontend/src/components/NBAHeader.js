import React from "react";
import styled from "styled-components";

// Styled components
const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h4`
  margin: 0;
`;

const Logo = styled.img`
  width: 20px; /* Adjust the size as needed */
  height: auto;
`;

// React functional component
export const NBAHeader = () => {
  return (
    <NavHeader>
      <Title>NBA Transaction Dashboard</Title>
      <Logo src={require("../assets/nba.png")} alt="NBA Logo" />
    </NavHeader>
  );
};
