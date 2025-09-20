import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: "Ikibazo cy'ingaragu ziri gutinya Gukora Ubukwe",
    author: "Rimwe na rimwe, abakobwa batari bakira ko babyaye birabagora kwiyoberanya igihe bakiri mu muryango ubazi.",
    image: "/videos/crying.mp4"
  },
  {
    id: 2,
    title: "Aba ministri bagize Senate Nshya barahiye",
    author: "Guverinoma yatangiye manda ya kane ya Perezida Paul Kagame, yari igizwe n’abaminisitiri 21.",
    image: "/videos/kurahira.mp4"
  },
  {
    id: 3,
    title: "H.E Paul Kagame yimitse Senate Nshya",
    author: "Muri abo bashyizweho icyo gihe, icyenda muri bo, ntabwo bakiri mu nshingano, abo barangajwe imbere n’uwari Minisitiri w’Intebe.",
    image: "/videos/senate.mp4"
  },
  {
    id: 4,
    title: "Menya abazige department ya Head Officers",
    author: "Mu bandi bavuye muri iyi Guverinoma harimo Dr. Uwamariya Valentine wari Minisitiri w’Ibidukikije.",
    image: "/44.jpg"
  },
  {
    id: 5,
    title: "Umunyeshuri wo muri Saint Andrew yakoze i Robot",
    author: "Ni Robot yanditse amateka yitabira inama nyinshi z'ikoranabuhanga ndetse ibasha no kuvugira ahirengeye nko mu Nama y'Umuryango w'Abibumbye.",
    image: "/55.jpg"
  },
  {
    id: 6,
    title: "Ruhango Saint Trinite Basuwe Minister Dr.Ngirente",
    author: "Dr Ngirente Edouard yanyuzwe n'imyaka 8 yabaye Minisitiri w'Intebe | Umukoro yatanze ku Banyarwanda.",
    image: "/66.jpg"
  }
];

const NewVideoGrid = () => {
  const largeCard = articles[0]; // Large card
  const smallCards = articles.slice(1, 3); // Two small cards
  const remainingCards = articles.slice(3); // Remaining articles

  return (
    <div className="container mx-auto p-6 md:px-20 py-8">
      {/* Main Grid with a Large card and two small cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 max-w-6xl mx-auto">
        
        {/* Large Card (Left Column) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl overflow-hidden  hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-[280px] bg-gray-200 rounded-tl-lg overflow-hidden">
            <video
            src="/videos/crying.mp4"
            className="object-cover"
            controls
            loop
            muted
            >
            Your browser does not support the video tag.
            </video>

            </div>
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {largeCard.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {largeCard.author}
              </p>
            <Link href="https://youtu.be/02TNxy4a2sE?si=ZEMaIbYz4VOANHOi" target="_blank" >
            <button className="cursor-pointer text-xs bg-black border text-white px-4 py-2 rounded-full transition-colors duration-200">
                REBA VIDEO
            </button>
            </Link>
            </div>
          </div>
        </div>

        {/* Two Small Cards (Right Column) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {smallCards.map((article) => (
            <div key={article.id} className="bg-white rounded-2xl overflow-hidden  hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
               <div className="w-full sm:w-[280px] h-[240px] bg-gray-200 rounded-l overflow-hidden flex-shrink-0">
                <video
                    src={article.image}
                    className="w-full h-full object-cover"
                    controls
                    muted
                >
                    Your browser does not support the video tag.
                </video>
                </div>

                <div className="p-4 flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {article.author}
                  </p>
                  <Link href="https://youtu.be/ezSO-OFDRzE?si=UBX54X2V6zwRgbQd" target="_blank" >
            <button className="cursor-pointer text-xs bg-black border text-white px-4 py-2 rounded-full transition-colors duration-200">
                REBA VIDEO
            </button>
            </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br/>
      
      {/* Remaining Cards Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Andi Makuru</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 max-w-6xl mx-auto">
          {remainingCards.map((article) => (
            <div key={article.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-[200px] bg-gray-200 rounded-t-2xl overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-justify">
                  {article.author}
                </p>
                <Link href="https://youtu.be/TA0Blpr4xVE?si=Gmerepl7KM9mMKun" target="_blank" >
            <button className="cursor-pointer text-xs bg-black border text-white px-4 py-2 rounded-full transition-colors duration-200">
                REBA VIDEO
            </button>
            </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewVideoGrid;
