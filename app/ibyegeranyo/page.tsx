'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Play, User, Film, Eye, Bookmark, Share2, ChevronDown, Grid, List, MapPin, Clock, Calendar } from 'lucide-react';

interface Documentary {
  id: string;
  title: string;
  director: string;
  publishedDate: string;
  views: number;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
  duration: string;
  location: string;
  tags: string[];
  isFeatured?: boolean;
  isNew?: boolean;
}

export default function DocumentariesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedDoc, setSelectedDoc] = useState<Documentary | null>(null);
  const [showActions, setShowActions] = useState<string | null>(null);

  const locations: string[] = [
    'all', 'africa', 'asia', 'europe', 'north-america', 
    'south-america', 'australia', 'antarctica', 'middle-east', 'global'
  ];

  const documentaries: Documentary[] = [
    {
      id: '1',
      title: 'Moto YURUPFU',
      director: 'BYIRINGIRO Arsene',
      publishedDate: '2025-11-28',
      views: 20430,
      description: 'Exploring the cultural and economic rebirth of the African continent through the eyes of its people.',
      thumbnail: '/images/documentaries/spiro.png',
      youtubeUrl: 'https://youtu.be/B-vbxbFzYTo?si=OODpNFLssWMKrRIQ',
      duration: '18:04',
      location: 'africa',
      tags: ['Technology', 'history', 'development'],
      isFeatured: true
    },
    {
      id: '2',
      title: 'Byinshi utazi ku kuryama',
      director: 'Kabayiza Jeannete',
      publishedDate: '2023-10-16',
      views: 89234,
      description: 'A journey through Asia\'s technological advancements while preserving ancient traditions.',
      thumbnail: '/images/documentaries/sleep.png',
      youtubeUrl: 'https://youtu.be/JoJ-ym7COAU?si=F4XIPNWv4k1E0fjS',
      duration: '15:26',
      location: 'asia',
      tags: ['technology', 'tradition', 'innovation'],
      isFeatured: true
    },
    {
      id: '3',
      title: 'Byinshi utazi ku kuryama',
      director: 'KABAYIZA Jeannete',
      publishedDate: '2024-01-04',
      views: 156789,
      description: 'Documenting the untouched beauty and fragile ecosystem of the Antarctic continent.',
      thumbnail: '/images/documentaries/sleep.png',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '38:45',
      location: 'global',
      tags: ['nature', 'climate', 'wildlife'],
      isNew: true
    },
    {
      id: '4',
      title: 'Amazon: Lungs of the Earth',
      director: 'Carlos Silva',
      publishedDate: '2023-11-20',
      views: 98765,
      description: 'An immersive look at the Amazon rainforest and its crucial role in global climate regulation.',
      thumbnail: '/images/docs/amazon.jpg',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '49:32',
      location: 'south-america',
      tags: ['environment', 'conservation', 'biodiversity'],
      isNew: true
    },
    {
      id: '5',
      title: 'European Heritage: Centuries of Art',
      director: 'Marie Dubois',
      publishedDate: '2023-09-15',
      views: 75643,
      description: 'Tracing the evolution of European art from Renaissance masters to modern contemporary works.',
      thumbnail: '/images/docs/european-art.jpg',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '41:15',
      location: 'europe',
      tags: ['art', 'history', 'culture']
    },
    {
      id: '6',
      title: 'SAMILA MU MAZI ABIRA',
      director: 'TUYIHIMITIMA Irene',
      publishedDate: '2024-02-01',
      views: 234567,
      description: 'A comprehensive decision undertaken by ICC due to Human Brutality in Tanzania Country.',
      thumbnail: '/images/documentaries/samila.jpg',
      youtubeUrl: 'https://youtu.be/IDUiFYcAX8o?si=OgJwopnYW9WvhbPm',
      duration: '20:10',
      location: 'africa',
      tags: ['Politics', 'Economy'],
      isFeatured: true
    },
    {
      id: '7',
      title: 'Ubujura Kwa Zalensky',
      director: 'MUKESHIMANA Angelique',
      publishedDate: '2023-12-10',
      views: 67890,
      description: 'Exploring the rich history and cultural diversity of the Middle East through ancient and modern lenses.',
      thumbnail: '/images/documentaries/trump.png',
      youtubeUrl: 'https://youtu.be/eThY-Q-Eti4?si=_-8KJWYVf4Yu_Mbu',
      duration: '47:25',
      location: 'north america',
      tags: ['history', 'culture', 'civilization']
    },
    {
      id: '8',
      title: 'North American Wilderness',
      director: 'John Carter',
      publishedDate: '2023-07-22',
      views: 112345,
      description: 'From Alaskan glaciers to Mexican deserts, exploring the diverse wilderness of North America.',
      thumbnail: '/images/docs/north-america.jpg',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '43:38',
      location: 'north-america',
      tags: ['wildlife', 'nature', 'adventure']
    }
  ];

  // Filter and sort
  const filteredDocs = documentaries.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase())
      || doc.director.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || doc.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  const sortedDocs = [...filteredDocs].sort((a, b) => {
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

  const handlePlay = (doc: Documentary) => {
    window.open(doc.youtubeUrl.replace('/embed/', '/watch?v='), '_blank');
  };

  const formatLocation = (location: string) => {
    return location.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Film className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Documentary Library
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the world through captivating documentaries from every corner of the globe
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
                placeholder="Search documentaries or directors..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={e => setSelectedLocation(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                >
                  {locations.map((location: string) => (
                    <option key={location} value={location}>
                      {location === 'all' ? 'All Locations' : formatLocation(location)}
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
                  className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
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
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-white shadow-sm text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-white shadow-sm text-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Documentaries Grid */}
        <div className={`${
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-6'
        }`}>
          {sortedDocs.map(doc => (
            <div
              key={doc.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden ${
                viewMode === 'list' ? 'flex' : 'h-full flex flex-col'
              }`}
              onMouseEnter={() => setShowActions(doc.id)}
              onMouseLeave={() => setShowActions(null)}
            >
              {/* Thumbnail with Play Button */}
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-48'
              }`}>
                <div className="relative w-full h-full">
                  <Image
                    src={doc.thumbnail}
                    alt={doc.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback gradient background */}
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Film className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-3 left-3 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded-full">
                  {doc.duration}
                </div>

                {/* Location Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {formatLocation(doc.location)}
                  </span>
                </div>

                {/* Featured/New Badges */}
                <div className="absolute top-3 right-3 space-y-2">
                  {doc.isFeatured && (
                    <span className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      Featured
                    </span>
                  )}
                  {doc.isNew && (
                    <span className="bg-blue-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      New
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className={`absolute top-3 right-3 transition-all duration-300 ${
                  showActions === doc.id ? 'opacity-100' : 'opacity-0'
                } space-y-2`}>
                  <button className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Bookmark className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                {/* Play Button Overlay */}
                <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300 ${
                  showActions === doc.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlay(doc);
                    }}
                    className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors transform hover:scale-110"
                  >
                    <Play className="w-6 h-6 fill-current" />
                  </button>
                </div>
              </div>

              {/* Documentary Info */}
              <div className={`p-4 flex-1 flex flex-col ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="mb-3 flex-1">
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2 group-hover:text-green-600 transition-colors">
                    {doc.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-gray-600">
                      <User className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{doc.director}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{doc.views.toLocaleString()}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {doc.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 pt-3 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1">
                    {doc.tags.slice(0, 2).map((tag: string) => (
                      <span key={tag} className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(doc.publishedDate).getFullYear()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedDocs.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No documentaries found</h3>
            <p className="text-gray-600">Try adjusting your search or location filters</p>
          </div>
        )}

        {/* Documentary Detail Modal */}
        {selectedDoc && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex flex-col lg:flex-row">
                {/* Video Player */}
                <div className="lg:w-2/3 p-6">
                  <div className="aspect-video bg-black rounded-xl overflow-hidden mb-6">
                    <iframe
                      src={selectedDoc.youtubeUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    {/* Cover Image in Modal */}
                    <div className="w-24 h-32 relative rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={selectedDoc.thumbnail}
                        alt={selectedDoc.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedDoc.title}
                      </h2>
                      <div className="flex items-center text-gray-600 mb-1">
                        <User className="w-4 h-4 mr-2" />
                        <span className="font-medium">{selectedDoc.director}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="font-medium">{formatLocation(selectedDoc.location)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2" />
                      <span className="font-medium">{selectedDoc.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Eye className="w-5 h-5 mr-2" />
                      <span className="font-medium">{selectedDoc.views.toLocaleString()} views</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-medium">{new Date(selectedDoc.publishedDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {selectedDoc.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedDoc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Documentary Details Sidebar */}
                <div className="lg:w-1/3 p-6 border-l border-gray-200">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
                    <button
                      onClick={() => setSelectedDoc(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-4">
                    <button 
                      onClick={() => handlePlay(selectedDoc)}
                      className="w-full bg-red-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-3"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      Watch on YouTube
                    </button>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                        <Bookmark className="w-4 h-4" />
                        Save
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 mt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Documentary Info</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Location:</span>
                          <span className="font-medium">{formatLocation(selectedDoc.location)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Duration:</span>
                          <span className="font-medium">{selectedDoc.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Views:</span>
                          <span className="font-medium">{selectedDoc.views.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Published:</span>
                          <span className="font-medium">{new Date(selectedDoc.publishedDate).toLocaleDateString()}</span>
                        </div>
                      </div>
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