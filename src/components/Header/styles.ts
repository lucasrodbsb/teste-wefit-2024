import { MOBILE_WIDTH } from './../../styles/breakpoints';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

type Props = {
  flexDirection?: string;
  bgcolor?: string;
  mgBottom?: string;
}

export const Logo = styled.p <Props>`
    font-weight: 700;
    font-size: 20px;
    color: white;
    text-decoration: none;
    cursor: pointer;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;

      @media(max-width: 600px){
        display: none;
      }
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

