import React from "react";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";
import MovieCard from "../../components/MovieCard";
import { useGetAllMoviesQuery } from "../../services/redux/api/moviesApi";
import { LIGHT_BLUE } from "../../styles/colors";
import { Movie } from "../../types/ProductTypes";
import * as C from "./styles";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

const Cart = () => {
  const {
    data: moviesData,
    isSuccess,
    isLoading,
    error,
  } = useGetAllMoviesQuery();

  const [moviesDataFiltered, setMoviesDataFiltered] = React.useState<Movie[]>(
    []
  );

  const moviesDesktop =
    moviesDataFiltered?.map((item, index) => (
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
            <button type="button" disabled={true} onClick={() => {}}>
              <MdRemoveCircleOutline size={20} />
            </button>
            <input type="text" readOnly value={1} />
            <button type="button" onClick={() => {}}>
              <MdAddCircleOutline size={20} />
            </button>
          </div>
        </td>
        <td>
          <C.Subtotal>
            {item.price.toLocaleString("pt-br", {
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
              data-testid="remove-product"
              onClick={() => {}}
            >
              <MdDelete size={20} style={{ alignSelf: "flex-end" }} />
            </button>
          </div>
        </td>
      </tr>
    )) ?? [];

  const moviesMobile = moviesDataFiltered?.map((item, index) => (
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
            <MdDelete size={20} color={LIGHT_BLUE} />
          </C.PriceNTrashCan>
        </C.DetailsHeader>
        <C.DetailsFooter>
          <C.CounterContainer>
            <button type="button" disabled={true} onClick={() => {}}>
              <MdRemoveCircleOutline size={20} />
            </button>
            <input type="text" readOnly value={1} />
            <button type="button" onClick={() => {}}>
              <MdAddCircleOutline size={20} />
            </button>
          </C.CounterContainer>
          <C.SubtotalMobile>
            <C.SubtotalTitle>SUBTOTAL</C.SubtotalTitle>
            <C.Title>
              {item.price.toLocaleString("pt-br", {
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
        <C.Button type="button">Finalizar pedido</C.Button>
        <C.Total>
          <span>TOTAL</span>
          <strong>{"R$ 49,99"}</strong>
        </C.Total>
      </C.Footer>
    </C.Container>
  );
};

export default Cart;
