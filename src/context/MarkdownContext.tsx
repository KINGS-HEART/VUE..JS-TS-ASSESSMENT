import { createContext, useState, useEffect, useContext, ReactNode } from "react";

interface MarkdownContextType {
    markdown: string;
    setMarkdown: (markdown: string) => void;
}

const MarkdownContext = createContext<MarkdownContextType | undefined>(undefined);

export function MarkdownProvider({ children }: { children: ReactNode }) {
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
  const context = useContext(MarkdownContext);
  if (!context) {
    throw new Error("useMarkdown must be used within a MarkdownProvider");
  }
  return context;
}
