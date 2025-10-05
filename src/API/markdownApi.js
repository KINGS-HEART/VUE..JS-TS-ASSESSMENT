// src/api/markdownApi.js

// ✅ Save markdown data (POST request)
export async function saveToApi(payload) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  
    if (!res.ok) throw new Error("Failed to save");
    return res.json();
  }
  
  // ✅ Load markdown data by ID (GET request)
  export async function loadFromApi(id = 1) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  }
  