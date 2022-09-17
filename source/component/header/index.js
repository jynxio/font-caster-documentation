/* js */
import React from "react";
import NavDesktop from "./component/NavDesktop/index";
import NavMobile from "./component/NavMobile/index";

function Header () {

    return (
        <header>
            <NavDesktop/>
            <NavMobile/>
        </header>
    );

}

export default Header;
