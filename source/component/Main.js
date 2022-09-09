import "/style/prism.css";
import "/style/component/main.css";
import React from "react";
import Overview from "./Overview";
import GettingStarted from "./GettingStarted";
import Reference from "./Reference";
import Prism from "prismjs";

function Main ( {
    chapter,
    chapters
} ) {

    React.useEffect( _ => {

        Prism.highlightAll();

    }, [ chapter ] );

    return <main>{ create() }</main>;

    function create () {

        switch ( chapter ) {

            case chapters[ 0 ]:
                return <Overview/>;

            case chapters[ 1 ]:
                return <GettingStarted/>;

            case chapters[ 2 ]:
                return <Reference/>;

            default:
                throw new Error( `Unknow "chapter"` );

        }

    }

}

export default Main;
