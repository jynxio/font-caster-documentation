/* css */
import "/style/reset.css";
import "/style/index.css";

/* constant  */
import CHAPTERS from "./constant/chapter";
import LANGUAGES from "./constant/language";

/* js */
import React from "react";
import ChapterContext from "./context/ChapterContext";
import LanguageContext from "./context/LanguageContext";
import Header from "./component/header/index";

function App () {

    const initial_language = LANGUAGES[ 0 ];                   // "english"
    const initial_chapter = CHAPTERS[ 0 ][ initial_language ]; // "Overview"

    const ChapterContextProvider = useChapter( initial_chapter );
    const LanguageContextProvider = useLanguage( initial_language );

    return (
        <ChapterContextProvider>
            <LanguageContextProvider>
                <Header/>
            </LanguageContextProvider>
        </ChapterContextProvider>
    );

}

function useChapter ( initial_chapter ) {

    return function ChapterContextProvider ( property ) {

        return (
            <ChapterContext.Provider
                value={ React.useState( initial_chapter ) }
                { ... property }
            />
        );

    }

}

function useLanguage ( initial_language ) {

    return function LanguageContextProvider ( property ) {

        return (
            <LanguageContext.Provider
                value={ React.useState( initial_language ) }
                { ... property }
            />
        );

    }

}

export default App;
