import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { isTemplateExpression } from "typescript";
import { addProduct } from "../../services/redux/slices/cart";
import { RootState } from "../../services/redux/store";
import { LIGHT_BLUE, LIGHT_GREEN } from "../../styles/colors";
import { Movie } from "../../types/ProductTypes";
import * as C from "./styles";

interface Props {
  id: number;
  image: string;
  title: string;
  price: number;
  btnText?: string;
}

const MovieCard = ({
  id,
  image,
  title,
  price,
  btnText = "Adicionar ao carrinho"
}: Props) => {

  const cart = useSelector((store: RootState) => store.cart.productsInCart)

  const dispatch = useDispatch();

  const addItemToCart = (product: Movie) => {
    dispatch(addProduct(product))
  }

  const [productAmount, setProductAmount] = React.useState<number>(0)

  React.useEffect(()=>{
    if(cart.find((item) => item.id == id)){
      cart.filter((item) => item.id == id).map((itemMap) => {
        setProductAmount(itemMap.qt)
      })
    }
  },[cart])

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
      <C.Button tintColor={productAmount <= 0 ? LIGHT_BLUE : LIGHT_GREEN}
      onClick={()=>{
        addItemToCart({
          id: id,
          image: image,
          price: price,
          title: title
        });
        console.log(cart)
      }}
      >
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
