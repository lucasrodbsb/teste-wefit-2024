import { MOBILE_WIDTH, TABLET_WIDTH } from './../../styles/breakpoints';
import styled from "styled-components";

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
`;

export const Container = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media(max-width: ${TABLET_WIDTH}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: ${MOBILE_WIDTH}) {
    grid-template-columns: repeat(1, 1fr);
  }

`