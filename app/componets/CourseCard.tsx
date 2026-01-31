import Image from "next/image";
import React from "react";

export default function CoursesGrid() {
  const courses = [
    {
      id: 1,
      title: "Script Writing",
      category: ["Story Crafting", "Beginner", "Amateur", "Advanced"],
      lessons: 21,
      languages: "Ikinyarwanda, English",
      price: 100000,
      oldPrice: 150000,
      discount: "33% OFF",
      image: "/craft.png",
      description:
        "Building strong scripts begins with understanding purpose and audience since a tutorial for beginners will look very different from a dramatic short film. Once you know your goal, brainstorm ideas freely and condense them into a logline and a simple outline that captures the beginning, middle, and end. From there, develop your characters by giving them clear goals, personalities, and conflicts, while also setting the scene with time, place, and mood.",
      size: "large",
    },
    {
      id: 2,
      title: "Sound Recording",
      category: ["Audio", "Beginner"],
      lessons: 15,
      languages: "English",
      price: 80000,
      oldPrice: 100000,
      discount: "20% OFF",
      image: "/recording.jpg",
      description: "Learn how to record professional-quality sound.",
      size: "normal",
    },
    {
      id: 3,
      title: "Documentary Video Editing",
      category: ["Video Editing", "Intermediate"],
      lessons: 10,
      languages: "English & Kinyarwanda",
      price: 120000,
      image: "/edit.webp",
      description: "Edit documentaries with professional techniques.",
      size: "normal",
    },
    {
      id: 4,
      title: "Advanced Storytelling",
      category: ["Story Crafting", "Advanced"],
      lessons: 18,
      languages: "English",
      price: 130000,
      oldPrice: 170000,
      discount: "25% OFF",
      image: "/story.webp",
      description: "Mastering the art of storytelling for films and books means learning how to weave ideas into narratives that captivate audiences across two very different mediums. At its core, storytelling is about creating emotional resonance, but the techniques vary depending on whether you’re writing for the page or the screen.For books, the writer has the freedom to explore inner thoughts, detailed descriptions, and expansive worlds.",
      size: "large",
    },
    {
      id: 5,
      title: "Podcast Production",
      category: ["Audio", "Intermediate"],
      lessons: 12,
      languages: "English",
      price: 90000,
      image: "/pod.webp",
      size: "normal",
    },
    {
      id: 6,
      title: "Social Media Management",
      category: ["Audio", "Intermediate"],
      lessons: 7,
      languages: "English",
      price: 215000,
      image: "/social.jpg",
      size: "normal",
    },
  ];

  // Group courses by rows: each row = 1 large + 2 small (or remaining)
  const rows: { large: any; small: any[] }[] = [];
  let tempSmall: any[] = [];
  courses.forEach((course) => {
    if (course.size === "large") {
      // Start new row for large card
      rows.push({ large: course, small: [] });
      tempSmall = [];
    } else {
      if (rows.length === 0) {
        // If no large yet, push small to first row
        rows.push({ large: null, small: [course] });
      } else {
        // Add small course to last row
        rows[rows.length - 1].small.push(course);
      }
    }
  });

  return (
    <div className="w-full py-6 px-3 md:py-8 md:px-6 lg:py-10 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
          >
            {/* Large Card */}
            {row.large && (
              <div className="lg:col-span-2 bg-white text-gray-900 rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-60 md:h-80 w-full">
                  <Image
                    src={row.large.image}
                    alt={row.large.title}
                    fill
                    className="object-cover"
                  />
                  {row.large.discount && (
                    <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs md:text-sm font-semibold px-2 py-1 rounded-sm">
                      {row.large.discount}
                    </div>
                  )}
                </div>
                <div className="p-5 md:p-6">
                  {row.large.category?.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded ${
                        i === 0
                          ? "bg-amber-100 text-amber-800" // first tag highlighted
                          : "bg-gray-100 text-gray-800" // other tags neutral
                      }`}
                    >
                      {tag}
                    </span>
                  ))}

                  <h3 className="text-2xl font-bold mb-2">{row.large.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="flex items-center mr-4">
                      {row.large.lessons} Lessons
                    </span>
                    <span className="flex items-center">
                      {row.large.languages}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-2xl font-bold text-amber-600">
                      {row.large.price.toLocaleString()} RWF
                    </span>
                    {row.large.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {row.large.oldPrice.toLocaleString()} RWF
                      </span>
                    )}
                  </div>
                  {row.large.description && (
                    <p className="text-gray-600 text-sm mb-4">
                      {row.large.description}
                    </p>
                  )}
                  <a
                    href="#"
                    className="flex items-center justify-end text-amber-600 hover:text-amber-700 transition duration-200 text-sm md:text-base"
                  >
                    View Course →
                  </a>
                </div>
              </div>
            )}

            {/* Small Cards */}
            <div className="flex flex-col gap-6">
              {row.small.map((course) => (
                <div
                  key={course.id}
                  className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    {course.discount && (
                      <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs px-2 py-1 font-semibold rounded-sm">
                        {course.discount}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {course.lessons} Lessons · {course.languages}
                    </p>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-amber-600">
                        {course.price.toLocaleString()} RWF
                      </span>
                      {course.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {course.oldPrice.toLocaleString()} RWF
                        </span>
                      )}
                    </div>
                    <a
                      href="/enroll/"
                      className="text-amber-600 hover:text-amber-700 text-sm flex items-center justify-end"
                    >
                      View Course →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
