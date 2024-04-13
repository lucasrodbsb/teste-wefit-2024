import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { store } from "./services/redux/store";
import MainRoutes from "./routes/MainRoutes";
import GlobalStyles from './styles/global';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
          <Header />
          <MainRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
