"use client";

import React from "react";
import Image from "next/image";

const CardLayoutSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-6">

        {/* 🔵 Large Card - Left Side */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl overflow-hidden">
            {/* Image */}
            <div className="relative h-[280px] bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="/111.jpg"
                alt="Birds flying over grass field"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                H.E Paul Kagame Yasuye ingabo ziri i Gako
              </h2>
              <p className="text-gray-600 mb-6">To provide internationally recognised professional training courses and educational programmes informed by applied research to equip military.</p>
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                SOMA BIRAMBUYE
              </button>
            </div>
          </div>
        </div>

        {/* 🟡 Small Cards - Right Side */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Reusable Small Card */}
          {[
            {
              img: "/222.jpg",
              title: "Commander-in-Chief of RDF convenes High Command Council at RMA – Gako",
              author: "President Kagame and Commander-in-Chief of the Rwanda Defence Force (RDF) chaired the Force's High Command Council",
            },
            {
              img: "/333.jpg",
              title: "Gako Military Academy Newest Building",
              author: "The training that was held at Rwanda Military Academy GAKO, focused on key areas including Counter-terrorism, VIP Protection, and anti-riots.",
            },
           
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                {/* Image */}
                <div className="w-full sm:w-[280px] h-[240px] bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={card.img}
                    alt={card.title}
                    className="object-cover w-full h-full"
                    width={280}
                    height={240}
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 text-justify">{card.author}</p>
                  <button className="text-xs bg-transparent border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200">
                    SOMA BIRAMBUYE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CardLayoutSection;
