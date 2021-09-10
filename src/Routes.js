import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header";

import Home from "./pages/home";

const Routes = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Route component={Home} path="/" exact />
      </BrowserRouter>
    </>
  );
};

export default Routes;
