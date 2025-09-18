import Image from "next/image";

export default function CourseCard() {
  return (
    <div className="w-full py-6 px-3 md:py-8 md:px-6 lg:py-10 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-40 md:h-44 lg:h-48 w-full">
            <Image
              src="/recording.jpg"
              alt="Sound Recording"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3 md:p-4 lg:p-5">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">
              Sound Recording
            </h3>
            <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-4">
              by <span className="font-medium">David Jano</span>
            </p>
            <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
              Learn the art of capturing high-quality audio in studio and field settings.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-base md:text-lg font-semibold text-amber-600">$49.99</span>
              <button className="bg-amber-600 text-white text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-amber-700 transition duration-200">
                Iyandikishe
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-40 md:h-44 lg:h-48 w-full">
            <Image
              src="/editing.jpg"
              alt="Video Editing"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3 md:p-4 lg:p-5">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">
              Video Editing
            </h3>
            <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-4">
              by <span className="font-medium">David Jano</span>
            </p>
            <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
              Master tools like Adobe Premiere and Final Cut to create stunning videos.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-base md:text-lg font-semibold text-amber-600">$59.99</span>
              <button className="bg-amber-600 text-white text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-amber-700 transition duration-200">
                Iyandikishe
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="relative h-40 md:h-44 lg:h-48 w-full">
            <Image
              src="/script.jpg"
              alt="Script Writing"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3 md:p-4 lg:p-5">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">
              Script Writing
            </h3>
            <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-4">
              by <span className="font-medium">David Jano</span>
            </p>
            <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
              Learn to write compelling stories for film, TV, and digital media.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-base md:text-lg font-semibold text-amber-600">$44.99</span>
              <button className="bg-amber-600 text-white text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-amber-700 transition duration-200">
                Iyandikishe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}