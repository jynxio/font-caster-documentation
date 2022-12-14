/* js */
import React from "react";
import ThemeIndexContext from "/source/context/ThemeIndexContext";

/* data */
import THEMES from "/source/constant/themes";

function Icon ( { setLanguageVisible } ) {

    return (
        <section className={ "icon" }>
            <GithubIcon/>
            <LanguageIcon setLanguageVisible={ setLanguageVisible }/>
            <ThemeIcon/>
        </section>
    );

}

function GithubIcon () {

    return (
        <button className={ "github-icon" } onClick={ handleClick }>
            <svg t="1662744130776" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6642" width="200" height="200"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="6643"></path></svg>
        </button>
    );

    function handleClick () {

        globalThis.open( "https://github.com/jynxio/font-caster" );

    }

}

function LanguageIcon ( { setLanguageVisible } ) {

    return (
        <button className={ "language-icon" } onClick={ handleClick }>
            <svg t="1662743617546" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5554" width="200" height="200"><path d="M531 703.2c0.8-1.2 1.8-2.6 2.4-3.8 0.8-1.4 1.4-2.6 2-4 0.6-1.4 1.2-2.8 1.6-4.2 0.4-1.4 1-2.8 1.2-4.4 0.4-1.4 0.6-3 0.8-4.4 0.2-1.6 0.4-3 0.4-4.6v-4.6c0-1.6-0.2-3-0.4-4.6-0.2-1.4-0.6-3-1-4.4-0.4-1.4-0.8-3-1.4-4.4l-1.8-4.2c-0.6-1.4-1.4-2.6-2.2-4-0.8-1.2-1.6-2.6-2.6-3.8-1-1.2-1.8-2.4-3-3.4-1-1.2-2.2-2.2-3.2-3.2-1.2-1-2.4-2-3.6-2.8-0.4-0.4-31.6-23.4-77-73.2 83.6-113.2 131-242 150.4-302.6h68c1.6 0 3 0 4.6-0.2 1.6-0.2 3-0.4 4.6-0.6 1.4-0.2 3-0.6 4.4-1.2 1.4-0.4 2.8-1 4.2-1.6 1.4-0.6 2.8-1.2 4.2-2 1.4-0.8 2.6-1.4 4-2.4 1.2-0.8 2.4-1.8 3.6-2.8 1.2-1 2.2-2 3.4-3 1-1 2-2.2 3-3.4 1-1.2 1.8-2.4 2.8-3.6 0.8-1.2 1.6-2.6 2.4-4 0.8-1.4 1.4-2.8 2-4.2 0.6-1.4 1-2.8 1.6-4.2 0.4-1.4 0.8-3 1.2-4.4s0.6-3 0.6-4.6c0.2-1.6 0.2-3 0.2-4.6s0-3-0.2-4.6c-0.2-1.6-0.4-3-0.6-4.6s-0.6-3-1.2-4.4c-0.4-1.4-1-2.8-1.6-4.2-0.6-1.4-1.2-2.8-2-4.2-0.8-1.4-1.4-2.6-2.4-4-0.8-1.2-1.8-2.4-2.8-3.6-1-1.2-2-2.2-3-3.4-1-1-2.2-2-3.4-3s-2.4-1.8-3.6-2.8c-1.2-0.8-2.6-1.6-4-2.4-1.4-0.8-2.8-1.4-4.2-2-1.4-0.6-2.8-1-4.2-1.6-1.4-0.4-3-0.8-4.4-1.2-1.4-0.2-3-0.6-4.6-0.6-1.6-0.2-3-0.2-4.6-0.2H417.4V127.6c0-1.6 0-3-0.2-4.6-0.2-1.6-0.4-3-0.6-4.6-0.2-1.4-0.6-3-1.2-4.4-0.4-1.4-1-2.8-1.6-4.2s-1.2-2.8-2-4.2c-0.8-1.4-1.4-2.6-2.4-4-0.8-1.2-1.8-2.4-2.8-3.6-1-1.2-2-2.2-3-3.4-1-1-2.2-2-3.4-3-1.2-1-2.4-1.8-3.6-2.8-1.2-0.8-2.6-1.6-4-2.4s-2.8-1.4-4.2-2c-1.4-0.6-2.8-1-4.2-1.6-1.4-0.4-3-0.8-4.4-1.2-1.4-0.2-3-0.6-4.6-0.6-1.6-0.2-3-0.2-4.6-0.2-1.6 0-3 0-4.6 0.2-1.6 0.2-3 0.4-4.6 0.6-1.4 0.2-3 0.6-4.4 1.2-1.4 0.4-2.8 1-4.2 1.6-1.4 0.6-2.8 1.2-4.2 2s-2.6 1.4-4 2.4c-1.2 0.8-2.4 1.8-3.6 2.8-1.2 1-2.2 2-3.4 3s-2 2.2-3 3.4c-1 1.2-1.8 2.4-2.8 3.6-0.8 1.2-1.6 2.6-2.4 4-0.8 1.4-1.4 2.8-2 4.2-0.6 1.4-1 2.8-1.6 4.2-0.4 1.4-0.8 3-1.2 4.4s-0.6 3-0.6 4.6c-0.2 1.6-0.2 3-0.2 4.6v42.2H80c-1.6 0-3 0-4.6 0.2-1.6 0.2-3 0.4-4.6 0.6-1.4 0.2-3 0.6-4.4 1.2-1.4 0.4-2.8 1-4.2 1.6-1.4 0.6-2.8 1.2-4.2 2-1.4 0.8-2.6 1.4-4 2.4-1.2 0.8-2.4 1.8-3.6 2.8-1.2 1-2.2 2-3.4 3-1 1-2 2.2-3 3.4-1 1.2-1.8 2.4-2.8 3.6-0.8 1.2-1.6 2.6-2.4 4-0.8 1.4-1.4 2.8-2 4.2s-1 2.8-1.6 4.2c-0.4 1.4-0.8 3-1.2 4.4-0.2 1.4-0.6 3-0.6 4.6-0.2 1.6-0.2 3-0.2 4.6 0 1.6 0 3 0.2 4.6s0.4 3 0.6 4.6c0.2 1.4 0.6 3 1.2 4.4 0.4 1.4 1 2.8 1.6 4.2 0.6 1.4 1.2 2.8 2 4.2 0.8 1.4 1.4 2.6 2.4 4 0.8 1.2 1.8 2.4 2.8 3.6s2 2.2 3 3.4c1 1 2.2 2 3.4 3 1.2 1 2.4 1.8 3.6 2.8s2.6 1.6 4 2.4c1.4 0.8 2.8 1.4 4.2 2 1.4 0.6 2.8 1 4.2 1.6s3 0.8 4.4 1.2c1.4 0.2 3 0.6 4.6 0.6 1.6 0.2 3 0.2 4.6 0.2h416c-20 56.8-57 146.6-113.4 228.6-66.2-88-90.8-144.8-91-145.2-0.6-1.4-1.2-2.8-2-4-0.8-1.4-1.6-2.6-2.4-3.8-0.8-1.2-1.8-2.4-2.8-3.6-1-1.2-2-2.2-3-3.4-1-1-2.2-2-3.4-3s-2.4-1.8-3.6-2.6-2.6-1.6-4-2.2c-1.4-0.6-2.8-1.4-4.2-1.8-1.4-0.6-2.8-1-4.2-1.4-1.4-0.4-3-0.8-4.4-1-1.4-0.2-3-0.4-4.4-0.6-1.6-0.2-3-0.2-4.6-0.2-1.6 0-3 0-4.6 0.2-1.6 0.2-3 0.4-4.4 0.6-1.4 0.4-3 0.6-4.4 1.2s-2.8 1-4.2 1.6-2.8 1.2-4 2c-1.4 0.8-2.6 1.4-3.8 2.4-1.2 0.8-2.4 1.8-3.6 2.8-1.2 1-2.2 2-3.4 3-1 1-2 2.2-3 3.4-1 1.2-1.8 2.4-2.6 3.6s-1.6 2.6-2.4 3.8c-0.8 1.4-1.4 2.6-2 4-0.6 1.4-1 2.8-1.6 4.2-0.4 1.4-0.8 3-1.2 4.4-0.2 1.4-0.6 3-0.6 4.4-0.2 1.6-0.2 3-0.2 4.6s0 3 0.2 4.6 0.4 3 0.6 4.4c0.2 1.4 0.6 3 1 4.4s1 2.8 1.4 4.2c1.2 3 30.6 72.2 111.6 177 2 2.6 3.8 5 5.8 7.4-82.8 93.6-164 151.6-198 170.4-1.4 0.8-2.6 1.6-3.8 2.4-1.2 0.8-2.4 1.8-3.6 2.8-1.2 1-2.2 2-3.4 3-1 1-2 2.2-3 3.4-1 1.2-1.8 2.4-2.6 3.6-0.8 1.2-1.6 2.6-2.4 4-0.8 1.4-1.4 2.8-2 4.2-0.6 1.4-1 2.8-1.6 4.4s-0.8 3-1 4.4c-0.2 1.4-0.4 3-0.6 4.6-0.2 1.6-0.2 3-0.2 4.6 0 1.6 0 3 0.2 4.6 0.2 1.6 0.4 3 0.8 4.6 0.4 1.4 0.6 3 1.2 4.4 0.4 1.4 1 2.8 1.6 4.2s1.2 2.8 2 4.2c0.8 1.4 1.6 2.6 2.4 3.8 0.8 1.2 1.8 2.4 2.8 3.6 1 1.2 2 2.2 3 3.4 1 1 2.2 2 3.4 3 1.2 1 2.4 1.8 3.6 2.6 1.2 0.8 2.6 1.6 4 2.4 1.4 0.8 2.8 1.4 4.2 2 1.4 0.6 2.8 1 4.4 1.4 1.4 0.4 3 0.8 4.4 1 1.4 0.2 3 0.4 4.6 0.6 1.6 0.2 3 0.2 4.6 0.2 1.6 0 3-0.2 4.6-0.2 1.6-0.2 3-0.4 4.6-0.8 1.4-0.4 3-0.6 4.4-1.2 1.4-0.4 2.8-1 4.2-1.6 1.4-0.6 2.8-1.2 4.2-2 4.6-2.4 102.6-56.8 214.4-180.6 47.6 50.8 80.2 74.8 82.2 76.2 1.2 0.8 2.6 1.8 3.8 2.4 1.4 0.8 2.6 1.4 4 2.2l4.2 1.8c1.4 0.4 2.8 1 4.4 1.2 1.4 0.4 3 0.6 4.4 0.8 1.6 0.2 3 0.4 4.6 0.4h4.6c1.6 0 3-0.2 4.6-0.4 1.6-0.2 3-0.6 4.4-1s3-0.8 4.4-1.4l4.2-1.8c1.4-0.6 2.8-1.4 4-2.2 1.2-0.8 2.6-1.6 3.8-2.6 1.2-1 2.4-1.8 3.4-3 1.2-1 2.2-2.2 3.2-3.2 0.4-2.6 1.2-3.8 2.2-5z m141.2 40.2l70-169.4 70 169.4h-140z m302.8 151.2l-189.8-459.8c-0.8-2.2-1.8-4.2-3-6.2s-2.4-3.8-4-5.6-3-3.4-4.8-5c-1.6-1.6-3.4-3-5.4-4.2-1.8-1.2-3.8-2.4-6-3.4-2-1-4.2-1.8-6.4-2.4-2.2-0.6-4.4-1.2-6.6-1.4-2.2-0.4-4.6-0.6-6.8-0.6s-4.6 0.2-6.8 0.6c-2.2 0.4-4.4 0.8-6.6 1.4-2.2 0.6-4.4 1.4-6.4 2.4s-4 2.2-6 3.4c-1.8 1.2-3.6 2.6-5.4 4.2-1.6 1.6-3.2 3.2-4.8 5-1.4 1.8-2.8 3.6-4 5.6-1.2 2-2.2 4-3 6.2l-189.8 459.8c-0.6 1.4-1.2 2.8-1.6 4.2-0.4 1.4-0.8 3-1.2 4.4s-0.6 3-0.6 4.6c-0.2 1.6-0.2 3-0.2 4.6 0 1.6 0 3 0.2 4.6 0.2 1.6 0.4 3 0.6 4.6 0.2 1.4 0.6 3 1.2 4.4 0.4 1.4 1 2.8 1.6 4.4s1.2 2.8 2 4.2c0.8 1.4 1.4 2.6 2.4 4 0.8 1.2 1.8 2.4 2.8 3.6 1 1.2 2 2.4 3 3.4s2.2 2.2 3.4 3c1.2 1 2.4 1.8 3.6 2.8 1.2 0.8 2.6 1.6 4 2.4 1.4 0.8 2.8 1.4 4.2 2 1.4 0.6 2.8 1 4.4 1.6 1.4 0.4 3 0.8 4.4 1.2 1.4 0.2 3 0.6 4.6 0.6 1.6 0.2 3 0.2 4.6 0.2s3 0 4.6-0.2c1.6-0.2 3-0.4 4.6-0.6 1.4-0.4 3-0.6 4.4-1.2 1.4-0.4 2.8-1 4.2-1.6 1.4-0.6 2.8-1.2 4.2-2 1.4-0.8 2.6-1.6 4-2.4s2.4-1.8 3.6-2.8c1.2-1 2.2-2 3.4-3 1-1 2-2.2 3-3.4 1-1.2 1.8-2.4 2.8-3.6 0.8-1.2 1.6-2.6 2.4-4 0.8-1.4 1.4-2.8 2-4.2l38.6-93.6h216.6l38.6 93.6c0.8 2.2 1.8 4.2 3 6.2s2.4 3.8 4 5.6c1.4 1.8 3 3.4 4.8 5 1.6 1.6 3.4 3 5.4 4.2 1.8 1.2 3.8 2.4 6 3.4 2 1 4.2 1.8 6.4 2.4 2.2 0.6 4.4 1.2 6.6 1.4 2.2 0.4 4.6 0.6 6.8 0.6h2.8c1 0 1.8-0.2 2.8-0.2 1-0.2 1.8-0.2 2.8-0.4 1-0.2 1.8-0.4 2.8-0.6 1-0.2 1.8-0.4 2.8-0.8 1-0.2 1.8-0.6 2.6-1s1.8-0.8 2.6-1.2c0.8-0.4 1.8-0.8 2.6-1.2 0.8-0.4 1.6-1 2.4-1.4s1.6-1 2.4-1.6c0.8-0.6 1.6-1.2 2.2-1.8 0.8-0.6 1.4-1.2 2.2-1.8 0.8-0.6 1.4-1.2 2-2l2-2c0.6-0.8 1.2-1.4 1.8-2.2 0.6-0.8 1.2-1.6 1.6-2.4 0.6-0.8 1-1.6 1.6-2.4 0.4-0.8 1-1.6 1.4-2.6 0.4-0.8 0.8-1.8 1.2-2.6 0.4-0.8 0.8-1.8 1-2.6 0.4-0.8 0.6-1.8 0.8-2.8 0.2-1 0.6-1.8 0.8-2.8 0.2-1 0.4-1.8 0.6-2.8 0.2-1 0.2-1.8 0.4-2.8 0-1 0.2-1.8 0.2-2.8v-2.8c0-1 0-1.8-0.2-2.8 0-1-0.2-1.8-0.4-2.8-0.2-1-0.4-1.8-0.6-2.8-0.2-1-0.4-1.8-0.6-2.8-0.2-1-0.6-1.8-0.8-2.8-1-1.4-1.2-2.2-1.6-3z" p-id="5555"></path></svg>
        </button>
    );

    function handleClick () {

        setLanguageVisible( previous_value => ! previous_value );

    }

}

function ThemeIcon () {

    const [ theme_index, setThemeIndex ] = React.useContext( ThemeIndexContext );
    const theme = THEMES[ theme_index ];

    return (
        <button className={ "theme-icon" } onClick={ handleClick }>
            <span className={ theme }>
                <svg className={ "sun" } xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>
                <svg className={ "moon" } xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>
            </span>
        </button>
    );

    function handleClick () {

        const next_theme_index = theme_index === 0 ? 1 : 0;

        setThemeIndex( next_theme_index );

    }

}

export default Icon;
