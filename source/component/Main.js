import "/style/prism.css";
import "/style/component/main.css";
import React from "react";
import Content from "./Content";
import Prism from "prismjs";

function Main ( {
    chapter,
    chapters,
    language,
    languages,
} ) {

    React.useEffect( _ => {

        Prism.highlightAll();

    }, [ chapter ] );

    return (
        <main>
            <Content
                chapter={ chapter }
                chapters={ chapters }
                language={ language }
                languages={ languages }
            />
        </main>
    );

}

export default Main;
