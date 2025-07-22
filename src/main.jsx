import { BrowserRouter } from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { App } from "./App.jsx";

import './main.css'

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
