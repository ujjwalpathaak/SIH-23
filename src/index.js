import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import '../node_modules/@mdi/font/css/materialdesignicons.min.css';
// import '../node_modules/materialize-css/dist/css/materialize.min.css';
// import '../node_modules/materialize-css/dist/js/materialize.min.js';
// import './styles/styles.scss';

import App from './App';
import './index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);