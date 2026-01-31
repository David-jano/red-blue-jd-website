'use client';

import { useState } from 'react';
import { Search, Eye, User, Calendar, Clock, Film, BookOpen, Play, Download, Bookmark, Share2, ChevronDown, Grid, List, ExternalLink, Heart, Activity, Brain, Apple, Stethoscope, Pill, Dumbbell, Users, Shield, ImageOff } from 'lucide-react';

interface HealthItem {
  id: string;
  title: string;
  author?: string;
  narrator?: string;
  publishedDate: string;
  views: number;
  description: string;
  coverImage: string;
  category: string;
  focusArea: 'Nutrition' | 'Fitness' | 'Mental Health' | 'Medical' | 'Wellness' | 'Alternative Medicine';
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
  certified?: boolean;
}

export default function HealthPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFocus, setSelectedFocus] = useState('all');
  const [selectedType, setSelectedType] = useState<'all' | 'book' | 'documentary'>('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedItem, setSelectedItem] = useState<HealthItem | null>(null);
  const [activeTab, setActiveTab] = useState<'books' | 'documentaries'>('books');
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const categories: string[] = [
    'all', 'Nutrition', 'Exercise Science', 'Mental Health', 'Preventive Medicine',
    'Medical Research', 'Yoga & Meditation', 'Holistic Health', 'Aging & Longevity',
    'Children\'s Health', 'Women\'s Health', 'Men\'s Health', 'First Aid & Safety'
  ];

  const focusAreas = ['all', 'Nutrition', 'Fitness', 'Mental Health', 'Medical', 'Wellness', 'Alternative Medicine'];

  const healthItems: HealthItem[] = [
    // Health Books
    {
      id: '1',
      title: 'The China Study',
      author: 'T. Colin Campbell',
      publishedDate: '2004-01-01',
      views: 1850000,
      description: 'Ubuguzi bunini kandi buhambaye bwakozwe ku mirire bwerekana uko imirire ihuzwa n\'indwara z\'umutima, diyabete n\'akanseri.',
      coverImage: '/images/health/china-study.jpg',
      category: 'Nutrition',
      focusArea: 'Nutrition',
      pages: 448,
      language: 'English',
      isbn: '978-1932100662',
      publisher: 'BenBella Books',
      type: 'book',
      isFeatured: true,
      rating: 4.7,
      certified: true
    },
    {
      id: '2',
      title: 'Why We Sleep',
      author: 'Matthew Walker',
      publishedDate: '2017-10-03',
      views: 2450000,
      description: 'Ubushakashatsi bushya kandi buhambaye ku isinziro, busuzuma uburyo rigira ingaruka ku nzego zose z\'ubuzima bwacu—ku mubiri no ku mutwe.',
      coverImage: '/images/health/006.jpg',
      category: 'Preventive Medicine',
      focusArea: 'Wellness',
      pages: 368,
      language: 'English',
      isbn: '978-1501144318',
      publisher: 'Scribner',
      type: 'book',
      rating: 4.8,
      certified: true
    },
    {
      id: '3',
      title: 'The Body Keeps the Score',
      author: 'Bessel van der Kolk',
      publishedDate: '2014-09-25',
      views: 1890000,
      description: 'Impuguke mu by\'ihungabana, Bessel van der Kolk, ahindura uburyo twari dusanzwe twumva ihungabana kandi atanga uburyo bushya n\'inyamibwa bwo gukira.',
      coverImage: '/images/health/004.jpg',
      category: 'Mental Health',
      focusArea: 'Mental Health',
      pages: 464,
      language: 'English',
      isbn: '978-0670785933',
      publisher: 'Penguin Books',
      type: 'book',
      isFeatured: true,
      rating: 4.9
    },
    {
      id: '4',
      title: 'Atomic Habits',
      author: 'James Clear',
      publishedDate: '2018-10-16',
      views: 3560000,
      description: 'Uburyo bwemejwe bwo kubaka imico myiza no kurwanya imico mibi impinduka nto, ibisubizo bitangaje.',
      coverImage: '/images/health/001.jpg',
      category: 'Wellness',
      focusArea: 'Wellness',
      pages: 320,
      language: 'English',
      isbn: '978-0735211292',
      publisher: 'Avery',
      type: 'book',
      isNew: true,
      rating: 4.8,
      certified: true
    },
    {
      id: '5',
      title: 'The Plant Paradox',
      author: 'Steven R. Gundry',
      publishedDate: '2017-04-25',
      views: 890000,
      description: 'Igaragaza ibyago bitagaragara biri mu biribwa byitwa \'ibyiza ku buzima\' nko ku mbuto, imboga, n\'amasaka yose, bishobora gutera indwara no kwiyongera k\'uburemere.',
      coverImage: '/images/health/003.jpg',
      category: 'Nutrition',
      focusArea: 'Nutrition',
      pages: 416,
      language: 'English',
      isbn: '978-0062427137',
      publisher: 'Harper Wave',
      type: 'book',
      rating: 4.3
    },
    {
      id: '6',
      title: 'Breath: The New Science of a Lost Art',
      author: 'James Nestor',
      publishedDate: '2020-05-26',
      views: 1234000,
      description: 'Ubushakashatsi bw\'ubumenyi n\'umuco ku buryo ubwoko bwa muntu bwatakaje ubushobozi bwo guhumeka neza n\'uburyo bwo kubusubiza.',
      coverImage: '/images/health/002.jpg',
      category: 'Holistic Health',
      focusArea: 'Wellness',
      pages: 304,
      language: 'English',
      isbn: '978-0735213616',
      publisher: 'Riverhead Books',
      type: 'book',
      isNew: true,
      rating: 4.7
    },
    {
      id: '7',
      title: 'The Gene: An Intimate History',
      author: 'Siddhartha Mukherjee',
      publishedDate: '2016-05-17',
      views: 1560000,
      description: 'A magnificent history of the gene and a response to the defining question of the future of medicine and human health.',
      coverImage: '/images/health/gene-intimate.jpg',
      category: 'Medical Research',
      focusArea: 'Medical',
      pages: 592,
      language: 'English',
      isbn: '978-1476733500',
      publisher: 'Scribner',
      type: 'book',
      isFeatured: true,
      rating: 4.6,
      certified: true
    },
    {
      id: '8',
      title: 'Spark: The Revolutionary New Science of Exercise and the Brain',
      author: 'John J. Ratey',
      publishedDate: '2008-01-02',
      views: 987000,
      description: 'Groundbreaking research proving that exercise is truly our best defense against everything from depression to ADD to addiction.',
      coverImage: '/images/health/spark.jpg',
      category: 'Exercise Science',
      focusArea: 'Fitness',
      pages: 304,
      language: 'English',
      isbn: '978-0316113502',
      publisher: 'Little, Brown Spark',
      type: 'book',
      rating: 4.6
    },

    // Health Documentaries
    {
      id: '9',
      title: 'The Game Changers',
      narrator: 'James Wilks',
      publishedDate: '2018-08-01',
      views: 3450000,
      description: 'A revolutionary new documentary about meat, protein, and strength that will change the way you look at food forever.',
      coverImage: '/images/health/game-changers.jpg',
      category: 'Nutrition',
      focusArea: 'Nutrition',
      duration: '1h 25m',
      youtubeUrl: 'https://www.youtube.com/watch?v=iSpglxHTJVM',
      language: 'English',
      type: 'documentary',
      isFeatured: true,
      rating: 4.8,
      certified: true
    },
    {
      id: '10',
      title: 'Heal',
      narrator: 'Kelly Noonan Gores',
      publishedDate: '2017-01-01',
      views: 1234000,
      description: 'A documentary film that takes us on a scientific and spiritual journey where we discover that our thoughts, beliefs, and emotions have a huge impact on our health.',
      coverImage: '/images/health/heal.jpg',
      category: 'Holistic Health',
      focusArea: 'Alternative Medicine',
      duration: '1h 47m',
      youtubeUrl: 'https://www.youtube.com/watch?v=CAhs8Pc_t5c',
      language: 'English',
      type: 'documentary',
      rating: 4.7
    },
    {
      id: '11',
      title: 'What the Health',
      narrator: 'Kip Andersen',
      publishedDate: '2017-03-16',
      views: 4567000,
      description: 'A groundbreaking documentary that follows filmmaker Kip Andersen as he uncovers the secret to preventing and even reversing chronic diseases.',
      coverImage: '/images/health/what-the-health.jpg',
      category: 'Nutrition',
      focusArea: 'Nutrition',
      duration: '1h 32m',
      youtubeUrl: 'https://www.youtube.com/watch?v=Jf44vLndiRM',
      language: 'English',
      type: 'documentary',
      rating: 4.5
    },
    {
      id: '12',
      title: 'The Truth About Cancer',
      narrator: 'Ty Bollinger',
      publishedDate: '2015-01-01',
      views: 876000,
      description: 'A groundbreaking documentary series that exposes the truth about cancer and reveals how to prevent and heal from it.',
      coverImage: '/images/health/truth-cancer.jpg',
      category: 'Medical Research',
      focusArea: 'Medical',
      duration: '9h',
      youtubeUrl: 'https://www.youtube.com/watch?v=THsGXnZtZ1Y',
      language: 'English',
      type: 'documentary',
      rating: 4.8,
      certified: true
    },
    {
      id: '13',
      title: 'The Mind, Explained',
      narrator: 'Emma Stone',
      publishedDate: '2019-09-12',
      views: 2540000,
      description: 'Ever wonder what\'s happening inside your head? From dreaming to anxiety disorders, discover how your brain works with this illuminating series.',
      coverImage: '/images/health/mind-explained.jpg',
      category: 'Mental Health',
      focusArea: 'Mental Health',
      duration: '2h 30m',
      youtubeUrl: 'https://www.youtube.com/watch?v=qvUR0BfMNas',
      language: 'English',
      type: 'documentary',
      isFeatured: true,
      rating: 4.6
    },
    {
      id: '14',
      title: 'Fasting',
      narrator: 'P. D. Mangan',
      publishedDate: '2018-01-01',
      views: 987000,
      description: 'A documentary exploring the ancient healing practice of fasting and its newly rediscovered health benefits.',
      coverImage: '/images/health/fasting.jpg',
      category: 'Nutrition',
      focusArea: 'Nutrition',
      duration: '1h 30m',
      youtubeUrl: 'https://www.youtube.com/watch?v=t1b08X-GvRs',
      language: 'English',
      type: 'documentary',
      rating: 4.7
    },
    {
      id: '15',
      title: 'Yoga: The Architecture of Peace',
      narrator: 'Michael O\'Neill',
      publishedDate: '2016-01-01',
      views: 543000,
      description: 'A photographic journey through the world of yoga, featuring portraits of master yogis and insights into the practice.',
      coverImage: '/images/health/yoga-peace.jpg',
      category: 'Yoga & Meditation',
      focusArea: 'Wellness',
      duration: '1h 20m',
      youtubeUrl: 'https://www.youtube.com/watch?v=u73J4qE47Yw',
      language: 'English',
      type: 'documentary',
      isNew: true,
      rating: 4.5
    },
    {
      id: '16',
      title: 'The Last Heart Attack',
      narrator: 'Dr. Sanjay Gupta',
      publishedDate: '2011-08-21',
      views: 765000,
      description: 'CNN\'s Dr. Sanjay Gupta explores whether heart disease, the #1 killer in America, can be stopped.',
      coverImage: '/images/health/last-heart-attack.jpg',
      category: 'Preventive Medicine',
      focusArea: 'Medical',
      duration: '1h',
      youtubeUrl: 'https://www.youtube.com/watch?v=Q7QYQh3HqBQ',
      language: 'English',
      type: 'documentary',
      certified: true,
      rating: 4.8
    },
    {
      id: '17',
      title: 'The Weight of the Nation',
      narrator: 'John Hoffman',
      publishedDate: '2012-05-14',
      views: 1234000,
      description: 'A four-part documentary series examining the obesity epidemic in the United States and its devastating health consequences.',
      coverImage: '/images/health/weight-nation.jpg',
      category: 'Nutrition',
      focusArea: 'Nutrition',
      duration: '4h',
      youtubeUrl: 'https://www.youtube.com/watch?v=7MJnm5X9NN0',
      language: 'English',
      type: 'documentary',
      rating: 4.6
    },
    {
      id: '18',
      title: 'The Alzheimer\'s Project',
      narrator: 'Maria Shriver',
      publishedDate: '2009-05-10',
      views: 876000,
      description: 'A multi-platform series that reveals the cutting-edge research that may delay or even prevent Alzheimer\'s disease.',
      coverImage: '/images/health/alzheimers-project.jpg',
      category: 'Aging & Longevity',
      focusArea: 'Medical',
      duration: '2h 30m',
      youtubeUrl: 'https://www.youtube.com/watch?v=wD3TrR5eF0s',
      language: 'English',
      type: 'documentary',
      certified: true,
      rating: 4.7
    },
  ];

  const handleImageError = (id: string) => {
    setImageErrors(prev => new Set([...prev, id]));
  };

  const isImageMissing = (id: string) => {
    return imageErrors.has(id);
  };

  // Filter by type
  const filteredByType = healthItems.filter(item => 
    selectedType === 'all' || item.type === selectedType
  );

  // Apply other filters
  const filteredItems = filteredByType.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
      || (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase()))
      || (item.narrator && item.narrator.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesFocus = selectedFocus === 'all' || item.focusArea === selectedFocus;
    return matchesSearch && matchesCategory && matchesFocus;
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

  const handleItemClick = (item: HealthItem) => {
    setSelectedItem(item);
  };

  const handlePlay = (item: HealthItem) => {
    if (item.type === 'documentary' && item.youtubeUrl) {
      window.open(item.youtubeUrl, '_blank');
    } else {
      alert(`Opening: ${item.title}`);
    }
  };

  const handleDownload = (item: HealthItem) => {
    alert(`Downloading: ${item.title}`);
  };

  const handleRead = (item: HealthItem) => {
    alert(`Reading: ${item.title}`);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Nutrition': return <Apple className="w-4 h-4" />;
      case 'Exercise Science': return <Dumbbell className="w-4 h-4" />;
      case 'Mental Health': return <Brain className="w-4 h-4" />;
      case 'Medical Research': return <Stethoscope className="w-4 h-4" />;
      case 'Yoga & Meditation': return <Activity className="w-4 h-4" />;
      case 'Holistic Health': return <Heart className="w-4 h-4" />;
      case 'Preventive Medicine': return <Shield className="w-4 h-4" />;
      case 'Aging & Longevity': return <Users className="w-4 h-4" />;
      default: return <Heart className="w-4 h-4" />;
    }
  };

  const StatCard = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) => (
    <div className="bg-white rounded-xl p-4 shadow-lg border border-green-100">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-lg font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <Heart className="w-12 h-12 text-white" fill="currentColor" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Activity className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 mb-4">
           Ubuzima
          </h1>
          <p className="text-l text-gray-600 max-w-3xl mx-auto">
            Menya ubumenyi bwubakiye ku bushakashatsi ku bijyanye n\'ubuzima binyuze mu bitabo byizewe n\'amashusho ahindura ubuzima.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard 
            icon={BookOpen} 
            label="Inyandiko z'ubuzima" 
            value="856" 
            color="bg-gradient-to-r from-green-500 to-emerald-500" 
          />
          <StatCard 
            icon={Film} 
            label="Videwo z'Ubuzima Bwiza" 
            value="420+" 
            color="bg-gradient-to-r from-teal-500 to-cyan-500" 
          />
          <StatCard 
            icon={Heart} 
            label="Ingingo z'Ubuzima" 
            value="15" 
            color="bg-gradient-to-r from-red-500 to-pink-500" 
          />
          <StatCard 
            icon={Users} 
            label="Abahanga mu by'Ubuvuzi" 
            value="128" 
            color="bg-gradient-to-r from-purple-500 to-indigo-500" 
          />
        </div>

        {/* Search & Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-green-100">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Shaka iby'ubuzima, indwara, cyangwa abahanga..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-white/50"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value as any)}
                  className="appearance-none bg-white border border-green-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
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
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-green-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'Ibyiciro byose' : category}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={selectedFocus}
                  onChange={e => setSelectedFocus(e.target.value)}
                  className="appearance-none bg-white border border-green-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                >
                  {focusAreas.map((focus) => (
                    <option key={focus} value={focus}>
                      {focus === 'all' ? 'Icyiciro cyose' : focus}
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
                  className="appearance-none bg-white border border-green-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                >
                  <option value="newest">Gishya mbere</option>
                  <option value="oldest">Gishaje mbere</option>
                  <option value="views">Byarebwe cyane</option>
                  <option value="rating">Byakunzwe cyane</option>
                  <option value="title">Kuva A-Z</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="flex bg-green-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-white shadow-sm text-green-600' : 'text-green-500 hover:text-green-700'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-white shadow-sm text-green-600' : 'text-green-500 hover:text-green-700'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mb-8">
          <div className="border-b border-green-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('books')}
                className={`py-3 px-1 border-b-2 font-medium text-lg transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === 'books'
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                Ibitabo
                <span className="bg-green-100 text-green-700 text-sm font-normal px-2 py-1 rounded-full">
                  {books.length}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('documentaries')}
                className={`py-3 px-1 border-b-2 font-medium text-lg transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === 'documentaries'
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Film className="w-5 h-5" />
                Ibyegeranyo
                <span className="bg-green-100 text-green-700 text-sm font-normal px-2 py-1 rounded-full">
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
          {activeItems.map(item => {
            const missingImage = isImageMissing(item.id);
            
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden border border-green-100 ${
                  viewMode === 'list' ? 'flex' : 'h-full flex flex-col'
                }`}
                onClick={() => handleItemClick(item)}
              >
                {/* Cover Image with Type Badge */}
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-40 flex-shrink-0' : 'h-48'
                }`}>
                  {/* Image or Fallback */}
                  {missingImage ? (
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 flex flex-col items-center justify-center p-4">
                      <ImageOff className="w-12 h-12 text-green-400 mb-2" />
                      <p className="text-sm text-green-800 font-medium text-center line-clamp-2">{item.title}</p>
                      <p className="text-xs text-green-600 mt-1">{item.category}</p>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={item.coverImage}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(item.id)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent z-10" />
                    </div>
                  )}

                  {/* Type Badge */}
                  <div className="absolute top-3 left-3 z-30">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                      item.type === 'book' 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                        : 'bg-gradient-to-r from-teal-500 to-cyan-500'
                    }`}>
                      {item.type === 'book' ? 'Book' : 'Documentary'}
                    </span>
                  </div>

                  {/* Certified/Featured/New Badges */}
                  <div className="absolute top-3 right-3 z-30 space-y-2">
                    {item.certified && (
                      <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        Certified
                      </span>
                    )}
                    {item.isFeatured && (
                      <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                        Featured
                      </span>
                    )}
                    {item.isNew && (
                      <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        New
                      </span>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3 z-30">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                      {getCategoryIcon(item.category)}
                      {item.category.split(' ')[0]}
                    </span>
                  </div>

                  {/* Quick Action Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-emerald-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                    <div className="flex gap-3">
                      {item.type === 'documentary' ? (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlay(item);
                          }}
                          className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-all transform hover:scale-110 shadow-xl"
                        >
                          <Play className="w-6 h-6" fill="white" />
                        </button>
                      ) : (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRead(item);
                          }}
                          className="bg-green-600 text-white p-4 rounded-full hover:bg-green-700 transition-all transform hover:scale-110 shadow-xl"
                        >
                          <BookOpen className="w-6 h-6" />
                        </button>
                      )}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(item);
                        }}
                        className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-110 shadow-xl"
                      >
                        <Download className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content Info */}
                <div className={`p-4 flex-1 flex flex-col ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="mb-3 flex-1">
                    <h3 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <div className="mb-3">
                      <div className="flex items-center text-gray-600 mb-2">
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
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
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

                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(item.publishedDate).getFullYear()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.focusArea === 'Nutrition' ? 'bg-green-100 text-green-700' :
                          item.focusArea === 'Fitness' ? 'bg-blue-100 text-blue-700' :
                          item.focusArea === 'Mental Health' ? 'bg-purple-100 text-purple-700' :
                          item.focusArea === 'Medical' ? 'bg-red-100 text-red-700' :
                          item.focusArea === 'Wellness' ? 'bg-amber-100 text-amber-700' :
                          'bg-teal-100 text-teal-700'
                        }`}>
                          {item.focusArea}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="flex items-center gap-2">
                        {item.type === 'book' ? (
                          <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                            {item.pages}p
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded-full">
                            <Clock className="w-3 h-3" />
                            {item.duration}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                          <Bookmark className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                          <Share2 className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {activeItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Nta by'ubuzima byabonetse</h3>
            <p className="text-gray-600">Gerageza guhindura amashusho yawe cyangwa gukora ushaka kugirango usure urubuga rwacu</p>
          </div>
        )}

        {/* Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                {/* Cover Image */}
                <div className="lg:w-2/5 p-8 bg-gradient-to-br from-green-50 to-emerald-50">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                    {isImageMissing(selectedItem.id) ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-200 flex flex-col items-center justify-center p-8">
                        <ImageOff className="w-24 h-24 text-green-400 mb-4" />
                        <p className="text-xl font-bold text-green-800 text-center">{selectedItem.title}</p>
                        <p className="text-green-600 mt-2">{selectedItem.category}</p>
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <img
                          src={selectedItem.coverImage}
                          alt={selectedItem.title}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(selectedItem.id)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent" />
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg ${
                        selectedItem.type === 'book' 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                          : 'bg-gradient-to-r from-teal-500 to-cyan-500'
                      }`}>
                        {selectedItem.type === 'book' ? 'Health Book' : 'Health Documentary'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Focus Area Badge */}
                  <div className="mt-4 flex justify-center">
                    <div className={`px-4 py-2 rounded-full font-medium ${
                      selectedItem.focusArea === 'Nutrition' ? 'bg-green-100 text-green-700 border border-green-200' :
                      selectedItem.focusArea === 'Fitness' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                      selectedItem.focusArea === 'Mental Health' ? 'bg-purple-100 text-purple-700 border border-purple-200' :
                      selectedItem.focusArea === 'Medical' ? 'bg-red-100 text-red-700 border border-red-200' :
                      selectedItem.focusArea === 'Wellness' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                      'bg-teal-100 text-teal-700 border border-teal-200'
                    }`}>
                      {selectedItem.focusArea} Focus
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:w-3/5 p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full flex items-center gap-1">
                          {getCategoryIcon(selectedItem.category)}
                          {selectedItem.category}
                        </span>
                        {selectedItem.certified && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full flex items-center gap-1">
                            <Shield className="w-3 h-3" />
                            Medical Certified
                          </span>
                        )}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedItem.title}
                      </h2>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center text-gray-600">
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
                        <div className="flex items-center text-gray-500">
                          <Eye className="w-5 h-5 mr-2" />
                          <span>{selectedItem.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors text-2xl p-2 hover:bg-gray-100 rounded-full"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedItem.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 py-4 bg-green-50 rounded-xl p-4">
                      <div>
                        <span className="text-sm text-gray-500">Health Category</span>
                        <p className="font-bold text-lg text-gray-800">{selectedItem.category}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Published</span>
                        <p className="font-medium">{new Date(selectedItem.publishedDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">
                          {selectedItem.type === 'book' ? 'Pages' : 'Duration'}
                        </span>
                        <p className="font-medium">
                          {selectedItem.type === 'book' ? `${selectedItem.pages} pages` : selectedItem.duration}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Content Type</span>
                        <p className="font-medium">{selectedItem.type === 'book' ? 'Educational Book' : 'Documentary Video'}</p>
                      </div>
                    </div>

                    {selectedItem.rating && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Health Rating:</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-amber-400">
                              {i < Math.floor(selectedItem.rating!) ? '★' : '☆'}
                            </span>
                          ))}
                          <span className="ml-2 font-bold text-gray-800">{selectedItem.rating}/5</span>
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
                          className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-3 shadow-lg"
                        >
                          <BookOpen className="w-5 h-5" />
                          Read Health Guide
                        </button>
                      )}
                      <button 
                        onClick={() => handleDownload(selectedItem)}
                        className="flex-1 border border-gray-300 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-3"
                      >
                        <Download className="w-5 h-5" />
                        Download {selectedItem.type === 'book' ? 'PDF' : 'Video'}
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