import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

/*  */
const dom = document.createElement( "div" );

document.body.append( dom );
dom.id = "react-root";
dom.style.inlineSize = "100%";

/*  */
const root = ReactDom.createRoot( dom );

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
