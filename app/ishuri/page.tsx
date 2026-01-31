import CourseCard from "../componets/CourseCard";

export default function IshuriPage() {
  return (
     <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Explore Our Top Courses
      </h2>

      {/* Always show 3 columns */}
      <div>
        <CourseCard />
          
      </div>
    </div>
  );
}
