// @ts-ignore
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Market from "../App/Pages/Market/Market";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Market />} />
        {/*<Route path={"/search"} element={<Search />} />*/}
        {/*<Route path={"/coin"} element={<Coin />} />*/}
      </Routes>
    </BrowserRouter>
  );
};
