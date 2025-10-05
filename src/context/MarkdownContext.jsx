// src/context/MarkdownContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

const MarkdownContext = createContext();

export function MarkdownProvider({ children }) {
  const defaultText = `# Welcome ✨\n\nStart typing your markdown here...`;
  const [markdown, setMarkdown] = useState(defaultText);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("markdownContent");
    if (saved) {
      setMarkdown(saved);
    }
  }, []);

  // Save to local storage whenever markdown changes
  useEffect(() => {
    localStorage.setItem("markdownContent", markdown);
  }, [markdown]);

  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  );
}

// custom hook for easier use
export function useMarkdown() {
  return useContext(MarkdownContext);
}
