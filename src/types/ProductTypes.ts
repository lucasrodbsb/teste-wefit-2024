export type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
}

export interface ProductInCart extends Product {
    qt: number
}


export type Products = {
    products: Movie[];
  }
export type Movie = {
    id: number;
    title: string;
    price: number;
    image: string;
  }
