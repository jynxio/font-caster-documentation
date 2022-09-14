/* css */
import "/style/component/header/component/chapter/index.css";

/* constant */
import CHAPTERS from "../../../../constant/chapter";

/* js */
import React from "react";
import ChapterContext from "../../../../context/ChapterContext";
import LanguageContext from "../../../../context/LanguageContext";

function Chapter () {

    const [ language ] = React.useContext( LanguageContext );
    const [ chapter ] = React.useContext( ChapterContext );
    const chapters = CHAPTERS.map( item => item[ language ] );

    return (
        <section className={ "chapter" }>
            { chapters.map( item => (
                <span
                    key={ item }
                    className={ item === chapter ? "selected" : "unselected" }
                >
                    { item }
                </span>
            ) ) }
        </section>
    );

}

export default Chapter;
