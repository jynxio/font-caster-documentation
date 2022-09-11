import "/style/reset.css";
import "/style/base.css";
import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";

const languages = [ "english", "chinese" ];
const chapters = {
    [ languages[ 0 ] ]: [ "Overview", "Getting Started", "Reference" ],
    [ languages[ 1 ] ]: [ "概述", "快速开始", "参考文档" ],
};

function App () {

    const [ language, setLanguage ] = React.useState( languages[ 0 ] );
    const [ chapter, setChapter ] = React.useState( chapters[ language ][ 0 ] );

    return (
        <>
            <Header
                chapter={ chapter }
                chapters={ chapters }
                language={ language }
                languages={ languages }
                setChapter={ setChapter }
                setLanguage={ setLanguage }
            />
            <Main
                chapter={ chapter }
                chapters={ chapters }
                language={ language }
                languages={ languages }
            />
        </>
    );

}

export default App;
