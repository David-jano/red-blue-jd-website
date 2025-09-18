import Image from "next/image";
import TestimonialsSection from "../componets/TestimonialsSection";

export default function Aboturibo() {
  return (
    <>
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side - Circular Images */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">

              {/* Main large circle - center */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/editing.jpg"
                    alt="Student with headphones"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Top right small circle */}
              <div className="absolute -top-8 right-8 w-24 h-24 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/recording.jpg"
                  alt="Student learning"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Middle left circle */}
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/script.jpg"
                  alt="Student with equipment"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Bottom left circle */}
              <div className="absolute bottom-8 -left-8 w-32 h-32 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/recording.jpg"
                  alt="Students collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <h4 className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4">
                ABO TURIBO
              </h4>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We are Innovative Business Technology College
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Established in 2012, we are proud to be the first and only film, design 
              school in The Great Lakes offering short courses in full practical 
              package which equips students with global digital skills on the 
              market. Established in 2012, we are proud to be the first and only film, 
              design school in The Great Lakes.
            </p>

            {/* Video Button */}
            <div className="flex items-center space-x-4 pt-4">
              <button className="flex items-center space-x-3 group">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:bg-orange-600 transition-colors duration-200">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500 mb-1">Click to play</p>
                  <p className="text-lg font-semibold text-gray-900">PROMO VIDEO</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TestimonialsSection/>
    </>

  );
}