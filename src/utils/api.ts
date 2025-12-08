// src/utils/api.js
export async function saveMarkdown(content: string) {
    try {
      const res = await fetch("https://your-api.com/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      return await res.json(); // e.g., { id: "123" }
    } catch (error) {
      console.error("Error saving markdown:", error);
    }
  }
  
  export async function loadMarkdown(id: string) {
    try {
      const res = await fetch(`https://your-api.com/api/load/${id}`);
      const data = await res.json();
      return data.content;
    } catch (error) {
      console.error("Error loading markdown:", error);
    }
  }
