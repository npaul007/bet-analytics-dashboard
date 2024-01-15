// Styled components
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const ChartSection = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

export const DimensionalAnalysisSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 10px;
  }

  p {
    font-weight: bolder;
  }
`;

export const Dropdown = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
`;
