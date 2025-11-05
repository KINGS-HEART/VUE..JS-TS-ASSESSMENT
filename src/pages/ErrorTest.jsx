// src/pages/ErrorTest.jsx
import React from "react";

export default function ErrorTest() {
  throw new Error("This is a test error!"); // Trigger ErrorBoundary
}
