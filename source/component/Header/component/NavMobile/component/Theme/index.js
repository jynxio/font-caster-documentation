import React from "react";
import LanguageIndexContext from "/source/context/LanguageIndexContext";

function Theme () {

    const [ language_index ] = React.useContext( LanguageIndexContext );

    return (
        <section className={ "theme" } onClick={ handleClick }>
            <div>
                {
                    language_index === 0
                        ? <span><button>Light</button><hr/><button>Dark</button></span>
                        : <span><button>浅色</button><hr/><button>深色</button></span>
                }
            </div>
        </section>
    );

    function handleClick () {}

}

export default Theme;
