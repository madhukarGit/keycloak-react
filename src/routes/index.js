import { useKeycloak } from "@react-keycloak/web";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "../components/Menu";
import HomePage from "../pages/HomePage";
import { PrivateRoute } from "../utilities/PrivateRoute";
import ProtectedPage from "../pages/ProtectedPage";

export const AppRouter = () => {
  const [, initialized] = useKeycloak();
  if (!initialized) {
    return <h3>Loading ... !!!</h3>;
  }
  return (
    <>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route
            roles={["RealmAdmin"]}
            path="/protected"
            component={ProtectedPage}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
