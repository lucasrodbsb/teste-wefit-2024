import React, { useState, useEffect } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductList } from "./styles";
import { useGetAllMoviesQuery } from "../../services/redux/api/moviesApi";
import * as C from "./styles";
import MovieCard from "../../components/MovieCard";
import { Movie } from "../../types/ProductTypes";
import Loader from "../../components/Loader";
import { PiMagnifyingGlass } from "react-icons/pi";
import { FormProvider, useForm } from "react-hook-form";
import { BACKGROUND_COLOR } from "../../styles/colors";

interface Inputs {
  searchBar: string;
}

const Home = () => {
  const { data: moviesData, isSuccess, isLoading } = useGetAllMoviesQuery();

  const [moviesDataFiltered, setMoviesDataFiltered] = React.useState<Movie[]>(
    []
  );

  const methods = useForm<Inputs>({
    mode: "onBlur",
  });

  const {
    formState: { errors },
  } = methods;

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

  React.useEffect(() => {
    setMoviesDataFiltered(
      moviesData?.products?.filter((item, index) => {
        return !!item?.title
          .trim()
          .toLocaleLowerCase()
          .includes(methods.watch()?.searchBar.trim().toLocaleLowerCase());
      }) ?? []
    );
  }, [methods.watch().searchBar]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isSuccess ? (
        <>
          <C.SearchBar>
            <FormProvider {...methods}>
              <input
                placeholder="Buscar filme pelo nome"
                type="text"
                {...methods.register("searchBar")}
              />
            </FormProvider>

            <PiMagnifyingGlass
              size={20}
              style={{
                position: "absolute",
                right: "16px",
                color:
                  methods.watch().searchBar == ""
                    ? "#c0c0c0"
                    : BACKGROUND_COLOR,
              }}
            />
          </C.SearchBar>

          {!!movies.length ? (
            <>
              <C.Container>{movies}</C.Container>
            </>
          ) : (
            <C.Message>
              {methods.watch().searchBar
                ? "Não encontramos nenhum título relacionado a sua pesquisa!"
                : ""}
            </C.Message>
          )}
        </>
      ) : (
        <C.Message>Erro ao fazer requisição!</C.Message>
      )}
    </>
  );
};

export default Home;

