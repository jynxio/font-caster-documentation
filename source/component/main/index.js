/* js */
import React from "react";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import ChapterIndexContext from "../../context/ChapterIndexContext";
import LanguageIndexContext from "../../context/LanguageIndexContext";

/* data */
import LANGUAGES from "../../constant/languages";
import MARKDOWNS from "./constant/markdown";

function Main () {

    const [ chapter_index ] = React.useContext( ChapterIndexContext );
    const [ language_index ] = React.useContext( LanguageIndexContext );

    const language = LANGUAGES[ language_index ];
    const markdown = MARKDOWNS[ chapter_index ][ language ];

    React.useEffect( _ => Prism.highlightAll(), [ chapter_index, language_index ] );

    return (
        <main>
            <article>
                <ReactMarkdown>{ markdown }</ReactMarkdown>
            </article>
        </main>
    );

}

export default Main;
