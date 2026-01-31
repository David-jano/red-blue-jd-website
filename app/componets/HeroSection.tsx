// components/HeroSection.tsx
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="bg-[#e7f5e7] min-h-[500px] flex items-center justify-center p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text and Button */}
        <div className="text-center md:text-left md:w-1/2 p-4">
          <p className="text-black bg-amber-400 rounded-full font-semibold mb-2 px-4 w-fit mx-auto md:mx-0">
            RedBlue Jd Rwanda
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#333] leading-tight mb-4">
            Murakaza neza Mu isi<br className="hidden sm:inline" />  yo Gucukumbura
          </h1>
          <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
             Irembo ry'Afurika ku Mashusho y'Ubumenyi n'Ubushakashatsi!
          </p>
         <div className="flex justify-center w-full md:justify-start">
  <button className="group bg-black text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto">
    <span>Duhamagare</span>
    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
      →
    </span>
  </button>
</div>
        </div>

        {/* Right Side: Image and Floating Elements */}
        <div className="relative mt-8 md:mt-0 md:w-1/2 flex justify-center">
          {/* Main Image */}
          <Image
            src="/Book-3.png" // Replace with your image path
            alt="Woman with groceries"
            width={400}
            height={400}
            className="rounded-lg object-contain"
          />

          {/* Floating Elements (positioned absolutely) */}
          <div className="absolute top-4 sm:top-15 right-4 sm:right-15 bg-white rounded-lg p-2 shadow-lg flex items-center space-x-2">
            <span className="text-2xl">📖</span>
            <div>
              <p className="font-semibold text-sm sm:text-base">Ubushakashatsi</p>
              <div className="flex items-center text-yellow-500">
                <span className="text-sm">⭐️⭐️⭐️⭐️</span>
                <span className="text-xs text-gray-400 ml-1">(4.9)</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-29 bg-white rounded-lg p-2 shadow-lg flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-2">
                <span className="text-xl">✅</span>
                <p className="text-sm font-semibold text-green-600">
                Ubumenyi
                </p>
            </div>
            <div className="flex items-center text-sm">
                <span>⭐️⭐️⭐️⭐️</span>
                <span className="text-xs text-gray-400 ml-1">(4.9)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;