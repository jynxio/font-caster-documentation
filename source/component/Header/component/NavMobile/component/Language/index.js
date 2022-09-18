/* js */
import React from "react";
import LanguageIndexContext from "/source/context/LanguageIndexContext";

/* data */
import LANGUAGES from "/source/constant/languages";

function Language () {

    const [ language_index, setLanguageIndex ] = React.useContext( LanguageIndexContext );

    return (
        <section className={ "language" } onClick={ handleClick }>
            <div>
                <span className={ LANGUAGES[ language_index ] }>
                    <button data-index={ 0 }>English</button>
                    <hr/>
                    <button data-index={ 1 }>简体中文</button>
                </span>
            </div>
        </section>
    );

    function handleClick ( event ) {

        if ( event.target.nodeName.toLowerCase() !== "button" ) return;

        const index = + event.target.getAttribute( "data-index" );

        setLanguageIndex( index );

    }

}

export default Language;
