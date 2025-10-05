import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

function Previewer({ markdown }) {
  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { breaks: true, gfm: true });
    return { __html: DOMPurify.sanitize(rawMarkup) };
  };

  return (
    <section className="markdown">
      <article>
        <h2>Preview</h2>
        <div
          id="preview"
          className="result"
          dangerouslySetInnerHTML={getMarkdownText()}
          aria-label="Markdown preview"
        />
      </article>
    </section>
  );
}

export default Previewer;
