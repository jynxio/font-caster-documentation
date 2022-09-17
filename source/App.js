/* css */
import "/style/reset.css";
import "/style/font.css";
import "/style/prism.css";
import "/style/index.css";

/* js */
import React from "react";
import ChapterIndexContext from "./context/ChapterIndexContext";
import LanguageIndexContext from "./context/LanguageIndexContext";
import Header from "./component/Header/index";
import Main from "./component/Main/index";

function App () {

    const initial_language_index = 0;
    const initial_chapter_index = 0;

    const ChapterIndexContextProvider = useChapter( initial_chapter_index );
    const LanguageIndexContextProvider = useLanguage( initial_language_index );

    return (
        <ChapterIndexContextProvider>
            <LanguageIndexContextProvider>
                <Header/>
                <Main/>
            </LanguageIndexContextProvider>
        </ChapterIndexContextProvider>
    );

}

function useChapter ( initial_chapter ) {

    return function ChapterIndexContextProvider ( property ) {

        return (
            <ChapterIndexContext.Provider
                value={ React.useState( initial_chapter ) }
                { ... property }
            />
        );

    }

}

function useLanguage ( initial_language ) {

    return function LanguageIndexContextProvider ( property ) {

        return (
            <LanguageIndexContext.Provider
                value={ React.useState( initial_language ) }
                { ... property }
            />
        );

    }

}

export default App;
