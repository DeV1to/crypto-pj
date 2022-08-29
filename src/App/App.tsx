// @ts-ignore
import React from "react";

import CoinPage from "./Pages/CoinPage/CoinPage";
import Market from "./Pages/Market/Market";

import "./App.css";

// eslint-disable-next-line import/order
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Search from "./Pages/Search/Search";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Market />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/coin"}>
          <Route path={":id"} element={<CoinPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
