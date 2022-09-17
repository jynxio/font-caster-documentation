/* js */
import React from "react";

function NavMobile () {

    const [ spread, setSpread ] = React.useState( false );

    return (
        <nav className={ `mobile ${ spread ? "spread" : "shrink" }` }>
            <section className={ "switch" }>
                <button onClick={ handleSwitchClick }>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </section>
            <section className={ "chapter" }></section>
        </nav>
    );

    function handleSwitchClick () {

        setSpread( previous_spread => ! previous_spread  );

    }

}

export default NavMobile;
