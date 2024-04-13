import { LIGHT_BLUE, BLUE_HOVER, GREEN_HOVER } from './../../styles/colors';
import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  align-self: center;
  max-height: 188px;
  min-height: 188px;
  border-radius: 4px;
`;

export const Title = styled.strong`
  font-size: 12px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0 20px;
  color: #333;
`;

interface BtnProps {
    tintColor: string
}

export const Button = styled.button<BtnProps>`
  background: ${p => p.tintColor};
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  gap: 10px;
  transition: ease .3s;

  &:hover {
    background-color: ${p => p.tintColor == LIGHT_BLUE ? BLUE_HOVER : GREEN_HOVER };
  }
`;

export const BtnIcon = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;
