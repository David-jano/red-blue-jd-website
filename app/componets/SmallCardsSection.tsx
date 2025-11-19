"use client";

import React from "react";
import Image from "next/image";

const largeCard = {
  img: "/zar.jpg",
  title: "Zelensky ntashobora guhunga: Imbere muri ruswa ya Ukraine",
  description:
    "Inzabya zo mu musarani. Ibice byamadorari mashya muri Banki nkuru yigihugu ya Amerika. Ushinzwe ubutumwa yidoga avuga ko gutwara miliyoni 1.6 z'amadolari y'amanyamerika “atari akazi koroshye.” .",
    label:"Scandal",
  buttonText: "SOMA ICYEGERANYO",
};

const smallCards = [
  {
    img: "/pako.jpg",
    title: "Intambara isi ireba, ariko bake ni bo bumva: ibibera i Pokrovsk?",
    author:
      "Umujyi wa Donbass wa Pokrovsk (uzwi mu Burusiya nka Krasnoarmeysk) wasanze abantu bashimishijwe mu minsi yashize. Mu buryo bwinshi.",
      label:"Novel",
  },
  {
    img: "/vice.jpg",
    title: "Ibiganiro bitaziguye na Putin biri mu bigize Inyigisho za Trump",
    author:
      "Jim Hawkins sets sail with a treasure map in hand, but he eventually discovers that his crewmates are pirates-in-hiding, hungry for gold. Will Jim be able to safely find the treasure, or will the infamous Long John Silver beat him to it.",
      label:"History",
  },
];

const CardLayoutSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-6">

        {/* Large Card */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="relative h-[280px] bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src={largeCard.img}
                alt={largeCard.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {largeCard.title}
                <span className="rounded-full bg-gray-200 ml-4 text-black px-1.5 py-0.5 text-[0.65rem] font-semibold">
                      {largeCard.label}
                    </span>
              </h2>
                
              <p className="text-gray-600 mb-6">{largeCard.description}</p>
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                {largeCard.buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* Small Cards */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {smallCards.map(({ img, title, author }, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <div className="w-full sm:w-[280px] h-[240px] bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={img}
                    alt={title}
                    className="object-cover w-full h-full"
                    width={280}
                    height={240}
                  />
                </div>

                <div className="p-4 flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                    {title}
                  </h3>
                  
                  <p className="text-sm text-gray-600  text-justify">{author}</p>
                    <span className="rounded-full bg-gray-200 text-black px-1.5 py-0.5 text-[0.65rem] font-semibold">
                      {largeCard.label}
                    </span><br/>
                  <button className="text-xs mt-3 bg-transparent border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200">
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
