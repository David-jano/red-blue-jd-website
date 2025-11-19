"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

const ArticleGrid = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("❌ Failed to load articles:", error.message);
      } else {
        setArticles(data);
      }

      setLoading(false);
    };

    fetchArticles();
  }, []);

  if (loading) return <p className="text-center py-10">Loading articles...</p>;

  return (
    <div className="container mx-auto px-6 md:px-20 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 max-w-6xl mx-auto">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg">
            <div className="flex flex-col md:flex-row gap-6 p-4">
              {/* Image */}
              <div className="w-full md:w-[280px] h-[200px] relative flex-shrink-0 rounded-lg overflow-hidden bg-gray-200 hover:opacity-80">
                <Image
                  src={article.image_url}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col mt-4 md:mt-0">
                <div>
                  <h3 className="font-bold text-gray-900 text-sm leading-tight mb-2 flex justify-between items-center">
                    <span>{article.title}</span>
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    <span className="block text-justify mb-3">
                      {article.description}
                    </span>
                    <span className="rounded-full bg-gray-200  text-black px-1.5 py-0.5 text-[0.65rem] font-semibold">
                      {article.label}
                    </span>
                  </p>
                </div>

                <Link href={`/articles/${article.id}`}>
                  <button className="self-start px-4 py-2 border border-gray-300 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-50 transition-colors duration-200">
                    {article.button_text || "SOMA IGITABO"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
