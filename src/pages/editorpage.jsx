// src/pages/EditorPage.jsx
import React, { useState } from "react";
import { useMarkdown } from "../context/MarkdownContext";
import { saveToApi, loadFromApi } from "../API/markdownApi"; // ✅ API integration

export default function EditorPage() {
  const { markdown, setMarkdown } = useMarkdown();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Save markdown to API
  const handleSave = async () => {
    try {
      setLoading(true);
      setMessage("");
      const res = await saveToApi({ title: "Markdown Draft", body: markdown });
      setMessage(`✅ Saved successfully! (Post ID: ${res.id})`);
    } catch (err) {
      console.error(err);
      setMessage("❌ Error saving markdown. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Load markdown from API
  const handleLoad = async () => {
    try {
      setLoading(true);
      setMessage("");
      const res = await loadFromApi(1);
      setMarkdown(res.body || res.title || "No content found.");
      setMessage("✅ Loaded markdown from API!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Error loading markdown. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Clear the editor
  const handleClear = () => {
    setMarkdown("");
    setMessage("🧹 Editor cleared!");
  };

  // ✅ Copy markdown to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setMessage("📋 Markdown copied to clipboard!");
    } catch (err) {
      setMessage("⚠️ Failed to copy to clipboard.");
    }
  };

  return (
    <main
      className="p-6 max-w-5xl mx-auto min-h-screen bg-gray-50"
      aria-labelledby="editor-heading"
    >
      {/* ✅ Semantic Section */}
      <section
        aria-label="Markdown editor section"
        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col"
      >
        <h2
          id="editor-heading"
          className="text-2xl font-bold mb-4 text-gray-900 text-center"
        >
          Markdown Editor
        </h2>

        <textarea
          aria-label="Markdown input area"
          aria-describedby="editor-help"
          className="flex-1 border border-gray-300 rounded-lg p-3 
                     focus:ring-2 focus:ring-blue-500 outline-none resize-none 
                     min-h-[300px] sm:min-h-[400px]"
          placeholder="Start typing your markdown here..."
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />

        <p id="editor-help" className="text-sm text-gray-500 mt-2">
          Tip: Use markdown syntax like <code>**bold**</code>, <code># Heading</code>, or
          <code> - list</code>.
        </p>

        {/* ✅ Editor Controls */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <button
            aria-label="Save markdown to API"
            className="px-5 py-2 rounded-md bg-blue-600 text-white 
                       hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save to API"}
          </button>

          <button
            aria-label="Load markdown from API"
            className="px-5 py-2 rounded-md bg-purple-600 text-white 
                       hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 disabled:opacity-50"
            onClick={handleLoad}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load from API"}
          </button>

          <button
            aria-label="Clear editor"
            className="px-5 py-2 rounded-md bg-red-500 text-white 
                       hover:bg-red-600 focus:ring-2 focus:ring-red-400"
            onClick={handleClear}
            disabled={loading}
          >
            Clear
          </button>

          <button
            aria-label="Copy markdown text"
            className="px-5 py-2 rounded-md bg-green-500 text-white 
                       hover:bg-green-600 focus:ring-2 focus:ring-green-400"
            onClick={handleCopy}
            disabled={loading}
          >
            Copy
          </button>
        </div>

        {/* ✅ Feedback message */}
        {message && (
          <p
            role="status"
            className={`mt-5 text-center font-medium ${
              message.startsWith("❌") || message.startsWith("⚠️")
                ? "text-red-600"
                : "text-green-700"
            }`}
          >
            {message}
          </p>
        )}
      </section>
    </main>
  );
}
