"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Your content is very special. The thing I liked the most is that the videos are so long...",
      name: "Alliane Mutesi",
      role: "Web Developer | Rwanda",
      rating: 5,
      avatar: "/recording.jpg"
    },
    {
      id: 2,
      text: "I had the pleasure of exploring Red Blue Jd, a website that provides an extensive range of courses...",
      name: "Dieudonnie Igiraneza",
      role: "Videographer | Rwanda",
      rating: 5,
      avatar: "/recording.jpg"
    },
    {
      id: 3,
      text: "I was thoroughly impressed with my experience. The platform is clean and well-organized.",
      name: "Ruth Niyonkuru",
      role: "Photographer | Rwanda",
      rating: 5,
      avatar: "/recording.jpg"
    },
    {
      id: 4,
      text: "The hands-on approach at Red Blue Jd has equipped me with practical skills I use every day.",
      name: "Jean Baptiste",
      role: "Sound Engineer | Rwanda",
      rating: 5,
      avatar: "/recording.jpg"
    },
    {
      id: 5,
      text: "The instructors are knowledgeable and the classes are really interactive.",
      name: "Marie Claire",
      role: "Digital Marketer | Rwanda",
      rating: 5,
      avatar: "/recording.jpg"
    },
    {
      id: 6,
      text: "I gained real-world experience that helped me land my dream job. Thanks Red Blue Jd!",
      name: "Patrick Uwimana",
      role: "Film Editor | Rwanda",
      rating: 5,
      avatar: "/recording.jpg"
    }
  ];

  const itemsPerPage = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  //Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * itemsPerPage;
    return testimonials.slice(startIndex, startIndex + itemsPerPage);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-2xl lg:text-5xl font-bold text-gray-800 mb-4">
            Icyo abatuzi batuvugaho
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover how Red Blue JD Film School has transformed careers and opened new opportunities for our students.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {getCurrentTestimonials().map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <p className="text-gray-700 text-sm mb-6">"{testimonial.text}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-gray-800 font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  <div className="flex space-x-1 mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4">
          {/* Prev */}
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
            }
            className="w-10 h-10 rounded-full bg-gray-300 text-gray-800 hover:bg-gray-400 flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-orange-500' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % totalSlides)
            }
            className="w-10 h-10 rounded-full bg-gray-300 text-gray-800 hover:bg-gray-400 flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
