'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Eye, User, Calendar, Clock, Film, BookOpen, Play, Download, Bookmark, Share2, ChevronDown, Grid, List, ExternalLink, Music, Palette, Theater, Camera, Brush, Film as FilmIcon, Book, Piano, Castle } from 'lucide-react';

interface ArtsItem {
  id: string;
  title: string;
  author?: string;
  narrator?: string;
  publishedDate: string;
  views: number;
  description: string;
  coverImage: string;
  category: string;
  artForm: 'Visual Arts' | 'Music' | 'Literature' | 'Film' | 'Performing Arts' | 'Architecture' | 'Dance' | 'Digital Arts';
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
  era?: string;
}

export default function ArtsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArtForm, setSelectedArtForm] = useState('all');
  const [selectedType, setSelectedType] = useState<'all' | 'book' | 'documentary'>('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedItem, setSelectedItem] = useState<ArtsItem | null>(null);
  const [activeTab, setActiveTab] = useState<'books' | 'documentaries'>('books');

  const categories: string[] = [
    'all', 'Art History', 'Music Theory', 'Film Studies', 'Creative Writing',
    'Art Criticism', 'Art Conservation', 'Music Composition', 'Theater Studies',
    'Photography', 'Dance History', 'Architecture Design', 'Digital Media Arts'
  ];

  const artForms = ['all', 'Visual Arts', 'Music', 'Literature', 'Film', 'Performing Arts', 'Architecture', 'Dance', 'Digital Arts'];

  const artsItems: ArtsItem[] = [
    // Arts Books with custom cover images
    {
      id: '1',
      title: 'The Story of Art',
      author: 'E.H. Gombrich',
      publishedDate: '1950-01-01',
      views: 2850000,
      description: 'The most famous and popular book on art ever published, covering the whole story of art from prehistoric cave paintings to modern art.',
      coverImage: '/images/ubugeni/003.jpg',
      category: 'Art History',
      artForm: 'Visual Arts',
      pages: 688,
      language: 'English',
      isbn: '978-0714832470',
      publisher: 'Phaidon Press',
      type: 'book',
      isFeatured: true,
      rating: 4.8,
      era: 'Renaissance to Modern'
    },
    {
      id: '2',
      title: 'Ways of Seeing',
      author: 'John Berger',
      publishedDate: '1972-01-01',
      views: 1890000,
      description: 'Based on the BBC television series, this groundbreaking book examines how we look at art and how our ways of seeing affect our understanding.',
      coverImage: '/images/arts/ways-of-seeing.jpg',
      category: 'Art Criticism',
      artForm: 'Visual Arts',
      pages: 176,
      language: 'English',
      isbn: '978-0140135152',
      publisher: 'Penguin Books',
      type: 'book',
      rating: 4.7,
      era: 'Modern'
    },
    {
      id: '3',
      title: 'The Creative Habit',
      author: 'Twyla Tharp',
      publishedDate: '2003-09-01',
      views: 1560000,
      description: 'One of the world\'s leading creative artists, choreographer Twyla Tharp, shares her secrets for developing and honing your creative habits.',
      coverImage: '/images/ubugeni/005.avif',
      category: 'Creative Writing',
      artForm: 'Performing Arts',
      pages: 256,
      language: 'English',
      isbn: '978-0743235273',
      publisher: 'Simon & Schuster',
      type: 'book',
      isFeatured: true,
      rating: 4.6,
      era: 'Contemporary'
    },
    {
      id: '4',
      title: 'The Film Experience',
      author: 'Timothy Corrigan',
      publishedDate: '2004-01-01',
      views: 890000,
      description: 'A comprehensive introduction to film that recognizes students as movie fans and helps them understand the art form\'s full scope.',
      coverImage: '/images/ubugeni/004.jpg',
      category: 'Film Studies',
      artForm: 'Film',
      pages: 544,
      language: 'English',
      isbn: '978-1457663544',
      publisher: 'Bedford/St. Martin\'s',
      type: 'book',
      rating: 4.5,
      era: 'Modern Cinema'
    },
    {
      id: '5',
      title: 'The Rest is Noise',
      author: 'Alex Ross',
      publishedDate: '2007-10-16',
      views: 1234000,
      description: 'A sweeping musical history that tells the story of the twentieth century through its composers and their works.',
      coverImage: '/images/ubugeni/002.jpg',
      category: 'Music Theory',
      artForm: 'Music',
      pages: 640,
      language: 'English',
      isbn: '978-0312427719',
      publisher: 'Farrar, Straus and Giroux',
      type: 'book',
      rating: 4.7,
      era: '20th Century'
    },
    {
      id: '6',
      title: 'In Praise of Shadows',
      author: 'Jun\'ichirō Tanizaki',
      publishedDate: '1933-01-01',
      views: 765000,
      description: 'A classic essay on Japanese aesthetics that explores the beauty of shadows and darkness in traditional Japanese architecture and design.',
      coverImage: '/images/arts/in-praise-of-shadows.jpg',
      category: 'Architecture Design',
      artForm: 'Architecture',
      pages: 80,
      language: 'English',
      isbn: '978-0906143052',
      publisher: 'Vintage',
      type: 'book',
      isNew: true,
      rating: 4.6,
      era: 'Traditional'
    },
    {
      id: '7',
      title: 'Bird by Bird',
      author: 'Anne Lamott',
      publishedDate: '1994-01-01',
      views: 1987000,
      description: 'A step-by-step guide on how to write and how to manage the writer\'s life, filled with honest advice and generous encouragement.',
      coverImage: '/images/arts/bird-by-bird.jpg',
      category: 'Creative Writing',
      artForm: 'Literature',
      pages: 272,
      language: 'English',
      isbn: '978-0385480017',
      publisher: 'Anchor',
      type: 'book',
      rating: 4.7,
      era: 'Contemporary'
    },
    {
      id: '8',
      title: 'The Architecture of Happiness',
      author: 'Alain de Botton',
      publishedDate: '2006-09-01',
      views: 987000,
      description: 'A deeply moving exploration of the intimate relationship between our buildings and our well-being.',
      coverImage: '/images/ubugeni/001.webp',
      category: 'Architecture Design',
      artForm: 'Architecture',
      pages: 280,
      language: 'English',
      isbn: '978-0375424435',
      publisher: 'Pantheon',
      type: 'book',
      isNew: true,
      rating: 4.5,
      era: 'Contemporary'
    },

    // Arts Documentaries with custom cover images
    {
      id: '9',
      title: 'The Power of Art',
      narrator: 'Simon Schama',
      publishedDate: '2006-10-01',
      views: 3450000,
      description: 'A landmark series that shows how great works of art can reveal the passions and forces that shaped the lives of the artists and their times.',
      coverImage: '/images/arts/power-of-art.jpg',
      category: 'Art History',
      artForm: 'Visual Arts',
      duration: '8h',
      youtubeUrl: 'https://www.youtube.com/watch?v=U_m4Z3xU8F8',
      language: 'English',
      type: 'documentary',
      isFeatured: true,
      rating: 4.9,
      era: 'Renaissance to Modern'
    },
    {
      id: '10',
      title: 'The Great Contemporary Art Bubble',
      narrator: 'Ben Lewis',
      publishedDate: '2009-01-01',
      views: 876000,
      description: 'An investigation into the contemporary art market and how it became the biggest unregulated market in the world.',
      coverImage: '/images/arts/art-bubble.jpg',
      category: 'Art Criticism',
      artForm: 'Visual Arts',
      duration: '1h 30m',
      youtubeUrl: 'https://www.youtube.com/watch?v=SIw9pLm_otg',
      language: 'English',
      type: 'documentary',
      rating: 4.6,
      era: 'Contemporary'
    },
    {
      id: '11',
      title: 'Jiro Dreams of Sushi',
      narrator: 'David Gelb',
      publishedDate: '2011-01-01',
      views: 4567000,
      description: 'A documentary on 85-year-old sushi master Jiro Ono and his relationship with his son and heir-apparent, Yoshikazu.',
      coverImage: '/images/arts/jiro-sushi.jpg',
      category: 'Art Criticism',
      artForm: 'Visual Arts',
      duration: '1h 21m',
      youtubeUrl: 'https://www.youtube.com/watch?v=M-aGPniFvS0',
      language: 'English',
      type: 'documentary',
      rating: 4.8,
      era: 'Contemporary'
    },
    {
      id: '12',
      title: '20 Feet from Stardom',
      narrator: 'Morgan Neville',
      publishedDate: '2013-01-01',
      views: 1234000,
      description: 'The untold true story of the backup singers behind some of the greatest musical legends of the 21st century.',
      coverImage: '/images/arts/20-feet-stardom.jpg',
      category: 'Music Theory',
      artForm: 'Music',
      duration: '1h 31m',
      youtubeUrl: 'https://www.youtube.com/watch?v=tWyU5FZWWls',
      language: 'English',
      type: 'documentary',
      isFeatured: true,
      rating: 4.7,
      era: '20th-21st Century'
    },
    {
      id: '13',
      title: 'Abstract: The Art of Design',
      narrator: 'Various',
      publishedDate: '2017-02-10',
      views: 2540000,
      description: 'A Netflix original series that takes you inside the minds of the most innovative designers in a variety of disciplines.',
      coverImage: '/images/arts/abstract-design.jpg',
      category: 'Digital Media Arts',
      artForm: 'Digital Arts',
      duration: '8h',
      youtubeUrl: 'https://www.youtube.com/watch?v=YD1yE1X4HUs',
      language: 'English',
      type: 'documentary',
      rating: 4.8,
      era: 'Contemporary'
    },
    {
      id: '14',
      title: 'The September Issue',
      narrator: 'R.J. Cutler',
      publishedDate: '2009-01-01',
      views: 987000,
      description: 'A documentary that follows Vogue editor-in-chief Anna Wintour and her staff during the production of the magazine\'s 2007 September issue.',
      coverImage: '/images/arts/september-issue.jpg',
      category: 'Art Criticism',
      artForm: 'Visual Arts',
      duration: '1h 30m',
      youtubeUrl: 'https://www.youtube.com/watch?v=6a4Rq2QwjQM',
      language: 'English',
      type: 'documentary',
      rating: 4.6,
      era: 'Contemporary'
    },
    {
      id: '15',
      title: 'Pina',
      narrator: 'Wim Wenders',
      publishedDate: '2011-01-01',
      views: 654000,
      description: 'A documentary about the work of choreographer Pina Bausch, featuring her dance company and some of her most famous creations.',
      coverImage: '/images/arts/pina.jpg',
      category: 'Dance History',
      artForm: 'Dance',
      duration: '1h 46m',
      youtubeUrl: 'https://www.youtube.com/watch?v=BO4KQ09i5cs',
      language: 'English',
      type: 'documentary',
      isNew: true,
      rating: 4.7,
      era: 'Contemporary'
    },
    {
      id: '16',
      title: 'The World According to IKEA',
      narrator: 'Various',
      publishedDate: '2012-01-01',
      views: 543000,
      description: 'A documentary exploring the global phenomenon of IKEA and its impact on design, consumption, and modern living.',
      coverImage: '/images/arts/ikea-world.jpg',
      category: 'Architecture Design',
      artForm: 'Architecture',
      duration: '1h',
      youtubeUrl: 'https://www.youtube.com/watch?v=O4pcKxjJvB4',
      language: 'English',
      type: 'documentary',
      rating: 4.5,
      era: 'Contemporary'
    },
    {
      id: '17',
      title: 'The Great British Bake Off: Best of Baking',
      narrator: 'Mary Berry',
      publishedDate: '2018-01-01',
      views: 3567000,
      description: 'A compilation of the best baking moments from the beloved British baking competition, showcasing culinary artistry.',
      coverImage: '/images/arts/bake-off.jpg',
      category: 'Art Criticism',
      artForm: 'Visual Arts',
      duration: '2h',
      youtubeUrl: 'https://www.youtube.com/watch?v=vK27CunqBL4',
      language: 'English',
      type: 'documentary',
      rating: 4.8,
      era: 'Contemporary'
    },
    {
      id: '18',
      title: 'A Ballerina\'s Tale',
      narrator: 'Nelson George',
      publishedDate: '2015-01-01',
      views: 876000,
      description: 'The story of Misty Copeland, the first African American principal dancer with the prestigious American Ballet Theatre.',
      coverImage: '/images/arts/ballerinas-tale.jpg',
      category: 'Dance History',
      artForm: 'Dance',
      duration: '1h 24m',
      youtubeUrl: 'https://www.youtube.com/watch?v=3K4e4JjS5Io',
      language: 'English',
      type: 'documentary',
      isNew: true,
      rating: 4.7,
      era: 'Contemporary'
    },
  ];

  // Filter by type
  const filteredByType = artsItems.filter(item => 
    selectedType === 'all' || item.type === selectedType
  );

  // Apply other filters
  const filteredItems = filteredByType.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
      || (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase()))
      || (item.narrator && item.narrator.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesArtForm = selectedArtForm === 'all' || item.artForm === selectedArtForm;
    return matchesSearch && matchesCategory && matchesArtForm;
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

  const handleItemClick = (item: ArtsItem) => {
    setSelectedItem(item);
  };

  const handlePlay = (item: ArtsItem) => {
    if (item.type === 'documentary' && item.youtubeUrl) {
      window.open(item.youtubeUrl, '_blank');
    } else {
      alert(`Opening: ${item.title}`);
    }
  };

  const handleDownload = (item: ArtsItem) => {
    alert(`Downloading: ${item.title}`);
  };

  const handleRead = (item: ArtsItem) => {
    alert(`Reading: ${item.title}`);
  };

  const getArtFormIcon = (artForm: string) => {
    switch (artForm) {
      case 'Visual Arts': return <Palette className="w-4 h-4" />;
      case 'Music': return <Music className="w-4 h-4" />;
      case 'Literature': return <Book className="w-4 h-4" />;
      case 'Film': return <FilmIcon className="w-4 h-4" />;
      case 'Performing Arts': return <Theater className="w-4 h-4" />;
      case 'Architecture': return <Castle className="w-4 h-4" />;
      case 'Dance': return <Piano className="w-4 h-4" />;
      case 'Digital Arts': return <Camera className="w-4 h-4" />;
      default: return <Brush className="w-4 h-4" />;
    }
  };

  const getArtFormColor = (artForm: string) => {
    switch (artForm) {
      case 'Visual Arts': return 'bg-red-100 text-red-700';
      case 'Music': return 'bg-blue-100 text-blue-700';
      case 'Literature': return 'bg-amber-100 text-amber-700';
      case 'Film': return 'bg-purple-100 text-purple-700';
      case 'Performing Arts': return 'bg-green-100 text-green-700';
      case 'Architecture': return 'bg-stone-100 text-stone-700';
      case 'Dance': return 'bg-pink-100 text-pink-700';
      case 'Digital Arts': return 'bg-indigo-100 text-indigo-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const StatCard = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) => (
    <div className="bg-white rounded-xl p-4 shadow-lg border border-rose-100">
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Palette className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Music className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-black mb-4">
            Ubugeni
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shakisha isi yo guhanga udushya ukoresheje ibitabo byubuhanga hamwe na documentaire zubaka
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard 
            icon={BookOpen} 
            label="Art Publications" 
            value="924" 
            color="bg-gradient-to-r from-rose-500 to-pink-500" 
          />
          <StatCard 
            icon={Film} 
            label="Art Documentaries" 
            value="386+" 
            color="bg-gradient-to-r from-orange-500 to-amber-500" 
          />
          <StatCard 
            icon={Palette} 
            label="Art Forms" 
            value="8" 
            color="bg-gradient-to-r from-purple-500 to-indigo-500" 
          />
          <StatCard 
            icon={Theater} 
            label="Art Movements" 
            value="24" 
            color="bg-gradient-to-r from-green-500 to-emerald-500" 
          />
        </div>

        {/* Search & Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-rose-100">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search art movements, artists, techniques, or styles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 bg-white/50"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value as any)}
                  className="appearance-none bg-white border border-rose-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200"
                >
                  <option value="all">All Content</option>
                  <option value="book">Books Only</option>
                  <option value="documentary">Documentaries Only</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-rose-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={selectedArtForm}
                  onChange={e => setSelectedArtForm(e.target.value)}
                  className="appearance-none bg-white border border-rose-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200"
                >
                  {artForms.map((artForm) => (
                    <option key={artForm} value={artForm}>
                      {artForm === 'all' ? 'All Art Forms' : artForm}
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
                  className="appearance-none bg-white border border-rose-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Classics First</option>
                  <option value="views">Most Viewed</option>
                  <option value="rating">Highest Rated</option>
                  <option value="title">Title A-Z</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="flex bg-rose-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-white shadow-sm text-rose-600' : 'text-rose-500 hover:text-rose-700'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-white shadow-sm text-rose-600' : 'text-rose-500 hover:text-rose-700'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mb-8">
          <div className="border-b border-rose-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('books')}
                className={`py-3 px-1 border-b-2 font-medium text-lg transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === 'books'
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                Ibitabo
                <span className="bg-rose-100 text-rose-700 text-sm font-normal px-2 py-1 rounded-full">
                  {books.length}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('documentaries')}
                className={`py-3 px-1 border-b-2 font-medium text-lg transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === 'documentaries'
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Film className="w-5 h-5" />
                Documentaries
                <span className="bg-rose-100 text-rose-700 text-sm font-normal px-2 py-1 rounded-full">
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
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden border border-rose-100 ${
                viewMode === 'list' ? 'flex' : 'h-full flex flex-col'
              }`}
              onClick={() => handleItemClick(item)}
            >
              {/* Cover Image with Type Badge - Using Image component */}
              <div className={`relative overflow-hidden bg-gradient-to-br from-rose-50 to-orange-100 ${
                viewMode === 'list' ? 'w-40 flex-shrink-0' : 'h-48'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent z-10" />
                
                {/* Art Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full grid grid-cols-4 gap-4">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="border border-rose-300 rounded-full"></div>
                    ))}
                  </div>
                </div>

                {/* Main Cover Image */}
                <div className="relative w-full h-full z-20">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                {/* Type Badge */}
                <div className="absolute top-3 left-3 z-30">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                    item.type === 'book' 
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500' 
                      : 'bg-gradient-to-r from-orange-500 to-amber-500'
                  }`}>
                    {item.type === 'book' ? 'Book' : 'Documentary'}
                  </span>
                </div>

                {/* Featured/New Badges */}
                <div className="absolute top-3 right-3 z-30 space-y-2">
                  {item.isFeatured && (
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                       Masterpiece
                    </span>
                  )}
                  {item.isNew && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                       Contemporary
                    </span>
                  )}
                  {item.era && (
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                       {item.era.split(' ')[0]}
                    </span>
                  )}
                </div>

                {/* Art Form Badge */}
                <div className="absolute bottom-3 left-3 z-30">
                  <span className={`px-3 py-1 backdrop-blur-sm text-xs font-bold rounded-full shadow-lg flex items-center gap-1 ${getArtFormColor(item.artForm)}`}>
                    {getArtFormIcon(item.artForm)}
                    {item.artForm}
                  </span>
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/80 to-orange-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
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
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2 group-hover:text-rose-600 transition-colors">
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
                      <span className="px-2 py-1 bg-rose-50 text-rose-700 text-xs rounded-full">
                        {item.category.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center gap-2">
                      {item.type === 'book' ? (
                        <span className="bg-pink-50 text-pink-700 text-xs px-2 py-1 rounded-full">
                          📄 {item.pages}p
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full">
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
          ))}
        </div>

        {/* Empty State */}
        {activeItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-r from-rose-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-rose-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No art content found</h3>
            <p className="text-gray-600">Try adjusting your search or filters to explore our art collection</p>
          </div>
        )}

        {/* Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                {/* Cover Image */}
                <div className="lg:w-2/5 p-8 bg-gradient-to-br from-rose-50 to-orange-50">
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
                          ? 'bg-gradient-to-r from-rose-500 to-pink-500' 
                          : 'bg-gradient-to-r from-orange-500 to-amber-500'
                      }`}>
                        {selectedItem.type === 'book' ? '📖 Art Book' : '🎬 Art Documentary'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Era Badge */}
                  {selectedItem.era && (
                    <div className="mt-4 flex justify-center">
                      <div className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full font-medium border border-blue-200">
                        {selectedItem.era}
                      </div>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="lg:w-3/5 p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 text-sm font-bold rounded-full flex items-center gap-1 ${getArtFormColor(selectedItem.artForm)}`}>
                          {getArtFormIcon(selectedItem.artForm)}
                          {selectedItem.artForm}
                        </span>
                        <span className="px-3 py-1 bg-rose-100 text-rose-700 text-sm font-bold rounded-full">
                          {selectedItem.category}
                        </span>
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

                    <div className="grid grid-cols-2 gap-4 py-4 bg-rose-50 rounded-xl p-4">
                      <div>
                        <span className="text-sm text-gray-500">Art Form</span>
                        <p className="font-bold text-lg text-gray-800">{selectedItem.artForm}</p>
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
                        <span className="text-sm text-gray-500">Language</span>
                        <p className="font-medium">{selectedItem.language}</p>
                      </div>
                    </div>

                    {selectedItem.rating && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Artistic Rating:</span>
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
                          Watch Art Documentary
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleRead(selectedItem)}
                          className="flex-1 bg-gradient-to-r from-rose-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-rose-700 hover:to-pink-700 transition-all flex items-center justify-center gap-3 shadow-lg"
                        >
                          <BookOpen className="w-5 h-5" />
                          Read Art Book
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