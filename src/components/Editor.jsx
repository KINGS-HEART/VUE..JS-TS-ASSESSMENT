import React from "react";

function Editor({ markdown, setMarkdown }) {
  return (
    <section className="markdown">
      <article>
        <h2>Editor</h2>
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          aria-label="Markdown editor"
        />
      </article>
    </section>
  );
}

export default Editor;
