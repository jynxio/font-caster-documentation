/* css */
import "/style/component/header/index.css"

/* js */
import React from "react";
import Chapter from "./component/chapter";
import Icon from "./component/icon";

function Header () {

    return (
        <header>
            <Chapter/>
            <Icon/>
        </header>
    );

}

export default Header;
