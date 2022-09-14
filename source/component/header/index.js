/* css */
import "/style/component/header/index.css"

/* js */
import React from "react";
import Chapter from "./component/chapter";
import Icon from "./component/icon";
import Language from "./component/language";

function Header () {

    const [ language_visible, setLanguageVisible ] = React.useState( false );

    return (
        <header>
            <Chapter/>
            <Icon setLanguageVisible={ setLanguageVisible }/>
            <Language visible={ language_visible } setVisible={ setLanguageVisible }/>
        </header>
    );

}

export default Header;
