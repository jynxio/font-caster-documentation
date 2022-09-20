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

    return (
        <ThemeIndexContextProvider initialValue={ 0 }>
            <LanguageIndexContextProvider initialValue={ 0 }>
                <ChapterIndexContextProvider initialValue={ 0 }>
                    <Header/>
                    <Main/>
                </ChapterIndexContextProvider>
            </LanguageIndexContextProvider>
        </ThemeIndexContextProvider>
    );

}

function ThemeIndexContextProvider ( property ) {

    const [ index, setIndex ] = useLocalStorage( "theme", property.initialValue );

    React.useLayoutEffect( _ => {

        document.documentElement.className = THEMES[ index ];

    }, [ index ] );

    return (
        <ThemeIndexContext.Provider
            value={ [ index, setIndex ] }
            children={ property.children }
        />
    );

}

function LanguageIndexContextProvider ( property ) {

    const pair = useLocalStorage( "language", property.initialValue );

    return (
        <LanguageIndexContext.Provider
            value={ pair }
            children={ property.children }
        />
    );

}

function ChapterIndexContextProvider ( property ) {

    const pair = React.useState( property.initialValue );

    return (
        <ChapterIndexContext.Provider
            value={ pair }
            children={ property.children }
        />
    );

}

function useLocalStorage ( key, initial_value ) {

    const storage = getStorage();
    const [ index, setIndex ] = React.useState( storage?.[ key ] || initial_value );

    React.useEffect( _ => {

        const storage = getStorage();

        setStorage( { ... storage, [ key ]: index } );

    }, [ index ] );

    return [ index, setIndex ];

}

function getStorage () {

    return JSON.parse( globalThis.localStorage.getItem( "font-caster-documentation-storage" ) );

}

function setStorage ( value ) {

    globalThis.localStorage.setItem( "font-caster-documentation-storage", JSON.stringify( value ) );

    return value;

}

export default App;
