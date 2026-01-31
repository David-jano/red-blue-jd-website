'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Eye, User, Calendar, Globe, Clock, Film, BookOpen, Play, Download, Bookmark, Share2, ChevronDown, Grid, List, ExternalLink } from 'lucide-react';

interface HistoryItem {
  id: string;
  title: string;
  author?: string;
  narrator?: string;
  publishedDate: string;
  views: number;
  description: string;
  coverImage: string;
  period: string;
  region: string;
  duration?: string;
  youtubeUrl?: string;
  pages?: number;
  language: string;
  isbn?: string;
  publisher?: string;
  type: 'book' | 'documentary';
  isFeatured?: boolean;
  isNew?: boolean;
  rating?: number;
}

export default function HistoryPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedType, setSelectedType] = useState<'all' | 'book' | 'documentary'>('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);
  const [activeTab, setActiveTab] = useState<'books' | 'documentaries'>('books');

  const periods: string[] = [
    'all', 'Ancient', 'Medieval', 'Renaissance', 'Modern', 
    'World Wars', 'Cold War', 'Contemporary', 'Prehistoric'
  ];

  const regions: string[] = [
    'all', 'Global', 'Europe', 'Asia', 'Africa', 
    'Americas', 'Middle East', 'Oceania', 'Ancient Civilizations'
  ];

  // Your custom cover images
  const historyItems: HistoryItem[] = [
    // History Books
    {
      id: '1',
      title: 'General IDI AMIN DADA',
      author: 'Yuval Noah Harari',
      publishedDate: '2014-09-04',
      views: 285000,
      description: 'Igitabo cyangwa inyandiko kuri Idi Amin Dada kigaragaza ubutegetsi bwe bukomeye kandi buteye ubwoba muri Uganda',
      coverImage: '/images/amateka/002.jpg', 
      period: 'Prehistoric',
      region: 'Global',
      pages: 443,
      language: 'English',
      isbn: '978-0062316097',
      publisher: 'Harper',
      type: 'book',
      isFeatured: true,
      rating: 4.7
    },
    {
      id: '2',
      title: 'Nelson Madiba Mandela',
      author: 'Peter Frankopan',
      publishedDate: '2015-08-27',
      views: 142000,
      description: 'Igitabo cya Mandela gitanga urugendo rwe rw’ubuzima, guhangana n’ubucakara no kurwanira uburenganzira bwa muntu',
      coverImage: '/images/amateka/003.jpg', 
      period: 'Medieval',
      region: 'Asia',
      pages: 672,
      language: 'English',
      isbn: '978-1101912379',
      publisher: 'Knopf',
      type: 'book',
      isFeatured: true,
      rating: 4.6
    },
    {
      id: '3',
      title: 'Kuzamuka no kugwa kwa Muommar Gaddaf',
      author: 'William L. Shirer',
      publishedDate: '1960-10-17',
      views: 983000,
      description: 'Igitabo cyangwa inyandiko ya Gaddafi igaragaza ibitekerezo bye ku miyoborere, politiki, n’imibereho y’abaturage.',
      coverImage: '/images/amateka/006.jpg', // Your custom image
      period: 'World Wars',
      region: 'Europe',
      pages: 1152,
      language: 'English',
      isbn: '978-1451651683',
      publisher: 'Simon & Schuster',
      type: 'book',
      rating: 4.8
    },
    {
      id: '4',
      title: 'FIDEL Castro niki',
      author: 'Charles C. Mann',
      publishedDate: '2005-08-09',
      views: 89000,
      description: 'Fidel Castro yari umuyobozi w’Uburayi bwa Cuba, uzwiho guhindura politiki no gushyiraho ubutegetsi bw’igitugu cya gisirikare',
      coverImage: '/images/amateka/004.jpg', // Your custom image
      period: 'Ancient',
      region: 'Americas',
      pages: 480,
      language: 'English',
      isbn: '978-1400032051',
      publisher: 'Vintage',
      type: 'book',
      isNew: true,
      rating: 4.5
    },
    {
      id: '5',
      title: 'Ihinduramatwara rya Cheguevara',
      author: 'Jared Diamond',
      publishedDate: '1997-03-01',
      views: 356000,
      description: 'Che Guevara yari umunyapolitiki n’umunyagitugu w’umunyamerika w’inkoramutima, uzwi cyane mu rwego rw’impinduramatwara muri Cuba',
      coverImage: '/images/amateka/005.jpg', 
      period: 'Ancient',
      region: 'Global',
      pages: 480,
      language: 'English',
      isbn: '978-0393317558',
      publisher: 'W. W. Norton',
      type: 'book',
      rating: 4.5
    },

    // Documentaries
    {
      id: '6',
      title: 'The World at War',
      narrator: 'Laurence Olivier',
      publishedDate: '1973-10-31',
      views: 1250000,
      description: 'The definitive television history of World War II, featuring interviews with key figures from both sides of the conflict and remarkable archival footage.',
      coverImage: '/images/documentaries/world-at-war.jpg', // Your custom image
      period: 'World Wars',
      region: 'Global',
      duration: '22h 30m',
      youtubeUrl: 'https://www.youtube.com/watch?v=wKGlHqNHEHM',
      language: 'English',
      type: 'documentary',
      isFeatured: true,
      rating: 4.9
    },
    {
      id: '7',
      title: 'Civilisation',
      narrator: 'Kenneth Clark',
      publishedDate: '1969-02-23',
      views: 890000,
      description: 'A personal view of Western European civilization from the Dark Ages to the present, tracing the growth of human thought and creativity.',
      coverImage: '/images/documentaries/civilisation.jpg', // Your custom image
      period: 'Medieval',
      region: 'Europe',
      duration: '13h',
      youtubeUrl: 'https://www.youtube.com/watch?v=Nd9RgH-wI6U',
      language: 'English',
      type: 'documentary',
      rating: 4.8
    },
    {
      id: '8',
      title: 'The Vietnam War',
      narrator: 'Peter Coyote',
      publishedDate: '2017-09-17',
      views: 756000,
      description: 'A comprehensive look at the Vietnam War featuring testimony from nearly 100 witnesses, including Americans who fought and opposed the war.',
      coverImage: '/images/documentaries/vietnam-war.jpg', // Your custom image
      period: 'Cold War',
      region: 'Asia',
      duration: '18h',
      youtubeUrl: 'https://www.youtube.com/watch?v=g2I0Jv3Uz-I',
      language: 'English',
      type: 'documentary',
      isNew: true,
      rating: 4.7
    },
    {
      id: '9',
      title: 'The Story of China',
      narrator: 'Michael Wood',
      publishedDate: '2016-01-21',
      views: 543000,
      description: 'A journey through China\'s history, from ancient times to the modern day, exploring its culture, philosophy, and enduring traditions.',
      coverImage: '/images/documentaries/story-of-china.jpg', // Your custom image
      period: 'Ancient',
      region: 'Asia',
      duration: '6h',
      youtubeUrl: 'https://www.youtube.com/watch?v=7Y0GvXpRc2c',
      language: 'English',
      type: 'documentary',
      rating: 4.6
    },
    {
      id: '10',
      title: 'The Ascent of Man',
      narrator: 'Jacob Bronowski',
      publishedDate: '1973-05-05',
      views: 678000,
      description: 'A personal view of mankind\'s scientific development, exploring the intellectual and cultural steps that have shaped our civilization.',
      coverImage: '/images/documentaries/ascent-of-man.jpg', // Your custom image
      period: 'Ancient',
      region: 'Global',
      duration: '13h',
      youtubeUrl: 'https://www.youtube.com/watch?v=0Z8p2zKOTw4',
      language: 'English',
      type: 'documentary',
      rating: 4.8
    },
    {
      id: '11',
      title: 'Africa\'s Great Civilizations',
      narrator: 'Henry Louis Gates Jr.',
      publishedDate: '2017-02-27',
      views: 432000,
      description: 'A journey through two hundred thousand years of history, from the origins of humankind to the dawn of the 20th century.',
      coverImage: '/images/documentaries/africa-civilizations.jpg', // Your custom image
      period: 'Ancient',
      region: 'Africa',
      duration: '6h',
      youtubeUrl: 'https://www.youtube.com/watch?v=4QK3Y8hJ6Yo',
      language: 'English',
      type: 'documentary',
      rating: 4.5
    },
    {
      id: '12',
      title: 'The Civil War',
      narrator: 'David McCullough',
      publishedDate: '1990-09-23',
      views: 987000,
      description: 'The most widely viewed documentary series in PBS history, bringing the American Civil War to life through the words of participants.',
      coverImage: '/images/documentaries/civil-war.jpg', // Your custom image
      period: 'Modern',
      region: 'Americas',
      duration: '11h',
      youtubeUrl: 'https://www.youtube.com/watch?v=GzTrPcB9-es',
      language: 'English',
      type: 'documentary',
      isFeatured: true,
      rating: 4.9
    },
  ];

  // Filter by type
  const filteredByType = historyItems.filter(item => 
    selectedType === 'all' || item.type === selectedType
  );

  // Apply other filters
  const filteredItems = filteredByType.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
      || (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase()))
      || (item.narrator && item.narrator.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesPeriod = selectedPeriod === 'all' || item.period === selectedPeriod;
    const matchesRegion = selectedRegion === 'all' || item.region === selectedRegion;
    return matchesSearch && matchesPeriod && matchesRegion;
  });

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      case 'oldest':
        return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
      case 'views':
        return b.views - a.views;
      case 'title':
        return a.title.localeCompare(b.title);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  // Separate books and documentaries
  const books = sortedItems.filter(item => item.type === 'book');
  const documentaries = sortedItems.filter(item => item.type === 'documentary');
  const activeItems = activeTab === 'books' ? books : documentaries;

  const handleItemClick = (item: HistoryItem) => {
    setSelectedItem(item);
  };

  const handlePlay = (item: HistoryItem) => {
    if (item.type === 'documentary' && item.youtubeUrl) {
      window.open(item.youtubeUrl, '_blank');
    } else {
      alert(`Opening: ${item.title}`);
    }
  };

  const handleDownload = (item: HistoryItem) => {
    alert(`Downloading: ${item.title}`);
  };

  const handleRead = (item: HistoryItem) => {
    alert(`Reading: ${item.title}`);
  };

  const StatCard = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 shadow-sm border border-gray-200">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-lg font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-amber-600 via-red-600 to-stone-800 rounded-2xl flex items-center justify-center shadow-2xl">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Calendar className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-amber-800 to-red-700 mb-4">
            AMATEKA
          </h1>
          <p className="text-l text-gray-600 max-w-3xl mx-auto">
           Menya Umwaduko w'ubuzima bwa muntu binyuze mu bikorwa by'amateka n'inyandiko-mashusho z'umwimerere.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard icon={BookOpen} label="Ibitabo by’Amateka" value="2,847" />
          <StatCard icon={Film} label="Amasaha ya Dokumentari" value="1,250+" />
          <StatCard icon={Globe} label="Imico n’Umuco Bikubiyemo" value="85+" />
        </div>

        {/* Search & Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-stone-200">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="shaka amateka, umwanditsi, cyangwa umusomyi...."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white/50"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value as any)}
                  className="appearance-none bg-white border border-stone-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                >
                  <option value="all">Byose</option>
                  <option value="book">Ibitabo gusa</option>
                  <option value="documentary">Ibyegeranyo gusa</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={selectedPeriod}
                  onChange={e => setSelectedPeriod(e.target.value)}
                  className="appearance-none bg-white border border-stone-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                >
                  {periods.map((period) => (
                    <option key={period} value={period}>
                      {period === 'all' ? 'Ibihe byose' : period}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={selectedRegion}
                  onChange={e => setSelectedRegion(e.target.value)}
                  className="appearance-none bg-white border border-stone-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                >
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region === 'all' ? 'Kwisi hose' : region}
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
                  className="appearance-none bg-white border border-stone-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                >
                  <option value="newest">Ibishya mbere</option>
                  <option value="oldest">Ibishaje mbere</option>
                  <option value="views">Ibyarebwe cyane</option>
                  <option value="rating">Ibyakunzwe cyane</option>
                  <option value="title">Kuva A-Z</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="flex bg-stone-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-white shadow-sm text-amber-600' : 'text-stone-500 hover:text-stone-700'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-white shadow-sm text-amber-600' : 'text-stone-500 hover:text-stone-700'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mb-8">
          <div className="border-b border-stone-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('books')}
                className={`py-3 px-1 border-b-2 font-medium text-lg transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === 'books'
                    ? 'border-amber-600 text-amber-600'
                    : 'border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                Ibitabo
                <span className="bg-stone-100 text-stone-700 text-sm font-normal px-2 py-1 rounded-full">
                  {books.length}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('documentaries')}
                className={`py-3 px-1 border-b-2 font-medium text-lg transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === 'documentaries'
                    ? 'border-amber-600 text-amber-600'
                    : 'border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300'
                }`}
              >
                <Film className="w-5 h-5" />
                Ibyegeranyo
                <span className="bg-stone-100 text-stone-700 text-sm font-normal px-2 py-1 rounded-full">
                  {documentaries.length}
                </span>
              </button>
            </nav>
          </div>
        </div>

        {/* Content Grid */}
        <div className={`${
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-6'
        }`}>
          {activeItems.map(item => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden border border-stone-200 ${
                viewMode === 'list' ? 'flex' : 'h-full flex flex-col'
              }`}
              onClick={() => handleItemClick(item)}
            >
              {/* Cover Image with Type Badge */}
              <div className={`relative overflow-hidden bg-gradient-to-br from-stone-100 to-amber-100 ${
                viewMode === 'list' ? 'w-40 flex-shrink-0' : 'h-48'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                
                {/* Custom Cover Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes={viewMode === 'list' ? '160px' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'}
                  />
                </div>

                {/* Type Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                    item.type === 'book' 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500'
                  }`}>
                    {item.type === 'book' ? 'Book' : 'Documentary'}
                  </span>
                </div>

                {/* Featured/New Badges */}
                <div className="absolute top-3 right-3 z-20 space-y-2">
                  {item.isFeatured && (
                    <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      Featured
                    </span>
                  )}
                  {item.isNew && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      New
                    </span>
                  )}
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                  <div className="flex gap-3">
                    {item.type === 'documentary' ? (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlay(item);
                        }}
                        className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-all transform hover:scale-110"
                      >
                        <Play className="w-6 h-6" fill="white" />
                      </button>
                    ) : (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRead(item);
                        }}
                        className="bg-green-600 text-white p-4 rounded-full hover:bg-green-700 transition-all transform hover:scale-110"
                      >
                        <BookOpen className="w-6 h-6" />
                      </button>
                    )}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(item);
                      }}
                      className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-110"
                    >
                      <Download className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Info */}
              <div className={`p-4 flex-1 flex flex-col ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="mb-3 flex-1">
                  <h3 className="font-bold text-lg text-stone-900 line-clamp-2 mb-2 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="mb-3">
                    <div className="flex items-center text-stone-600 mb-2">
                      {item.type === 'book' ? (
                        <>
                          <User className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="text-sm font-medium truncate">{item.author}</span>
                        </>
                      ) : (
                        <>
                          <Film className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="text-sm font-medium truncate">{item.narrator}</span>
                        </>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-stone-500">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        <span>{item.views.toLocaleString()} views</span>
                      </div>
                      {item.rating && (
                        <div className="flex items-center bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                          <span className="text-sm font-bold">{item.rating}</span>
                          <span className="text-xs ml-1">★</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-stone-600 text-sm line-clamp-2 mb-3">
                    {item.description}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="pt-3 border-t border-stone-100">
                  <div className="flex items-center justify-between text-sm text-stone-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(item.publishedDate).getFullYear()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      <span>{item.region}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="bg-stone-100 text-stone-700 text-xs px-2 py-1 rounded-full">
                        {item.period}
                      </span>
                      {item.type === 'book' ? (
                        <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                          {item.pages}p
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full">
                          <Clock className="w-3 h-3" />
                          {item.duration}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button className="p-1 hover:bg-stone-100 rounded-full transition-colors">
                        <Bookmark className="w-4 h-4 text-stone-400 hover:text-stone-600" />
                      </button>
                      <button className="p-1 hover:bg-stone-100 rounded-full transition-colors">
                        <Share2 className="w-4 h-4 text-stone-400 hover:text-stone-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {activeItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-stone-400" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-2">No historical content found</h3>
            <p className="text-stone-600">Try adjusting your search or filters to explore our collection</p>
          </div>
        )}

        {/* Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                {/* Cover Image */}
                <div className="lg:w-2/5 p-8 bg-gradient-to-br from-stone-50 to-amber-50">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={selectedItem.coverImage}
                      alt={selectedItem.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg ${
                        selectedItem.type === 'book' 
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500' 
                          : 'bg-gradient-to-r from-blue-500 to-purple-500'
                      }`}>
                        {selectedItem.type === 'book' ? 'Historical Book' : 'Documentary Film'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:w-3/5 p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-stone-900 mb-2">
                        {selectedItem.title}
                      </h2>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center text-stone-600">
                          {selectedItem.type === 'book' ? (
                            <>
                              <User className="w-5 h-5 mr-2" />
                              <span className="text-lg font-medium">{selectedItem.author}</span>
                            </>
                          ) : (
                            <>
                              <Film className="w-5 h-5 mr-2" />
                              <span className="text-lg font-medium">{selectedItem.narrator}</span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center text-stone-500">
                          <Eye className="w-5 h-5 mr-2" />
                          <span>{selectedItem.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="text-stone-400 hover:text-stone-600 transition-colors text-2xl p-2 hover:bg-stone-100 rounded-full"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-6">
                    <p className="text-stone-700 leading-relaxed text-lg">
                      {selectedItem.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 py-4 bg-stone-50 rounded-xl p-4">
                      <div>
                        <span className="text-sm text-stone-500">Historical Period</span>
                        <p className="font-bold text-lg text-stone-800">{selectedItem.period}</p>
                      </div>
                      <div>
                        <span className="text-sm text-stone-500">Region</span>
                        <p className="font-bold text-lg text-stone-800">{selectedItem.region}</p>
                      </div>
                      <div>
                        <span className="text-sm text-stone-500">Published</span>
                        <p className="font-medium">{new Date(selectedItem.publishedDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</p>
                      </div>
                      <div>
                        <span className="text-sm text-stone-500">
                          {selectedItem.type === 'book' ? 'Pages' : 'Duration'}
                        </span>
                        <p className="font-medium">
                          {selectedItem.type === 'book' ? `${selectedItem.pages} pages` : selectedItem.duration}
                        </p>
                      </div>
                    </div>

                    {selectedItem.rating && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-stone-500">Rating:</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-amber-400">
                              {i < Math.floor(selectedItem.rating!) ? '★' : '☆'}
                            </span>
                          ))}
                          <span className="ml-2 font-bold text-stone-800">{selectedItem.rating}/5</span>
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-4 pt-6">
                      {selectedItem.type === 'documentary' ? (
                        <button 
                          onClick={() => {
                            if (selectedItem.youtubeUrl) {
                              window.open(selectedItem.youtubeUrl, '_blank');
                            }
                            setSelectedItem(null);
                          }}
                          className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all flex items-center justify-center gap-3 shadow-lg"
                        >
                          <Play className="w-5 h-5" fill="white" />
                          Watch on YouTube
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleRead(selectedItem)}
                          className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all flex items-center justify-center gap-3 shadow-lg"
                        >
                          <BookOpen className="w-5 h-5" />
                          Read Now
                        </button>
                      )}
                      <button 
                        onClick={() => handleDownload(selectedItem)}
                        className="flex-1 border border-stone-300 text-stone-700 py-4 px-6 rounded-xl font-semibold hover:bg-stone-50 transition-all flex items-center justify-center gap-3"
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