/* js */
import React from "react";
import Chapter from "./component/Chapter/index";
import Icon from "./component/Icon/index";
import Language from "./component/Language/index";

function NavDesktop () {

    const [ language_visible, setLanguageVisible ] = React.useState( false );

    return (
        <nav className="desktop">
            <Chapter/>
            <Icon setLanguageVisible={ setLanguageVisible }/>
            <Language visible={ language_visible } setVisible={ setLanguageVisible }/>
        </nav>
    );

}

export default NavDesktop;
