import React from "react";
import loader from "../../assets/images/load-spinner.png";
import * as C from "./styles";

const Loader = () => {
  return (
    <C.Spinner>
      <img src={loader} />
    </C.Spinner>
  );
};

export default Loader;
