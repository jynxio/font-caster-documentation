import React from "react";

function Github () {

    return (
        <section className={ "github" } onClick={ handleClick }>GitHub</section>
    );

    function handleClick () {

        globalThis.open( "https://github.com/jynxio/font-caster" );

    }

}

export default Github;
