/* js */
import React from "react";
import LanguageIndexContext from "/source/context/LanguageIndexContext";

function Language ( { visible, setVisible } ) {

    if ( ! visible ) return;

    const [ language_index, setLanguageIndex ] = React.useContext( LanguageIndexContext );

    return (
        <section className={ "language" } onClick={ handleClick }>
            <div className={ language_index === 0 ? "selected" : "unselected" }>English</div>
            <hr/>
            <div className={ language_index === 1 ? "selected" : "unselected" }>简体中文</div>
        </section>
    );

    function handleClick ( event ) {

        if ( event.target.nodeName.toLowerCase() !== "div" ) return;

        if ( event.target.textContent === "English" ) {

            language_index === 0 || setLanguageIndex( 0 );

            setVisible( false );

            return;

        }

        if ( event.target.textContent === "简体中文" ) {

            language_index === 1 || setLanguageIndex( 1 );

            setVisible( false );

            return;

        }

        throw new Error( "Unknow language type" );

    }

}

export default Language;
