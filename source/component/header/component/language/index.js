/* css */
import "/style/component/header/component/language/index.css";

/* js */
import React from "react";
import LANGUAGES from "../../../../constant/language";
import LanguageContext from "../../../../context/LanguageContext";

function Language ( { visible } ) {

    if ( ! visible ) return;

    const [ language, setLanguage ] = React.useContext( LanguageContext );

    return (
        <section className={ "language" } onClick={ handleClick }>
            <div>English</div>
            <hr/>
            <div>简体中文</div>
        </section>
    );

    function handleClick ( event ) {

        if ( event.target.nodeName.toLowerCase() !== "div" ) return;

        switch ( event.target.textContent ) {

            case "English":
                language === LANGUAGES[ 0 ] || setLanguage( LANGUAGES[ 0 ] );
                break;

            case "简体中文":
                language === LANGUAGES[ 1 ] || setLanguage( LANGUAGES[ 1 ] );
                break;

            default:
                throw new Error( "Unknow language type" );

        }

    }

}

export default Language;
