import React from "react";
import LanguageIndexContext from "/source/context/LanguageIndexContext";

function Theme () {

    const [ language_index ] = React.useContext( LanguageIndexContext );

    return (
        <section className={ "theme" } onClick={ handleClick }>
            {
                language_index === 0 && <><button>Light</button><button>Dark</button></>
            }
            {
                language_index === 1 && <><button>浅色</button><button>深色</button></>
            }
        </section>
    );

    function handleClick () {}

}

export default Theme;
