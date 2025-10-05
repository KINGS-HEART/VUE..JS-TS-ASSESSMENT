// src/components/ErrorBoundary.jsx
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen flex items-center justify-center flex-col">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Oops! Something went wrong.
          </h1>
          <p className="text-gray-600 mb-4">
            Please refresh the page or go back to the home page.
          </p>
          <a
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Go Home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}
