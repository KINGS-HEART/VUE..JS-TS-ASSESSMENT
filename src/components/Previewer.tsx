import { marked } from "marked";
import DOMPurify from "dompurify";

function Previewer({ markdown }: { markdown: string }) {
  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { breaks: true, gfm: true });
    const sanitizedMarkup = DOMPurify.sanitize(rawMarkup as string);
    return { __html: sanitizedMarkup };
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
