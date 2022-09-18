import React from "react";
import LanguageIndexContext from "/source/context/LanguageIndexContext";

function Language () {

    const [ language_index ] = React.useContext( LanguageIndexContext );

    return (
        <section className={ "language" } onClick={ handleClick }>
            <div>
                <span>
                    <button className={ language_index === 0 ? "selected" : "unselected" }>English</button>
                    <hr/>
                    <button className={ language_index === 1 ? "selected" : "unselected" }>简体中文</button>
                </span>
            </div>
        </section>
    );

    function handleClick () {}

}

export default Language;
