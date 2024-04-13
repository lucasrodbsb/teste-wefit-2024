import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { LIGHT_BLUE, LIGHT_GREEN } from "../../styles/colors";
import * as C from "./styles";

interface Props {
  id: number;
  image: string;
  title: string;
  price: number;
  btnText?: string;
  productAmount?: number;
}

const MovieCard = ({
  id,
  image,
  title,
  price,
  btnText = "Adicionar ao carrinho",
  productAmount = 0,
}: Props) => {
  return (
    <C.Container>
      <C.Image src={image} />
      <C.Title>{title}</C.Title>
      <C.Price>
        {price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </C.Price>
      <C.Button tintColor={productAmount <= 0 ? LIGHT_BLUE : LIGHT_GREEN}>
        <C.BtnIcon>
          <MdAddShoppingCart size={16} color="#FFF" />
          {productAmount}
        </C.BtnIcon>
        {btnText}
      </C.Button>
    </C.Container>
  );
};

export default MovieCard;
