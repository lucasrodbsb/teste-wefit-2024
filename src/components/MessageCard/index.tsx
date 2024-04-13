import React from "react";
import * as C from "./styles";
import empty from "../../assets/images/vazio.png";
import { LIGHT_BLUE } from "../../styles/colors";

interface Props {
  message: string;
  image: string;
  divider: boolean;
  btnText: string;
  onBtnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const MessageCard = ({
  message,
  image,
  divider,
  btnText,
  onBtnClick,
}: Props) => {
  return (
    <C.Container>
      <C.Message>{message}</C.Message>
      <C.Image src={image} />
      {divider ? <C.Divider></C.Divider> : <></>}
      <C.Button onClick={onBtnClick} tintColor={LIGHT_BLUE}>{btnText}</C.Button>
    </C.Container>
  );
};

export default MessageCard;
