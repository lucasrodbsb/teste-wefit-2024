import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { Container, Cart, Logo } from "./styles";
import { useNavigate } from "react-router-dom";

const Header = (): JSX.Element => {
  // const { cart } = useCart();
  // const cartSize = cart.length;
  const navigate = useNavigate()
  

  return (
    <Container>
      <Logo onClick={() => navigate('/')}>WeMovies</Logo>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            0 Itens
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;
