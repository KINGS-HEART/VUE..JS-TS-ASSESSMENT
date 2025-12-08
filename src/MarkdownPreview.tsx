import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // GitHub-flavored markdown
import rehypeHighlight from "rehype-highlight"; // Code highlighting
import "highlight.js/styles/github.css"; // Light theme for syntax highlighting

// CodeMirror
import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { oneDark } from "@codemirror/theme-one-dark";

export default function MarkdownPreview() {
  const {
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      markdown:
        localStorage.getItem("markdownContent") ||
        `# ✨ Welcome to Markdown Previewer

Start typing markdown here...

- **Bold**
- *Italic*
- [Link](https://example.com)
- Code blocks
- Tables, lists & more 🚀

\`\`\`js
// Example code
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet("Markdown"));
\`\`\`
`,
    },
  });

  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const markdownText = watch("markdown");

  // Persist to localStorage
  useEffect(() => {
    if (markdownText) {
      localStorage.setItem("markdownContent", markdownText);
    }
  }, [markdownText]);

  // Handle save (mock API)
  const onSubmit = async (data: { markdown: string }) => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    alert("✅ Markdown saved:\n\n" + data.markdown);
    setLoading(false);
  };

  // Download markdown file
  const handleDownload = () => {
    const blob = new Blob([markdownText], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    a.href = url;
    a.download = `markdown-${timestamp}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Upload markdown file
  const handleUpload = (file: File) => {
    if (file && (file.type === "text/markdown" || file.name.endsWith(".md"))) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setValue("markdown", event.target.result as string, { shouldValidate: true });
        }
      };
      reader.readAsText(file);
    } else {
      alert("⚠️ Please upload a valid .md file");
    }
  };

  // Handle file input change
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUpload(file);
    }
  };

  // Drag and drop
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLFormElement>) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) {
        handleUpload(file);
      }
    },
    [setValue]
  );

  return (
    <section
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50"
      }`}
      aria-label="Markdown editor and preview"
    >
      {/* Markdown Input */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
        aria-label="Markdown input form"
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        <label htmlFor="markdown" className="font-semibold text-lg">
          Markdown Input
        </label>

        {/* CodeMirror */}
        <div
          className={`border rounded-lg ${
            dragOver ? "border-2 border-dashed border-blue-500" : ""
          }`}
        >
          <CodeMirror
            id="markdown"
            value={markdownText}
            height="400px"
            theme={darkMode ? oneDark : "light"}
            extensions={[markdown()]}
            onChange={(value) =>
              setValue("markdown", value, { shouldValidate: true })
            }
          />
        </div>

        {errors.markdown && (
          <p id="markdown-error" className="text-red-500 text-sm">
            {errors.markdown.message}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            aria-busy={loading ? "true" : "false"}
          >
            {loading ? "Saving..." : "Save"}
          </button>

          <button
            type="button"
            onClick={() => reset()}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            Reset
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Download
          </button>

          <label className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition cursor-pointer">
            Upload
            <input
              type="file"
              accept=".md"
              onChange={handleFileInput}
              className="hidden"
            />
          </label>

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {dragOver && (
          <p className="text-blue-500 text-sm mt-2">
            📂 Drop your `.md` file here to load it
          </p>
        )}
      </form>

      {/* Markdown Preview */}
      <section
        className={`border p-4 rounded-lg shadow-sm overflow-auto ${
          darkMode ? "bg-gray-800 text-white" : "bg-white"
        }`}
        aria-label="Markdown preview"
      >
        <h2 className="font-semibold mb-4 text-lg">📖 Preview</h2>
        <div className="prose prose-blue max-w-none dark:prose-invert">
          {loading ? (
            <p className="text-gray-500 italic">⏳ Rendering preview...</p>
          ) : markdownText ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {markdownText}
            </ReactMarkdown>
          ) : (
            <p className="text-gray-400 italic">Nothing to preview yet...</p>
          )}
        </div>
      </section>
    </section>
  );
}
