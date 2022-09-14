import overview_markdown_english from "/static/markdown/english/overview.md";
import example_markdown_english from "/static/markdown/english/example.md";
import reference_markdown_english from "/static/markdown/english/reference.md";
import overview_markdown_chinese from "/static/markdown/chinese/overview.md";
import example_markdown_chinese from "/static/markdown/chinese/example.md";
import reference_markdown_chinese from "/static/markdown/chinese/reference.md";

const MARKDOWNS = [
    {
        english: overview_markdown_english,
        chinese: overview_markdown_chinese,
    },
    {
        english: example_markdown_english,
        chinese: example_markdown_chinese,
    },
    {
        english: reference_markdown_english,
        chinese: reference_markdown_chinese,
    },
];

export default MARKDOWNS;
