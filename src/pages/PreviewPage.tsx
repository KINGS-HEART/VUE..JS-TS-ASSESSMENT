import { useMarkdown } from "../context/MarkdownContext";
import ReactMarkdown from "react-markdown";

export default function PreviewPage() {
  const { markdown } = useMarkdown();

  return (
    <main className="p-6 max-w-5xl mx-auto">
      {/* ✅ Semantic Section */}
      <section
        aria-label="Markdown preview section"
        role="region"
        className="bg-white rounded-xl shadow-md p-4 overflow-auto"
      >
        <h2 className="text-xl font-semibold mb-3">Preview</h2>
        <div
          className="prose max-w-none focus:outline-none"
          tabIndex={0} // ✅ focusable for accessibility
        >
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </section>
    </main>
  );
}
