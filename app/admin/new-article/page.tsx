"use client";
import { useState } from "react";

export default function NewArticleForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    label: "",
    imageUrl: "",
    content: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("/api/articles", {
        method: "POST",
        body: JSON.stringify(formData), // We do NOT include created_at here
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("❌ Supabase Error:", result.error || result);
        alert("❌ Inkuru ntiyoherejwe: " + (result.error || "Unknown error"));
        return;
      }

      setSuccess(true);
      setFormData({
        title: "",
        description: "",
        author: "",
        label: "",
        imageUrl: "",
        content: "",
      });
    } catch (error: any) {
      console.error("❌ Network or unexpected error:", error);
      alert("❌ Network error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-xl font-bold mb-6">📝 Ohereza Inkuru Nshya</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title (Umutwe w'inkuru)"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="description"
          placeholder="Description y'inkuru"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="author"
          placeholder="Umwanditsi"
          value={formData.author}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="label"
          placeholder="Icyiciro (Politiki, Uburezi...)"
          value={formData.label}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="imageUrl"
          placeholder="Image URL (Ishusho)"
          value={formData.imageUrl}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="content"
          placeholder="Inkuru yuzuye"
          value={formData.content}
          onChange={handleChange}
          required
          rows={6}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Kohereza..." : "Ohereza Inkuru"}
        </button>

        {success && (
          <p className="text-green-600 text-sm">✔️ Inkuru yashyizweho neza!</p>
        )}
      </form>
    </div>
  );
}
