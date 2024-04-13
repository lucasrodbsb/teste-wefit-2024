import React, { useState, useEffect } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductList} from "./styles";
import { useGetAllMoviesQuery } from "../../services/redux/api/moviesApi";
import * as C from "./styles";
import MovieCard from "../../components/MovieCard";
import { Movie } from "../../types/ProductTypes";
import Loader from "../../components/Loader";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = () => {
  const {
    data: moviesData,
    isSuccess,
    isLoading,
    error,
  } = useGetAllMoviesQuery();

  const [moviesDataFiltered, setMoviesDataFiltered] = React.useState<Movie[]>(
    []
  );

  const movies =
    moviesDataFiltered?.map((item, index) => (
      <MovieCard
        key={item.id}
        id={item.id}
        image={item.image}
        price={item.price}
        title={item.title}
      />
    )) ?? [];

  React.useEffect(() => {
    if (moviesDataFiltered?.length < 1 && moviesData?.products.length) {
      setMoviesDataFiltered(moviesData.products);
    }
    if (moviesData) {
      setMoviesDataFiltered(moviesData.products);
    }
  }, [moviesData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isSuccess ? (
        !!movies.length ? (
          <C.Container>{movies}</C.Container>
        ) : (
          <Loader />
        )
      ) : (
        <>Erro ao fazer requisição!</>
      )}
    </>
  );
};

export default Home;
