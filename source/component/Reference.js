import React from "react";
import ReactMarkdown from "react-markdown";
import markdown_english from "/static/markdown/english/reference.md";
import markdown_chinese from "/static/markdown/chinese/reference.md";

function Reference () {

    return <ReactMarkdown>{ markdown_chinese }</ReactMarkdown>;

}

export default Reference;
