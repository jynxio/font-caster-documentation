/* js */
import React from "react";
import Chapter from "./component/Chapter";
import Github from "./component/Github";
import Language from "./component/Language";
import Theme from "./component/Theme";

function NavMobile () {

    const [ spread, setSpread ] = React.useState( false );

    return (
        <nav className={ `mobile ${ spread ? "spread" : "shrink" }` }>
            <section className={ "switch" }>
                <button onClick={ handleClick }>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </section>
            <section className={ "menu" }>
                <Chapter/>
                <Github/>
                <Theme/>
                <Language/>
            </section>
        </nav>
    );

    function handleClick () {

        setSpread( previous_spread => ! previous_spread  );

    }

}

export default NavMobile;
