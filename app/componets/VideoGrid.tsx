import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: "Perezida Uri Guhigwa Bukware na AMERIKA - Trump Ari Guhiga Perezida MADURO Wa Venezuela",
    author: "N’iki kiri gutuma Amerika ihiga bukware Perezida Maduro wa Venezuela, kikanerekana uko Donald Trump akomeje gushyushya ibikubiye muri uru rugamba rwa politiki.",
    image: "/videos/doc1.webm",
    link: "https://youtu.be/ypDl60S4t9U?si=-yGjix9CN0VxqKrv"
  },
  {
    id: 2,
    title: "Umuhanga Wa Mbere Mu Isi - Yarushaga Ubwenge EINSTEIN na TESLA: Menya WILLIAM JAMES SIDIS",
    author: "Uzwi nka James sidis wabaye umunyabwenge bwinshi wambere mu mateka y'isi ariko bukaba ntakintu nakimwe bwigeze bumumarira",
    image: "/videos/doc2.webm",
    link: "https://youtu.be/d8v4RHlkCEs?si=v-0MZ49brGc4LKTQ"
  },
  {
    id: 3,
    title: "MOSSAD - Intasi Zayo Zivuganye Umwanzi wa Israel Muri DUBAI Rwagati",
    author: "Ubutasi budasanzwe bw'umwijima bukora operations tutigeze tubwirwa mu mateka y'ikiremwamuntu ",
    image: "/videos/doc3.webm",
    link: "https://youtu.be/LdrwY9TLNsw?si=U0LM0uq9XbfhFHh6"
  },
  {
    id: 4,
    title: "Kubabarizwa Muri GEREZA Mbi Kurusha Izindi Uzira Ubusa",
    author: "Icyegeranyo kigaragaza uko Nelson Mandela yababariwe kandi agafungirwa ahantu habi cyane azira ibyaha byoroheje, kigaragaza akarengane, imibabaro yanyuzemo n’ukuntu byose byerekana ko ubutabera bwari bukwiye kunonosorwa.",
    image: "/videos/3.png",
    link: "https://youtu.be/5ZHW2sko1_s?si=Xwj9llTeRtuDAakc"
  },
  {
    id: 5,
    title: "KUVUGURUZANYA KWA BIBILIYA - Ngibi Ibimenyetso Byabyo",
    author: "Iki gitekerezo gisobanura uko abantu bavuga ko muri Bibiliya harimo amagambo asa n’ahabanya, kigaragaza ingero zivugwa kenshi n’uko abahanga bayasobanura mu buryo bwimbitse..",
    image: "/videos/2.png",
    link: "https://youtu.be/z7zXJW-spQY?si=SlAkrUkX9LHrxN3g"
  },
  {
    id: 6,
    title: "SAMIA ARABAMWAJE BOSE| Amagambo y'Ubwishongozi Mubyo Yavuze Kuba GEN-Z",
    author: "Samia yavuze amagambo akomeye yerekeye uko abayobozi babona urubyiruko rwa Gen-Z, asobanura imiterere yabo, imbaraga zabo n’uruhare rukomeye bakwiye kugira mu miyoborere y’igihugu.",
    image: "/videos/4.png",
    link: "https://youtu.be/AKBB7BHQcKg"
  }
];

const NewVideoGrid = () => {
  const largeCard = articles[0];
  const smallCards = articles.slice(1, 3);
  const remainingCards = articles.slice(3);

  return (
    <div className="container mx-auto p-6 md:px-20 py-8">

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 max-w-6xl mx-auto">

        {/* Large Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-[280px] bg-gray-200 overflow-hidden">
              <video
                src={largeCard.image}
                className="object-cover w-full h-full"
                controls
                loop
                muted
              />
            </div>

            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {largeCard.title}
              </h2>
              <p className="text-gray-600 mb-6 text-justify">
                {largeCard.author}
              </p>

              <Link href={largeCard.link} target="_blank">
                <button className="cursor-pointer text-xs bg-black border text-white px-4 py-2 rounded-full transition-colors duration-200">
                  REBA VIDEO YOSE
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Two Small Cards along with desc*/}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {smallCards.map((article) => (
            <div key={article.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row">
                
                <div className="w-full sm:w-[280px] h-[240px] bg-gray-200 overflow-hidden flex-shrink-0">
                  <video
                    src={article.image}
                    className="w-full h-full object-cover"
                    controls
                    muted
                  />
                </div>

                <div className="p-4 flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 text-justify">
                    {article.author}
                  </p>

                  <Link href={article.link} target="_blank">
                    <button className="cursor-pointer text-xs bg-black border text-white px-4 py-2 rounded-full transition-colors duration-200">
                      REBA VIDEO YOSE
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      <br/>

      {/* Remaining Cards */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Ibindi Byegeranyo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 max-w-6xl mx-auto">
          {remainingCards.map((article) => (
            <div key={article.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              <div className="relative w-full h-[200px] bg-gray-200 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-justify">
                  {article.author}
                </p>

                <Link href={article.link} target="_blank">
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
