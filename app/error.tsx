"use client";
import React from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button
        onClick={reset}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Try again
      </button>
    </div>
  );
}
