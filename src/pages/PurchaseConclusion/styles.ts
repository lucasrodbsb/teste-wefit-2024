import { MOBILE_WIDTH } from "./../../styles/breakpoints";
import { styled } from "styled-components";

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  @media (max-width: ${MOBILE_WIDTH}) {
    padding: 16px;
  }
`;
