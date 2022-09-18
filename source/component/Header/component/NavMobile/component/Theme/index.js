/* js */
import React from "react";
import LanguageIndexContext from "/source/context/LanguageIndexContext";
import ThemeIndexContext from "/source/context/ThemeIndexContext";

/* data */
import THEMES from "/source/constant/themes";

function Theme () {

    const [ language_index ] = React.useContext( LanguageIndexContext );
    const [ , setThemeIndex ] = React.useContext( ThemeIndexContext );

    return (
        <section className={ "theme" } onClick={ handleClick }>
            <div>
                { language_index === 0 ? <EnglishTheme/> : <ChineseTheme/> }
            </div>
        </section>
    );

    function handleClick ( event ) {

        if ( event.target.nodeName.toLowerCase() !== "button" ) return;

        const index = + event.target.getAttribute( "data-index" );

        setThemeIndex( index );

    }

}

function EnglishTheme () {

    const [ theme_index ] = React.useContext( ThemeIndexContext );

    return (
        <span className={ THEMES[ theme_index ] }>
            <button  data-index={ 0 }>Light</button>
            <hr/>
            <button  data-index={ 1 }>Dark</button>
        </span>
    );

}

function ChineseTheme () {

    const [ theme_index ] = React.useContext( ThemeIndexContext );

    return (
        <span className={ THEMES[ theme_index ] }>
            <button data-index={ 0 }>浅色</button>
            <hr/>
            <button data-index={ 1 }>深色</button>
        </span>
    );

}

export default Theme;
