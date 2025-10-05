# 📝 Markdown Previewer  

# 📝 Markdown Preview App

A simple and interactive React application that allows users to write and preview Markdown in real time.  
Built with **React**, **Tailwind CSS**, and a custom **MarkdownContext** for global state management.

---

## 🚀 Features

- 🖋️ Real-time Markdown editing and preview  
- 💾 Save and load Markdown data via API  
- 🧹 Clear and copy functionality for easy editing  
- 🎨 Clean, responsive UI powered by Tailwind CSS  
- ⚡ Context-based state management for better scalability  

---

## 🌐 API Integration

This app integrates with the free [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to simulate saving and loading Markdown content.

### **API File (api.js)**
```js
// src/api/api.js
export async function saveToApi(payload) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to save");
  return res.json();
}

export async function loadFromApi(id = 1) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
