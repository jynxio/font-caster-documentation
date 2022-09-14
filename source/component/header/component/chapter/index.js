/* css */
import "/style/component/header/component/chapter/index.css";

/* js */
import React from "react";
import ChapterIndexContext from "../../../../context/ChapterIndexContext";
import LanguageIndexContext from "../../../../context/LanguageIndexContext";

/* data */
import LANGUAGES from "../../../../constant/languages";
import CHAPTERS from "../../../../constant/chapters";

function Chapter () {

    const [ language_index ] = React.useContext( LanguageIndexContext );
    const [ chapter_index, setChapterIndex ] = React.useContext( ChapterIndexContext );

    const language = LANGUAGES[ language_index ];
    const chapter = CHAPTERS[ chapter_index ][ language ];
    const chapters = CHAPTERS.map( item => item[ language ] );

    return (
        <section className={ "chapter" } onClick={ handleClick }>
            { chapters.map( ( item, index ) => (
                <span
                    key={ item }
                    data-index={ index }
                    className={ item === chapter ? "selected" : "unselected" }
                >
                    { item }
                </span>
            ) ) }
        </section>
    );

    function handleClick ( event ) {

        if ( event.target.nodeName.toLowerCase() !== "span" ) return;

        const index = + event.target.getAttribute( "data-index" );

        setChapterIndex( index );

    }

}

export default Chapter;
