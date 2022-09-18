/* js */
import React from "react";
import ChapterIndexContext from "/source/context/ChapterIndexContext";
import LanguageIndexContext from "/source/context/LanguageIndexContext";

/* data */
import CHAPTERS from "/source/constant/chapters";
import LANGUAGES from "/source/constant/languages";

function Chapter ( { setSpread } ) {

    const [ language_index ] = React.useContext( LanguageIndexContext );
    const [ chapter_index, setChapterIndex ] = React.useContext( ChapterIndexContext );

    const language = LANGUAGES[ language_index ];
    const chapter = CHAPTERS[ chapter_index ][ language ];
    const chapters = CHAPTERS.map( item => item[ language ] );

    return (
        <section className={ "chapter" } onClick={ handleClick }>
            { chapters.map( ( item, index ) => (
                <div
                    key={ item }
                    data-index={ index }
                    className={ item === chapter ? "selected" : "unselected" }
                >
                    { item }
                </div>
            ) ) }
        </section>
    );

    function handleClick ( event ) {

        if ( event.target.nodeName.toLowerCase() !== "div" ) return;

        const index = + event.target.getAttribute( "data-index" );

        setSpread( false );
        setChapterIndex( index );

    }

}

export default Chapter;
