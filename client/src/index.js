import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GlobalStyles>
    </React.StrictMode>,
    document.getElementById("root")
);
