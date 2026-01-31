'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Eye, User, BookOpen, Bookmark, Share2, ChevronDown, Grid, List, Download, Play } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  publishedDate: string;
  views: number;
  description: string;
  coverImage: string;
  genre: string[];
  pages: number;
  language: string;
  isbn: string;
  publisher: string;
  isFeatured?: boolean;
  isNew?: boolean;
}

export default function BooksPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [showActions, setShowActions] = useState<string | null>(null);

  const genres: string[] = [
    'all', 'fiction', 'non-fiction', 'science', 'technology', 
    'history', 'biography', 'fantasy', 'mystery', 'romance'
  ];

  const books: Book[] = [
    {
      id: '1',
      title: 'The Quality of Good Things',
      author: 'AYORAMI Adelayo',
      publishedDate: '2020-08-13',
      views: 12543,
      description: 'A novel about a library that contains books that let you experience the lives you could have lived.',
      coverImage: '/images/books/goodthinks.webp',
      genre: ['fiction', 'fantasy'],
      pages: 304,
      language: 'English',
      isbn: '978-0525559474',
      publisher: 'Penguin Books',
      isFeatured: true
    },
    {
      id: '2',
      title: 'The Rise of the African Novel',
      author: 'MUKOMA wa Ngogi',
      publishedDate: '2018-10-16',
      views: 89234,
      description: 'Tiny Changes, Remarkable Results: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
      coverImage: '/images/books/rise.jpg',
      genre: ['non-fiction', 'self-help'],
      pages: 320,
      language: 'English',
      isbn: '978-0735211292',
      publisher: 'Avery',
      isFeatured: true
    },
    {
      id: '3',
      title: 'Hunger Eats a Man',
      author: 'NKOSINATHI Sithole',
      publishedDate: '2021-05-04',
      views: 45678,
      description: 'A lone astronaut must save the earth from disaster in this incredible new science-based thriller.',
      coverImage: '/images/books/hanger.avif',
      genre: ['science', 'fiction'],
      pages: 496,
      language: 'English',
      isbn: '978-0593135204',
      publisher: 'Ballantine Books',
      isNew: true
    },
    {
      id: '4',
      title: 'Emerging African Voices',
      author: 'Walter P.Collins',
      publishedDate: '2021-05-04',
      views: 45678,
      description: 'A lone astronaut must save the earth from disaster in this incredible new science-based thriller.',
      coverImage: '/images/books/emerging.jpg',
      genre: ['science', 'fiction'],
      pages: 496,
      language: 'English',
      isbn: '978-0593135204',
      publisher: 'Ballantine Books',
      isNew: true
    },
    {
      id: '5',
      title: 'The Wonga Coup',
      author: 'Adam Robert',
      publishedDate: '2021-05-04',
      views: 45678,
      description: 'A lone astronaut must save the earth from disaster in this incredible new science-based thriller.',
      coverImage: '/images/books/wonga.webp',
      genre: ['science', 'fiction'],
      pages: 496,
      language: 'English',
      isbn: '978-0593135204',
      publisher: 'Ballantine Books',
      isNew: true
    }
  ];

  // Filter and sort
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase())
      || book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || book.genre.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      case 'oldest':
        return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
      case 'views':
        return b.views - a.views;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleRead = (book: Book) => {
    alert(`Opening: ${book.title}`);
    setSelectedBook(null);
  };

  const handleDownload = (book: Book) => {
    alert(`Downloading: ${book.title}`);
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-black bg-clip-text mb-4">
            Welcome to our Digital Library
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover your next favorite book from our curated collection
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search books or authors..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative">
                <select
                  value={selectedGenre}
                  onChange={e => setSelectedGenre(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                >
                  {genres.map((tag: string) => (
                    <option key={tag} value={tag}>
                      {tag === 'all' ? 'All Genres' : tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="views">Most Views</option>
                  <option value="title">Title A-Z</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className={`${
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-6'
        }`}>
          {sortedBooks.map(book => (
            <div
              key={book.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden ${
                viewMode === 'list' ? 'flex' : 'h-full flex flex-col'
              }`}
              onMouseEnter={() => setShowActions(book.id)}
              onMouseLeave={() => setShowActions(null)}
            >
              {/* Cover Image - Reduced Height */}
              <div className={`relative overflow-hidden bg-gray-100 ${
                viewMode === 'list' ? 'w-32 flex-shrink-0' : 'h-48'
              }`}>
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 space-y-2">
                  {book.isFeatured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      Featured
                    </span>
                  )}
                  {book.isNew && (
                    <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      New
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className={`absolute top-3 right-3 transition-all duration-300 ${
                  showActions === book.id ? 'opacity-100' : 'opacity-0'
                } space-y-2`}>
                  <button className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Bookmark className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                {/* Quick Actions Overlay */}
                <div className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-all duration-300 ${
                  showActions === book.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                  <div className="flex gap-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRead(book);
                      }}
                      className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                    >
                      <Play className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(book);
                      }}
                      className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Book Info */}
              <div className={`p-4 flex-1 flex flex-col ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="mb-3 flex-1">
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                    {book.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-gray-600">
                      <User className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{book.author}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{book.views.toLocaleString()}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {book.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 pt-3 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1">
                    {book.genre.slice(0, 2).map((tag: string) => (
                      <span key={tag} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>{book.pages}p</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedBooks.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No books found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Book Detail Modal */}
        {selectedBook && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex flex-col lg:flex-row">
                {/* Book Cover */}
                <div className="lg:w-2/5 p-8">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={selectedBook.coverImage}
                      alt={selectedBook.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Book Details */}
                <div className="lg:w-3/5 p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedBook.title}
                      </h2>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <User className="w-5 h-5 mr-2" />
                          <span className="text-lg font-medium">{selectedBook.author}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Eye className="w-5 h-5 mr-2" />
                          <span>{selectedBook.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedBook(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedBook.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 py-4">
                      <div>
                        <span className="text-sm text-gray-500">Published</span>
                        <p className="font-medium">{new Date(selectedBook.publishedDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Pages</span>
                        <p className="font-medium">{selectedBook.pages}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Language</span>
                        <p className="font-medium">{selectedBook.language}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Publisher</span>
                        <p className="font-medium">{selectedBook.publisher}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {selectedBook.genre.map((genre) => (
                        <span
                          key={genre}
                          className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4 pt-6">
                      <button 
                        onClick={() => handleRead(selectedBook)}
                        className="flex-1 bg-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-3"
                      >
                        <Play className="w-5 h-5" />
                        Read Now
                      </button>
                      <button 
                        onClick={() => handleDownload(selectedBook)}
                        className="flex-1 border border-gray-300 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
                      >
                        <Download className="w-5 h-5" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}