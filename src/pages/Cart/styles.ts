import { MOBILE_WIDTH } from "./../../styles/breakpoints";
import { LIGHT_BLUE, BLUE_HOVER } from "./../../styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  @media (max-width: ${MOBILE_WIDTH}) {
    padding: 16px;
  }
`;

export const Divider = styled.div`

  width: 100%;
  background-color: #999999;
  height: 1px;

`

export const Footer = styled.footer`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media(max-width: ${MOBILE_WIDTH}){
    flex-direction: column-reverse;
  }
`;

export const Button = styled.button`
  background: ${LIGHT_BLUE};
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  font-weight: bold;
  text-transform: uppercase;
  transition: ease 0.2s;

  &:hover {
    background-color: ${BLUE_HOVER};
  }

  @media(max-width: ${MOBILE_WIDTH}){
    width: 100%;
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  @media (max-width: ${MOBILE_WIDTH}) {
    display: none;
  }

  thead {
  }

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
      text-align: center;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: ${LIGHT_BLUE};
      transition: color 0.2s;
    }

    &:disabled {
      svg {
        cursor: not-allowed;
      }
    }
  }
`;

export const Subtotal = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const Description = styled.div`
  align-items: center;
  justify-content: center;
  width: max-content;

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
    font-size: 14px;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
  }

  > div {
    flex-direction: column;
    margin-left: 20px;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  span {
    color: #999;
    font-weight: bold;
    font-size: 12px;
  }

  strong {
    font-size: 21px;
    margin-left: 5px;
  }

  @media(max-width: ${MOBILE_WIDTH}){
    width: 100%;
    justify-content: space-between;
    margin-bottom: 12px;
  }
`;

export const MobileProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductItemMobile = styled.div`
  width: 100%;
  display: none;

  @media (max-width: ${MOBILE_WIDTH}) {
    padding: 20px 0px;
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
`;

export const Poster = styled.img`
  height: 82px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  position: relative;
`;

export const DetailsHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  align-self: flex-start;
  justify-content: space-between;
  position: absolute;
  top: 0;

`;

export const DetailsFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  align-self: flex-end;
  justify-content: space-between;
  position: absolute;
  bottom: 0;

`;

export const Title = styled.span`
  color: #333;
  display: block;
  font-size: 16px;
  font-weight: bold;
`;

export const PriceNTrashCan = styled.div`
  display: flex;
  gap: 10px;
  min-width: 100px;
  justify-content: flex-end;
  align-items: center;
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #666;
    padding: 6px;
    width: 50px;
    text-align: center;
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: ${LIGHT_BLUE};
      transition: color 0.2s;
    }

    &:disabled {
      svg {
        cursor: not-allowed;
      }
    }
  }
`;

export const SubtotalMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  margin-right: 25px;

`;

export const SubtotalTitle = styled.span`
  color: #999999;
  font-size: 12px;
  font-weight: bold;
`;
