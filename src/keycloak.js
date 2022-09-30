import Keycloak from "keycloak-js";

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'

const keycloakConfig = {
  url: "http://localhost:8080/",
  realm: "Demo",
  clientId: "react-app",
};

const keycloak = new Keycloak(keycloakConfig);
console.log("keycloak is ", keycloak);
export default keycloak;
