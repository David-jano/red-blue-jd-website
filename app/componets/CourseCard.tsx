import Image from "next/image";

export default function CoursesGrid() {
  return (
    <div className="w-full py-6 px-3 md:py-8 md:px-6 lg:py-10 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Card 1 - LARGE CARD (spans 2 columns on large screens) */}
        <div className="lg:col-span-2 bg-white text-gray-900 rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-60 md:h-80 w-full">
            <Image
              src="/editing.jpg"
              alt="Adobe Premiere Pro Essentials"
              fill
              className="object-cover"
            />
            <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs md:text-sm font-semibold px-2 py-1 rounded-sm">
              33% OFF
            </div>
          </div>
          <div className="p-5 md:p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                Filmmaking
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                Beginner
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Adobe Premiere Pro</h3>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span className="flex items-center mr-4">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm3 1.75v5.5a.25.25 0 00.395.206l4.5-2.75a.25.25 0 000-.412l-4.5-2.75A.25.25 0 005 7.75z" />
                </svg>
                21 Lessons
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.5 8a.5.5 0 01.5-.5h2.5a.5.5 0 01.5.5v2.5a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V8zm8.5 0a.5.5 0 01.5-.5h2.5a.5.5 0 01.5.5v2.5a.5.5 0 01-.5.5h-2.5a.5.5 0 01-.5-.5V8z" />
                </svg>
                Ikinyarwanda , English
              </span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-2xl font-bold text-amber-600">100,000 RWF</span>
              <span className="text-sm text-gray-400 line-through">150,000 RWF</span>
            </div>
            <a
              href="#"
              className="flex items-center justify-end text-amber-600 hover:text-amber-700 transition duration-200 text-sm md:text-base"
            >
              View Course
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column Cards (Card 2 and Card 3 stacked vertically) */}
        <div className="flex flex-col gap-6">
          {/* Card 2 */}
          <div className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-40 w-full">
              <Image
                src="/recording.jpg"
                alt="Sound Recording"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-semibold px-2 py-1 rounded-sm">
                20% OFF
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-1">Sound Recording</h3>
              <p className="text-sm text-gray-500 mb-2">15 Lessons · English</p>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold text-amber-600">80,000 RWF</span>
                <span className="text-sm text-gray-400 line-through">100,000 RWF</span>
              </div>
              <a
                href="#"
                className="text-amber-600 hover:text-amber-700 text-sm flex items-center justify-end"
              >
                View Course
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-40 w-full">
              <Image
                src="/script.jpg"
                alt="Script Writing"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-1">Script Writing</h3>
              <p className="text-sm text-gray-500 mb-2">10 Lessons · English</p>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold text-amber-600">120,000 RWF</span>
              </div>
              <a
                href="#"
                className="text-amber-600 hover:text-amber-700 text-sm flex items-center justify-end"
              >
                View Course
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
