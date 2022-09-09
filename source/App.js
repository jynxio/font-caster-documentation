import "/style/reset.css";
import "/style/base.css";
import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";

const chapters = [ "Overview", "Getting Started", "Reference" ];

function App () {

    const [ chapter, setChapter ] = React.useState( chapters[ 2 ] );

    return (
        <>
            <Header
                chapter={ chapter }
                chapters={ chapters }
                setChapter={ setChapter }
            />
            <Main
                chapter={ chapter }
                chapters={ chapters }
            />
        </>
    );

}

export default App;
