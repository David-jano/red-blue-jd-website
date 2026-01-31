'use client';

import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, BookOpen, CheckCircle, Star, Clock, Users, Check } from 'lucide-react';

export default function EnrollmentPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [microsoftLoading, setMicrosoftLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enrollment data:', formData);
    setCurrentStep(2);
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    setTimeout(() => {
      setGoogleLoading(false);
      setCurrentStep(2);
    }, 1500);
  };

  const handleMicrosoftSignIn = async () => {
    setMicrosoftLoading(true);
    setTimeout(() => {
      setMicrosoftLoading(false);
      setCurrentStep(2);
    }, 1500);
  };

  const toggleCourseSelection = (courseId: string) => {
    setSelectedCourses(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleEnroll = () => {
    console.log('Selected courses:', selectedCourses);
    setCurrentStep(3);
  };

  const steps = [
    { number: 1, title: 'Account Setup', active: currentStep === 1 },
    { number: 2, title: 'Course Selection', active: currentStep === 2 },
    { number: 3, title: 'Confirmation', active: currentStep === 3 }
  ];

  const courses = [
    {
      id: '1',
      title: 'Script Writting',
      description: 'Building strong scripts from scratch begins with understanding the purpose of your script and defining your audience',
      duration: '12 weeks',
      students: 203,
      rating: 4.8,
      price: 99.9,
      instructor: 'UWIMANA Angel',
      category: 'Narration'
    },
    {
      id: '2',
      title: 'Sound Recording',
      description: 'Learn sound recording techniques and mixing basics.',
      duration: '10 weeks',
      students: 79,
      rating: 4.7,
      price: 79.9,
      instructor: 'KAYIRE Bertrad',
      category: 'Sound Production'
    },
    {
      id: '3',
      title: 'Documentary Video Editing',
      description: 'Edit your documentaries with professional tips and tricks.',
      duration: '8 weeks',
      students: 52,
      rating: 4.9,
      price: 119.9,
      instructor: 'NAHIMANA Isaie',
      category: 'Video Production'
    }
  ];

  const features = [
    { icon: '🎯', title: 'Expert Instructors', desc: 'Learn from industry professionals' },
    { icon: '⚡', title: 'Flexible Learning', desc: 'Study at your own pace' },
    { icon: '🏆', title: 'Certification', desc: 'Earn recognized credentials' },
    { icon: '🤝', title: 'Community Support', desc: 'Join thousands of students' }
  ];

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Student Enrollment Portal
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Begin your learning journey with our comprehensive courses and expert instructors
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className={`flex flex-col items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-semibold transition-all duration-300 ${
                    step.active 
                      ? 'bg-blue-600 border-blue-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-500'
                  }`}>
                    {step.active ? <CheckCircle className="w-6 h-6" /> : step.number}
                  </div>
                  <span className={`mt-2 text-sm font-medium ${
                    step.active ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 ${
                    step.active ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Enrollment Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {currentStep === 1 && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Create Your Student Account
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Username Field */}
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                      Username
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        value={formData.username}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        placeholder="Enter your username"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="rememberMe"
                        name="rememberMe"
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <a
                      href="/forgot-password"
                      className="text-sm text-blue-600 hover:text-blue-500 font-medium transition-colors duration-200"
                    >
                      Forgot password?
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Continue to Course Selection
                  </button>
                </form>

                {/* Divider */}
                <div className="mt-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  {/* Social Sign-in Buttons */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <button
                      onClick={handleGoogleSignIn}
                      disabled={googleLoading}
                      className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
                    >
                      {googleLoading ? (
                        <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                      ) : (
                        <>
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Google
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleMicrosoftSignIn}
                      disabled={microsoftLoading}
                      className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
                    >
                      {microsoftLoading ? (
                        <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                      ) : (
                        <>
                          <svg className="w-5 h-5 mr-2" viewBox="0 0 23 23">
                            <path fill="#f35325" d="M1 1h10v10H1z"/>
                            <path fill="#81bc06" d="M12 1h10v10H12z"/>
                            <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                            <path fill="#ffba08" d="M12 12h10v10H12z"/>
                          </svg>
                          Microsoft
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Sign Up Link */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a
                      href="/signup"
                      className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
                    >
                      Sign up for a course
                    </a>
                  </p>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Select Your Courses
                </h2>
                <p className="text-gray-600 mb-8">
                  Choose the courses that match your learning goals
                </p>

                <div className="space-y-6">
                  {courses.map(course => (
                    <div
                      key={course.id}
                      className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 ${
                        selectedCourses.includes(course.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleCourseSelection(course.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {course.category}
                            </span>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {course.duration}
                              </div>
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                {course.students.toLocaleString()}
                              </div>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                                {course.rating}
                              </div>
                            </div>
                          </div>

                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {course.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {course.description}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              Instructor: <span className="font-medium text-gray-700">{course.instructor}</span>
                            </div>
                            <div className="text-2xl font-bold text-gray-900">
                              ${course.price}
                            </div>
                          </div>
                        </div>

                        <div className={`ml-4 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedCourses.includes(course.id)
                            ? 'bg-blue-500 border-blue-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedCourses.includes(course.id) && (
                            <Check className="w-4 h-4 text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="text-lg font-semibold text-gray-900">
                    Total: ${selectedCourses.reduce((total, courseId) => {
                      const course = courses.find(c => c.id === courseId);
                      return total + (course?.price || 0);
                    }, 0)}
                  </div>
                  <button
                    onClick={handleEnroll}
                    disabled={selectedCourses.length === 0}
                    className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Complete Enrollment
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Enrollment Complete!
                </h3>
                <p className="text-gray-600 mb-8">
                  Welcome to our learning community! Check your email for confirmation and next steps.
                </p>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Back to Dashboard
                </button>
              </div>
            )}
          </div>

          {/* Right Column - Features & Benefits */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Why Choose Our Platform?
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Start Learning?</h3>
              <p className="mb-6 opacity-90">
                Join over 50,000 students who have transformed their careers with our courses.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-80">Courses</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm opacity-80">Students</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-sm opacity-80">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}