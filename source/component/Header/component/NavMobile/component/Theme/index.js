import React from "react";
import LanguageIndexContext from "/source/context/LanguageIndexContext";
import ThemeIndexContext from "/source/context/ThemeIndexContext";

function Theme () {

    const [ language_index ] = React.useContext( LanguageIndexContext );

    return (
        <section className={ "theme" } onClick={ handleClick }>
            <div>
                { language_index === 0 ? <EnglishTheme/> : <ChineseTheme/> }
            </div>
        </section>
    );

    function handleClick () {}

}

function EnglishTheme () {

    const [ theme_index, setThemeIndex ] = React.useContext( ThemeIndexContext );
    // TODO
    return (
        <span>
            <button>Light</button>
            <hr/>
            <button>Dark</button>
        </span>
    );

}

function ChineseTheme () {

    return <span><button>浅色</button><hr/><button>深色</button></span>;

}

export default Theme;
