// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MarkdownPreview from "./MarkdownPreview";
import EditorPage from "./pages/EditorPage"; 
import PreviewPage from "./pages/PreviewPage";
import SettingsPage from "./pages/SettingsPage";
import ErrorTest from "./pages/ErrorTest";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

import { MarkdownProvider } from "./context/MarkdownContext"; 
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card"; // changed from @/
import { Button } from "./components/ui/button"; // changed from @/

export default function App() {
  return (
    <Router>
      <MarkdownProvider>
        <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
          {/* Header */}
          <header className="p-4 bg-blue-600 text-white shadow-md">
            <h1 className="text-3xl font-bold text-center">
              📝 Markdown Previewer
            </h1>
          </header>

          {/* Main App Container */}
          <div className="max-w-5xl mx-auto p-6">
            <ErrorBoundary>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Card className="shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold">
                          Write and Preview Markdown
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <MarkdownPreview />
                      </CardContent>
                    </Card>
                  }
                />
                <Route path="/editor" element={<EditorPage />} />
                <Route path="/preview" element={<PreviewPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/error-test" element={<ErrorTest />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ErrorBoundary>

            {/* Navigation */}
            <nav
              aria-label="Main navigation"
              className="flex justify-center gap-4 mt-8"
            >
              <Link to="/" aria-label="Go to Home page">
                <Button variant="default">Home</Button>
              </Link>
              <Link to="/editor" aria-label="Go to Editor page">
                <Button variant="secondary">Editor</Button>
              </Link>
              <Link to="/preview" aria-label="Go to Preview page">
                <Button variant="secondary">Preview</Button>
              </Link>
              <Link to="/settings" aria-label="Go to Settings page">
                <Button variant="secondary">Settings</Button>
              </Link>
              <Link to="/error-test" aria-label="Go to Error Test page">
                <Button variant="secondary">Error Test</Button>
              </Link>
            </nav>
          </div>
        </main>
      </MarkdownProvider>
    </Router>
  );
}
