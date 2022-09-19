/* css */
import "/style/reset.css";
import "/style/font.css";
import "/style/prism.css";
import "/style/index.css";

/* js */
import React from "react";
import ChapterIndexContext from "./context/ChapterIndexContext";
import LanguageIndexContext from "./context/LanguageIndexContext";
import ThemeIndexContext from "./context/ThemeIndexContext";
import Header from "./component/Header/index";
import Main from "./component/Main/index";

/* data */
import THEMES from "./constant/themes";

function App () {

    const initial_theme_index = 0;
    const initial_chapter_index = 0;
    const initial_language_index = 0;

    const ThemeIndexContextProvider = useTheme( initial_theme_index );
    const ChapterIndexContextProvider = useChapter( initial_chapter_index );
    const LanguageIndexContextProvider = useLanguage( initial_language_index );

    return (
        <ThemeIndexContextProvider>
            <ChapterIndexContextProvider>
                <LanguageIndexContextProvider>
                    <Header/>
                    <Main/>
                </LanguageIndexContextProvider>
            </ChapterIndexContextProvider>
        </ThemeIndexContextProvider>
    );

}

function useTheme ( initial_index ) {

    return function ThemeIndexContextProvider ( property ) {

        const [ state, setState ] = React.useState( initial_index );

        React.useLayoutEffect( _ => {

            document.documentElement.className = THEMES[ state ];

        }, [ state ] );

        return (
            <ThemeIndexContext.Provider
                { ... property }
                value={ [ state, setState ] }
            />
        );

    }

}

function useChapter ( initial_index ) {

    return function ChapterIndexContextProvider ( property ) {

        return (
            <ChapterIndexContext.Provider
                { ... property }
                value={ React.useState( initial_index ) }
            />
        );

    }

}

function useLanguage ( initial_index ) {

    return function LanguageIndexContextProvider ( property ) {

        return (
            <LanguageIndexContext.Provider
                { ... property }
                value={ React.useState( initial_index ) }
            />
        );

    }

}

export default App;
