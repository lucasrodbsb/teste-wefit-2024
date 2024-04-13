import React from "react";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MessageCard from "../../components/MessageCard";
import { useGetAllMoviesQuery } from "../../services/redux/api/moviesApi";
import {
  addProduct,
  purchaseProducts,
  removeProduct,
  removeQtProduct,
} from "../../services/redux/slices/cart";
import { RootState } from "../../services/redux/store";
import { LIGHT_BLUE } from "../../styles/colors";
import { Movie } from "../../types/ProductTypes";
import * as C from "./styles";
import empty from '../../assets/images/vazio.png'
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((store: RootState) => store.cart.productsInCart);
  const navigate = useNavigate()

  const {
    data: moviesData
  } = useGetAllMoviesQuery();

  const [moviesDataFiltered, setMoviesDataFiltered] = React.useState<Movie[]>(
    []
  );

  const dispatch = useDispatch();

  const removeQtItemFromCart = (product: Movie) => {
    dispatch(removeQtProduct(product));
  };
  const removeItemFromCart = (product: Movie) => {
    dispatch(removeProduct(product));
  };
  const addItemToCart = (product: Movie) => {
    dispatch(addProduct(product));
  };
  const concludePurchase = () => {
    dispatch(purchaseProducts());
  };

  const moviesDesktop =
    cart?.map((item, index) => (
      <tr key={item.id}>
        <td style={{ minWidth: "220px" }}>
          <C.Description>
            <img src={item.image} alt={item.title} />
            <div>
              <strong>{item.title}</strong>
              <span>
                {item.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </C.Description>
        </td>
        <td>
          <div>
            <button
              type="button"
              disabled={item.qt == 1 ? true : false}
              onClick={() => {
                removeQtItemFromCart({
                  id: item.id,
                  image: item.image,
                  price: item.price,
                  title: item.title,
                });
              }}
            >
              <MdRemoveCircleOutline size={20} />
            </button>
            <input type="text" readOnly value={item.qt} />
            <button
              type="button"
              onClick={() => {
                addItemToCart({
                  id: item.id,
                  image: item.image,
                  price: item.price,
                  title: item.title,
                });
              }}
            >
              <MdAddCircleOutline size={20} />
            </button>
          </div>
        </td>
        <td>
          <C.Subtotal>
            {(item.price * item.qt).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </C.Subtotal>
        </td>
        <td>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <button
              type="button"
              onClick={() => {
                removeItemFromCart({
                  id: item.id,
                  image: item.image,
                  price: item.price,
                  title: item.title,
                });
              }}
            >
              <MdDelete size={20} style={{ alignSelf: "flex-end" }} />
            </button>
          </div>
        </td>
      </tr>
    )) ?? [];

  const moviesMobile = cart?.map((item, index) => (
    <C.ProductItemMobile>
      <C.Poster src={item.image} />
      <C.Details>
        <C.DetailsHeader>
          <C.Title>{item.title}</C.Title>
          <C.PriceNTrashCan>
            <C.Title>
              {item.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </C.Title>
            <MdDelete
              size={20}
              color={LIGHT_BLUE}
              style={{ cursor: "pointer" }}
              onClick={() => {
                removeItemFromCart({
                  id: item.id,
                  image: item.image,
                  price: item.price,
                  title: item.title,
                });
              }}
            />
          </C.PriceNTrashCan>
        </C.DetailsHeader>
        <C.DetailsFooter>
          <C.CounterContainer>
            <button
              type="button"
              disabled={item.qt == 1 ? true : false}
              onClick={() => {
                removeQtItemFromCart({
                  id: item.id,
                  image: item.image,
                  price: item.price,
                  title: item.title,
                });
              }}
            >
              <MdRemoveCircleOutline size={20} />
            </button>
            <input type="text" readOnly value={item.qt} />
            <button
              type="button"
              onClick={() => {
                addItemToCart({
                  id: item.id,
                  image: item.image,
                  price: item.price,
                  title: item.title,
                });
              }}
            >
              <MdAddCircleOutline size={20} />
            </button>
          </C.CounterContainer>
          <C.SubtotalMobile>
            <C.SubtotalTitle>SUBTOTAL</C.SubtotalTitle>
            <C.Title>
              {(item.price * item.qt).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </C.Title>
          </C.SubtotalMobile>
        </C.DetailsFooter>
      </C.Details>
    </C.ProductItemMobile>
  ));

  React.useEffect(() => {
    if (moviesDataFiltered?.length < 1 && moviesData?.products.length) {
      setMoviesDataFiltered(moviesData.products);
    }
    if (moviesData) {
      setMoviesDataFiltered(moviesData.products);
    }
  }, [moviesData]);

  return (
    <C.Container>
      {cart.length == 0 ? (
        <MessageCard 
        btnText="Recarregar página"
        message="Parece que não há nada por aqui :("
        divider
        image={empty}
        onBtnClick={()=>{
          navigate('/')
        }}
        />
      ) : (
        <>
          <C.ProductTable>
            <thead>
              <tr>
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>{moviesDesktop}</tbody>
          </C.ProductTable>
          <C.MobileProductsContainer>{moviesMobile}</C.MobileProductsContainer>
          <C.Divider></C.Divider>
          <C.Footer>
            <C.Button type="button" onClick={()=>{
              concludePurchase();
              navigate('/purchase-conclusion');
            }}>Finalizar pedido</C.Button>
            <C.Total>
              <span>TOTAL</span>
              <strong>
                {cart
                  .reduce((acc, obj) => obj.price * obj.qt + acc, 0)
                  .toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
              </strong>
            </C.Total>
          </C.Footer>
        </>
      )}
    </C.Container>
  );
};

export default Cart;
