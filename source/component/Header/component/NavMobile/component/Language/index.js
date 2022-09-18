import React from "react";

function Language () {

    return (
        <section className={ "language" } onClick={ handleClick }>
            <button>English</button>
            <button>简体中文</button>
        </section>
    );

    function handleClick () {}

}

export default Language;
