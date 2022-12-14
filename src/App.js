import React from "react";
import { KeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import { AppRouter } from "./routes";
// Wrap everything inside KeycloakProvider
const App = () => {
  return (
    <KeycloakProvider keycloak={keycloak}>
      <div className="App">
        <AppRouter />
      </div>
    </KeycloakProvider>
  );
};
export default App;
