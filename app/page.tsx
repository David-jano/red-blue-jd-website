import Image from "next/image";
import Navbar from './componets/Navbar';
import Link from "next/link";
import ArticleGrid from './componets/ArticleGrid';
import SmallCardsSection from './componets/SmallCardsSection';
import Footer from "./componets/Footer";
import WhatsAppFloatingButton from "./componets/WhatsAppFloatingButton";
export default function Home() {
  return (
    <>
     <Navbar />
    <div className="bg-sky-800 py-20 md:py-40 text-center text-white px-4 sm:px-8 md:px-20">
  <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-4">
    Murakaza neza <br /> Mu'Isi yo Gucukumbura
  </h1>
  <p className="text-lg sm:text-xl md:text-2xl font-light">
    Irembo ry’Afurika ku Mashusho y’Ubumenyi n’Ubushakashatsi!
  </p>
    </div>

{/*=================================cards layout section*=======================================================*/}

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
            H.E Paul Kagame Yasuye ingabo ziri i Gako
          </h2>
          <p className="text-gray-600 mb-6">Jackson SEMAHORO</p>
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
            <p className="text-sm text-gray-600 mb-3">Mia Robinson</p>
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
            <p className="text-sm text-gray-600 mb-3">Moses Ukwishaka</p>
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
      <a href="/ikoranabuhanga" className="border border-blue-800 rounded-full px-15 py-2 md:px-8 md:py-2 text-sm font-medium hover:bg-gray-100 transition">
        Ikoranabuhanga
      </a>
      <a href="/amateka" className="border border-blue-800 rounded-full px-15 py-2 md:px-8 md:py-2 text-sm font-medium hover:bg-gray-100 transition">
        Amateka
      </a>
      <a href="/siyanse" className="border border-blue-800 rounded-full px-8 py-2 text-sm font-medium hover:bg-gray-100 transition">
        Siyanse
      </a>
      <a href="/ibitabo" className="border border-blue-800 rounded-full px-8 py-2 text-sm font-medium hover:bg-gray-100 transition">
        Ibitabo
      </a>
    </div>

    {/* Row 2 */}
    <div className="flex flex-wrap justify-center gap-2">
      <a href="/ubuzima" className="border border-blue-800 rounded-full px-8 py-2 text-sm font-medium hover:bg-gray-100 transition">
        Ubuzima
      </a>
      <a href="/politike" className="border border-blue-800 rounded-full px-8 py-2 text-sm font-medium hover:bg-gray-100 transition">
        Politike
      </a>
      <a href="/ubumenyi-muntu" className="border border-blue-800 rounded-full px-8 py-2 text-sm font-medium hover:bg-gray-100 transition">
        Ubumenya-muntu
      </a>
    </div>

  </div>
</div>
{/*=================================titles Section*=======================================================*/}
 <ArticleGrid />
 <SmallCardsSection/>
<Footer/>
<WhatsAppFloatingButton/>
   </>
  );
}
