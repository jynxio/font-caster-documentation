import React from "react";
import ReactMarkdown from "react-markdown";
import markdown_english from "/static/markdown/english/overview.md";
import markdown_chinese from "/static/markdown/chinese/overview.md";

function Overview () {

    return <ReactMarkdown>{ markdown_chinese }</ReactMarkdown>;

}

export default Overview;
