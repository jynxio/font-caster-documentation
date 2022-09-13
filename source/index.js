import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const dom = document.getElementById( "react-root" );
const root = ReactDom.createRoot( dom );

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
