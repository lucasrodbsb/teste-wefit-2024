import { BACKGROUND_COLOR, LIGHT_BLUE } from "./../../styles/colors";
import { MOBILE_WIDTH, TABLET_WIDTH } from "./../../styles/breakpoints";
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

  @media (max-width: ${TABLET_WIDTH}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${MOBILE_WIDTH}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-family: "Open Sans";
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  position: relative;

  input {
    width: 100%;
    padding: 16px;
    border: 0;
    margin: 0;
    font-size: 16px;
    border-radius: 8px;
    padding-right: 45px;
    transition: ease;

    &::placeholder {
      color: #c0c0c0;
      font-family: "Open Sans";
    }

    &:focus {
      border: solid 2px ${LIGHT_BLUE}
    }
  }
`;

export const Message = styled.h1`

    color: #fff;
    font-size: 20px;
    text-align: center;
    font-weight: bold;

`
