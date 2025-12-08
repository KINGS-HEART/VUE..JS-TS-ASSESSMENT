// src/pages/ErrorTest.jsx
import React from "react";
export default function ErrorTest() {
  const [throwError, setThrowError] = React.useState(false);

  if (throwError) {
    throw new Error("This is a test error!"); // Trigger ErrorBoundary
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Error Test Page</h1>
      <p>Click the button to throw an error and test the ErrorBoundary.</p>
      <button
        onClick={() => setThrowError(true)}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition mt-4"
      >
        Throw Error
      </button>
    </div>
  );
}
