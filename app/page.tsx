import Image from "next/image";
import Link from "next/link";
import ArticleGrid from './componets/ArticleGrid';
import SmallCardsSection from './componets/SmallCardsSection';
import WhatsAppFloatingButton from "./componets/WhatsAppFloatingButton";
import HeroSection from "./componets/HeroSection";
import VideoGrid from "./componets/VideoGrid";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/*=================================cards layout section=======================================================*/}
      <div className="max-w-7xl mx-auto p-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-6">
          
          {/* 🔵 Large Card - Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl overflow-hidden">
              {/* Image */}
              <div className="relative h-[280px] bg-gray-200 rounded-2xl overflow-hidden">
                <Image
                  src="/1.jpg"
                  alt="Birds flying over grass field"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  H.E Paul Kagame Yasuye ingabo ziri Igabiro
                </h2>
                <p className="text-gray-600 mb-6">
                  Perezida Paul Kagame akaba n’Umugaba w’Ikirenga w’Ingabo z’u Rwanda, yagejeje ijambo ku basirikare bagera ku bihumbi 6, i Gabiro.
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                  SOMA BIRAMBUYE
                </button>
              </div>
            </div>
          </div>

          {/* 🟡 Small Cards - Right Side */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* First Small Card */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                
                {/* Image */}
                <div className="w-full sm:w-[280px] h-[240px] bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/3.jpg"
                    alt="Birds flying over grass field"
                    className="object-cover w-full h-full"
                    width={280}
                    height={240}
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                    Igisirikare cya Navy seal ziri muri Ukraine
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 text-justify">
                    Igitero cy'ubwihanduzacumu cya Ukraine cyatanze ubutumwa bukomeye ku Burusiya no ku burengerazuba
                  </p>
                  <button className="text-xs bg-transparent border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200">
                    SOMA BIRAMBUYE
                  </button>
                </div>
              </div>
            </div>

            {/* Second Small Card */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                
                {/* Image */}
                <div className="w-full sm:w-[280px] h-[240px] bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/4.jpg"
                    alt="Birds flying over grass field"
                    className="object-cover w-full h-full"
                    width={280}
                    height={240}
                  />
                </div>
                
                {/* Content */}
                <div className="p-4 flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                    Amapeti yatanzwe ku ngabo zarwanye muri Pakstan
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 text-justify">
                   Abatalibani babujije ikoreshwa muri kaminuza ry'ibitabo byanditswe n'abagore
                  </p>
                  <button className="text-xs bg-transparent border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200">
                    SOMA BIRAMBUYE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* short links section */}
      <div className="bg-gray-100 py-10">
        <div className="flex flex-col items-center gap-4">
          
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/Ikoranabuhanga" className="border border-blue-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-100 transition">
              Ikoranabuhanga
            </Link>
            <Link href="/amateka" className="border border-blue-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-100 transition">
              Amateka
            </Link>
            <Link href="/siyanse" className="border border-blue-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-100 transition">
              Siyanse
            </Link>
            <Link href="/ibitabo" className="border border-blue-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-100 transition">
              Ibitabo
            </Link>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/ubuzima" className="border border-blue-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-100 transition">
              Ubuzima
            </Link>
            <Link href="/politike" className="border border-blue-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-100 transition">
              Politike
            </Link>
            <Link href="/ubumenya-muntu" className="border border-blue-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-100 transition">
              Ubumenya-muntu
            </Link>
          </div>
        </div>
      </div>
      
      {/*=================================titles Section=======================================================*/}
      <ArticleGrid />
      <SmallCardsSection/>
      <WhatsAppFloatingButton/>
    </>
  );
}