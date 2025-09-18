'use client';
import React from 'react';
import Image from 'next/image';

const ArticleGrid = () => {
  const articles = [
    {
      id: 1,
      title: "IBINTU 10 BIDADANZWE KURI Louise MUSHIKIWABO",
      author: "JACKSON DUSHIMIMANA",
      buttonText: "SOMA BIRAMBUYE",
      image: "/11.jpeg"
    },
    {
      id: 2,
      title: "Aba ministri bagize Senate Nshya barahiye",
      author: "JACKSON DUSHIMIMANA",
      buttonText: "SOMA BIRAMBUYE",
      image: "/22.jpg"
    },
    {
      id: 3,
      title: "H.E Paul Kagame yimitse Senate Nshya",
      author: "JACKSON DUSHIMIMANA",
      buttonText: "SOMA BIRAMBUYE",
      image: "/33.jpeg"
    },
    {
      id: 4,
      title: "Menya abazige department ya Head Officers",
      author: "JACKSON DUSHIMIMANA",
      buttonText: "SOMA BIRAMBUYE",
      image: "/44.jpg"
    },
    {
      id: 5,
      title: "Umunyeshuri wo muri Saint Andrew yakoze i Robot",
      author: "JACKSON DUSHIMIMANA",
      buttonText: "SOMA BIRAMBUYE",
      image: "/55.jpg"
    },
    {
      id: 6,
      title: "Ruhango Saint Trinite Basuwe Minister Dr.Ngirente",
      author: "JACKSON DUSHIMIMANA",
      buttonText: "SOMA BIRAMBUYE",
      image: "/66.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-6 md:px-20 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 max-w-6xl mx-auto">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg">
            <div className="flex flex-col md:flex-row gap-6 p-4">
              {/* Image */}
              <div className="w-full md:w-[280px] h-[200px] relative flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col mt-4 md:mt-0">
                <div>
                  <h3 className="font-bold text-gray-900 text-sm leading-tight mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">
                    BY <span className="underline">{article.author}</span>
                  </p>
                </div>

                <button className="self-start px-4 py-2 border border-gray-300 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-50 transition-colors duration-200">
                  {article.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
