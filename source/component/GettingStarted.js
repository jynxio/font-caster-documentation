import React from "react";
import ReactMarkdown from "react-markdown";
import markdown_english from "/static/markdown/english/getting-started.md";
import markdown_chinese from "/static/markdown/chinese/getting-started.md";

function GettingStarted () {

    return <ReactMarkdown>{ markdown_chinese }</ReactMarkdown>

}

export default GettingStarted;
