import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { Container, Cart, Logo } from "./styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../services/redux/store";


const Header = () => {
  const navigate = useNavigate()
  const cart = useSelector((store: RootState) => store.cart.productsInCart)
  
  return (
    <Container>
      <Logo onClick={() => navigate('/')}>WeMovies</Logo>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>
            {cart.reduce((acc, obj) => obj.qt + acc, 0)}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;
