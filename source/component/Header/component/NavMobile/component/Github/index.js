import React from "react";

function Github () {

    return (
        <section className={ "github" }>
            <div><span  onClick={ handleClick }>GitHub</span></div>
        </section>
    );

    function handleClick () {

        globalThis.open( "https://github.com/jynxio/font-caster" );

    }

}

export default Github;
