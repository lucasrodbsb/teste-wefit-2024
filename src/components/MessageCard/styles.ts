import { MOBILE_WIDTH } from '../../styles/breakpoints';
import { BACKGROUND_COLOR, LIGHT_BLUE, BLUE_HOVER, GREEN_HOVER } from '../../styles/colors';
import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    background-color: #fff;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 64px;
    min-height: 60vh;

    @media(max-width: ${MOBILE_WIDTH}){
        padding: 64px 20px;
    }

`

export const Message = styled.h1`

    color: ${BACKGROUND_COLOR};
    font-size: 20px;
    text-align: center;
    font-weight: bold;

`

export const Image = styled.img`

    height: 307px;

`

export const Divider = styled.div`

  width: 100%;
  max-width: 447px;
  background-color: ${BACKGROUND_COLOR};
  height: 1px;
  margin-top: -24px;

`

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
  font-size: 12px;
  gap: 10px;
  transition: ease .3s;
  max-width: 157px;

  &:hover {
    background-color: ${p => p.tintColor == LIGHT_BLUE ? BLUE_HOVER : GREEN_HOVER };
  }
`;
