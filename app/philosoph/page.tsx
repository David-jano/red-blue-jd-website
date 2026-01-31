'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Eye, User, Calendar, Clock, Film, BookOpen, Play, Download, Bookmark, Share2, ChevronDown, Grid, List, ExternalLink, Brain, Lightbulb, Scale, Target, Zap, Users, Globe, Book } from 'lucide-react';

interface PhilosophyItem {
  id: string;
  title: string;
  author?: string;
  narrator?: string;
  publishedDate: string;
  views: number;
  description: string;
  coverImage: string;
  branch: string;
  era: 'Ancient' | 'Medieval' | 'Modern' | 'Contemporary' | 'Enlightenment' | 'Existential';
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
  philosophicalSchool?: string;
}

export default function PhilosophyPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [selectedEra, setSelectedEra] = useState('all');
  const [selectedType, setSelectedType] = useState<'all' | 'book' | 'documentary'>('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedItem, setSelectedItem] = useState<PhilosophyItem | null>(null);
  const [activeTab, setActiveTab] = useState<'books' | 'documentaries'>('books');

  const branches: string[] = [
    'all', 'Metaphysics', 'Ethics', 'Epistemology', 'Logic', 
    'Political Philosophy', 'Aesthetics', 'Philosophy of Mind',
    'Philosophy of Science', 'Existentialism', 'Stoicism', 
    'Eastern Philosophy', 'Analytic Philosophy', 'Continental Philosophy'
  ];

  const eras = ['all', 'Ancient', 'Medieval', 'Enlightenment', 'Modern', 'Contemporary', 'Existential'];

  const philosophyItems: PhilosophyItem[] = [
    // Philosophy Books
    {
      id: '1',
      title: 'Meditations',
      author: 'Marcus Aurelius',
      publishedDate: '180-01-01',
      views: 3850000,
      description: 'A series of personal writings by the Roman Emperor Marcus Aurelius, recording his private notes and stoic philosophy.',
      coverImage: '/images/philosoph/003.jpg',
      branch: 'Stoicism',
      era: 'Ancient',
      pages: 256,
      language: 'English',
      isbn: '978-0140449334',
      publisher: 'Penguin Classics',
      type: 'book',
      isFeatured: true,
      rating: 4.8,
      philosophicalSchool: 'Stoicism'
    },
    {
      id: '2',
      title: 'Thus Spoke Zarathustra',
      author: 'Friedrich Nietzsche',
      publishedDate: '1883-01-01',
      views: 2890000,
      description: 'A philosophical novel that presents the philosophy of the Übermensch (Overman) and critiques traditional morality.',
      coverImage: '/images/philosoph/001.jpg',
      branch: 'Existentialism',
      era: 'Modern',
      pages: 352,
      language: 'English',
      isbn: '978-0140441185',
      publisher: 'Penguin Classics',
      type: 'book',
      rating: 4.7,
      philosophicalSchool: 'Existentialism'
    },
    {
      id: '3',
      title: 'Critique of Pure Reason',
      author: 'Immanuel Kant',
      publishedDate: '1781-01-01',
      views: 1560000,
      description: 'Kant\'s most influential work that revolutionized Western philosophy by examining the foundations and limits of human knowledge.',
      coverImage: '/images/philosoph/004.jpg',
      branch: 'Epistemology',
      era: 'Enlightenment',
      pages: 800,
      language: 'English',
      isbn: '978-0521657297',
      publisher: 'Cambridge University Press',
      type: 'book',
      isFeatured: true,
      rating: 4.6,
      philosophicalSchool: 'Transcendental Idealism'
    },
    {
      id: '4',
      title: 'Being and Time',
      author: 'Martin Heidegger',
      publishedDate: '1927-01-01',
      views: 890000,
      description: 'Heidegger\'s magnum opus that fundamentally changed the course of 20th-century philosophy, focusing on the question of Being.',
      coverImage: '/images/philosoph/005.jpg',
      branch: 'Metaphysics',
      era: 'Contemporary',
      pages: 589,
      language: 'English',
      isbn: '978-0631197703',
      publisher: 'Blackwell',
      type: 'book',
      rating: 4.5,
      philosophicalSchool: 'Phenomenology'
    },
    {
      id: '5',
      title: 'The Republic',
      author: 'Plato',
      publishedDate: '380-01-01',
      views: 4567000,
      description: 'A Socratic dialogue concerning justice, the order and character of the just city-state, and the just man.',
      coverImage: '/images/philosoph/007.jpg',
      branch: 'Political Philosophy',
      era: 'Ancient',
      pages: 416,
      language: 'English',
      isbn: '978-0140449143',
      publisher: 'Penguin Classics',
      type: 'book',
      rating: 4.7,
      philosophicalSchool: 'Platonism'
    },
    {
      id: '6',
      title: 'Tao Te Ching',
      author: 'Laozi',
      publishedDate: '400-01-01',
      views: 2345000,
      description: 'A fundamental text for both philosophical and religious Taoism, advocating humility, compassion, and simplicity.',
      coverImage: '/images/philosoph/008.jpeg',
      branch: 'Eastern Philosophy',
      era: 'Ancient',
      pages: 160,
      language: 'English',
      isbn: '978-0140441314',
      publisher: 'Penguin Classics',
      type: 'book',
      isNew: true,
      rating: 4.8,
      philosophicalSchool: 'Daoism'
    },
    {
      id: '7',
      title: 'The Second Sex',
      author: 'Simone de Beauvoir',
      publishedDate: '1949-01-01',
      views: 1987000,
      description: 'A foundational work of feminist philosophy that analyzes women\'s oppression and argues for women\'s liberation.',
      coverImage: '/images/philosoph/009.avif',
      branch: 'Ethics',
      era: 'Contemporary',
      pages: 832,
      language: 'English',
      isbn: '978-0307277787',
      publisher: 'Vintage',
      type: 'book',
      rating: 4.7,
      philosophicalSchool: 'Existential Feminism'
    },
    {
      id: '8',
      title: 'Philosophical Investigations',
      author: 'Ludwig Wittgenstein',
      publishedDate: '1953-01-01',
      views: 987000,
      description: 'Wittgenstein\'s later work that revolutionized philosophy of language and mind, introducing the concept of language games.',
      coverImage: '/images/philosoph/002.jpg',
      branch: 'Philosophy of Mind',
      era: 'Contemporary',
      pages: 250,
      language: 'English',
      isbn: '978-0631231271',
      publisher: 'Wiley-Blackwell',
      type: 'book',
      isNew: true,
      rating: 4.6,
      philosophicalSchool: 'Analytic Philosophy'
    },

    // Philosophy Documentaries
    {
      id: '9',
      title: 'The Great Philosophers',
      narrator: 'Bryan Magee',
      publishedDate: '1987-01-01',
      views: 2450000,
      description: 'A landmark series that explores the ideas and influence of history\'s greatest philosophers through interviews and discussions.',
      coverImage: '/images/philosoph/002.jpg',
      branch: 'Epistemology',
      era: 'Contemporary',
      duration: '15h',
      youtubeUrl: 'https://www.youtube.com/watch?v=nFf6JpBqj6k',
      language: 'English',
      type: 'documentary',
      isFeatured: true,
      rating: 4.9,
      philosophicalSchool: 'Various'
    },
    {
      id: '10',
      title: 'Examined Life',
      narrator: 'Astra Taylor',
      publishedDate: '2008-01-01',
      views: 876000,
      description: 'A documentary featuring eight influential modern philosophers walking around New York and other cities, discussing their ideas.',
      coverImage: '/images/philosophy/examined-life.jpg',
      branch: 'Ethics',
      era: 'Contemporary',
      duration: '1h 28m',
      youtubeUrl: 'https://www.youtube.com/watch?v=4V_8K3Gzq2M',
      language: 'English',
      type: 'documentary',
      rating: 4.6,
      philosophicalSchool: 'Various'
    },
    {
      id: '11',
      title: 'Philosophy: A Guide to Happiness',
      narrator: 'Alain de Botton',
      publishedDate: '2000-01-01',
      views: 1567000,
      description: 'A six-part television series that explores how the ideas of six great philosophers can guide us to happier lives.',
      coverImage: '/images/philosophy/guide-happiness.jpg',
      branch: 'Ethics',
      era: 'Contemporary',
      duration: '3h',
      youtubeUrl: 'https://www.youtube.com/watch?v=1v-1Dn1b6O0',
      language: 'English',
      type: 'documentary',
      rating: 4.7,
      philosophicalSchool: 'Applied Philosophy'
    },
    {
      id: '12',
      title: 'The Matrix and Philosophy',
      narrator: 'Various',
      publishedDate: '2003-01-01',
      views: 987000,
      description: 'Explores the philosophical themes in The Matrix films, including reality, consciousness, and free will.',
      coverImage: '/images/philosophy/matrix-philosophy.jpg',
      branch: 'Metaphysics',
      era: 'Contemporary',
      duration: '1h 30m',
      youtubeUrl: 'https://www.youtube.com/watch?v=hZq-6pCn6l0',
      language: 'English',
      type: 'documentary',
      isFeatured: true,
      rating: 4.5,
      philosophicalSchool: 'Philosophy of Mind'
    },
    {
      id: '13',
      title: 'Socrates: The Man Who Dared to Question',
      narrator: 'Bettany Hughes',
      publishedDate: '2010-01-01',
      views: 543000,
      description: 'A documentary exploring the life and death of Socrates, the father of Western philosophy.',
      coverImage: '/images/philosophy/socrates.jpg',
      branch: 'Ethics',
      era: 'Ancient',
      duration: '1h',
      youtubeUrl: 'https://www.youtube.com/watch?v=CyIKayNXTPY',
      language: 'English',
      type: 'documentary',
      rating: 4.6,
      philosophicalSchool: 'Socratic Method'
    },
    {
      id: '14',
      title: 'Human, All Too Human',
      narrator: 'Simon Callow',
      publishedDate: '1999-01-01',
      views: 765000,
      description: 'A three-part series exploring the lives and ideas of Friedrich Nietzsche, Martin Heidegger, and Jean-Paul Sartre.',
      coverImage: '/images/philosophy/human-all-too-human.jpg',
      branch: 'Existentialism',
      era: 'Existential',
      duration: '3h',
      youtubeUrl: 'https://www.youtube.com/watch?v=Kz8K9B5A1f0',
      language: 'English',
      type: 'documentary',
      rating: 4.8,
      philosophicalSchool: 'Existentialism'
    },
    {
      id: '15',
      title: 'The Philosophy of the Buddha',
      narrator: 'Richard Gombrich',
      publishedDate: '2005-01-01',
      views: 654000,
      description: 'An exploration of Buddhist philosophy, its core teachings, and its relevance to modern life.',
      coverImage: '/images/philosophy/buddha-philosophy.jpg',
      branch: 'Eastern Philosophy',
      era: 'Ancient',
      duration: '1h 30m',
      youtubeUrl: 'https://www.youtube.com/watch?v=tilBs32zN7I',
      language: 'English',
      type: 'documentary',
      isNew: true,
      rating: 4.7,
      philosophicalSchool: 'Buddhism'
    },
    {
      id: '16',
      title: 'The School of Life: Philosophical Concepts',
      narrator: 'Alain de Botton',
      publishedDate: '2014-01-01',
      views: 3567000,
      description: 'An educational series that explains key philosophical concepts and how they apply to everyday life.',
      coverImage: '/images/philosophy/school-life.jpg',
      branch: 'Ethics',
      era: 'Contemporary',
      duration: '5h',
      youtubeUrl: 'https://www.youtube.com/watch?v=mYfJxlgR2jw',
      language: 'English',
      type: 'documentary',
      rating: 4.8,
      philosophicalSchool: 'Applied Philosophy'
    },
    {
      id: '17',
      title: 'The Philosophy of Science',
      narrator: 'Karl Popper',
      publishedDate: '1963-01-01',
      views: 876000,
      description: 'A series exploring the nature of scientific knowledge, the scientific method, and the philosophy behind scientific discovery.',
      coverImage: '/images/philosophy/philosophy-science.jpg',
      branch: 'Philosophy of Science',
      era: 'Contemporary',
      duration: '2h',
      youtubeUrl: 'https://www.youtube.com/watch?v=-X8Xfl0JdTQ',
      language: 'English',
      type: 'documentary',
      rating: 4.6,
      philosophicalSchool: 'Critical Rationalism'
    },
    {
      id: '18',
      title: 'Stoicism Today',
      narrator: 'Massimo Pigliucci',
      publishedDate: '2018-01-01',
      views: 1234000,
      description: 'A documentary exploring how ancient Stoic philosophy is being applied to modern life and psychology.',
      coverImage: '/images/philosophy/stoicism-today.jpg',
      branch: 'Stoicism',
      era: 'Contemporary',
      duration: '1h 15m',
      youtubeUrl: 'https://www.youtube.com/watch?v=R9OCA6UFE-0',
      language: 'English',
      type: 'documentary',
      isNew: true,
      rating: 4.7,
      philosophicalSchool: 'Stoicism'
    },
  ];

  // Filter by type
  const filteredByType = philosophyItems.filter(item => 
    selectedType === 'all' || item.type === selectedType
  );

  // Apply other filters
  const filteredItems = filteredByType.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
      || (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase()))
      || (item.narrator && item.narrator.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesBranch = selectedBranch === 'all' || item.branch === selectedBranch;
    const matchesEra = selectedEra === 'all' || item.era === selectedEra;
    return matchesSearch && matchesBranch && matchesEra;
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

  const handleItemClick = (item: PhilosophyItem) => {
    setSelectedItem(item);
  };

  const handlePlay = (item: PhilosophyItem) => {
    if (item.type === 'documentary' && item.youtubeUrl) {
      window.open(item.youtubeUrl, '_blank');
    } else {
      alert(`Opening: ${item.title}`);
    }
  };

  const handleDownload = (item: PhilosophyItem) => {
    alert(`Downloading: ${item.title}`);
  };

  const handleRead = (item: PhilosophyItem) => {
    alert(`Reading: ${item.title}`);
  };

  const getBranchIcon = (branch: string) => {
    switch (branch) {
      case 'Metaphysics': return <Brain className="w-4 h-4" />;
      case 'Ethics': return <Scale className="w-4 h-4" />;
      case 'Epistemology': return <Lightbulb className="w-4 h-4" />;
      case 'Logic': return <Target className="w-4 h-4" />;
      case 'Political Philosophy': return <Users className="w-4 h-4" />;
      case 'Aesthetics': return <Eye className="w-4 h-4" />;
      case 'Philosophy of Mind': return <Zap className="w-4 h-4" />;
      case 'Existentialism': return <User className="w-4 h-4" />;
      case 'Stoicism': return <Scale className="w-4 h-4" />;
      case 'Eastern Philosophy': return <Globe className="w-4 h-4" />;
      default: return <Book className="w-4 h-4" />;
    }
  };

  const getBranchColor = (branch: string) => {
    switch (branch) {
      case 'Metaphysics': return 'bg-indigo-100 text-indigo-700';
      case 'Ethics': return 'bg-emerald-100 text-emerald-700';
      case 'Epistemology': return 'bg-amber-100 text-amber-700';
      case 'Logic': return 'bg-blue-100 text-blue-700';
      case 'Political Philosophy': return 'bg-rose-100 text-rose-700';
      case 'Aesthetics': return 'bg-purple-100 text-purple-700';
      case 'Philosophy of Mind': return 'bg-cyan-100 text-cyan-700';
      case 'Existentialism': return 'bg-gray-100 text-gray-700';
      case 'Stoicism': return 'bg-slate-100 text-slate-700';
      case 'Eastern Philosophy': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getEraColor = (era: string) => {
    switch (era) {
      case 'Ancient': return 'bg-stone-100 text-stone-700';
      case 'Medieval': return 'bg-amber-100 text-amber-700';
      case 'Enlightenment': return 'bg-yellow-100 text-yellow-700';
      case 'Modern': return 'bg-blue-100 text-blue-700';
      case 'Contemporary': return 'bg-green-100 text-green-700';
      case 'Existential': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const StatCard = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) => (
    <div className="bg-white rounded-xl p-4 shadow-lg border border-indigo-100">
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-gray-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-black mb-4">
            Filozofiya
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore timeless wisdom through foundational texts and profound philosophical documentaries
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard 
            icon={BookOpen} 
            label="Philosophical Texts" 
            value="681" 
            color="bg-gradient-to-r from-indigo-500 to-purple-500" 
          />
          <StatCard 
            icon={Film} 
            label="Philosophical Studies" 
            value="294+" 
            color="bg-gradient-to-r from-gray-500 to-slate-500" 
          />
          <StatCard 
            icon={Brain} 
            label="Philosophical Branches" 
            value="14" 
            color="bg-gradient-to-r from-blue-500 to-cyan-500" 
          />
          <StatCard 
            icon={Users} 
            label="Philosophers" 
            value="127" 
            color="bg-gradient-to-r from-emerald-500 to-green-500" 
          />
        </div>

        {/* Search & Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-indigo-100">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search philosophical concepts, thinkers, or schools of thought..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white/50"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value as any)}
                  className="appearance-none bg-white border border-indigo-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
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
                  value={selectedBranch}
                  onChange={e => setSelectedBranch(e.target.value)}
                  className="appearance-none bg-white border border-indigo-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                >
                  {branches.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch === 'all' ? 'All Branches' : branch}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={selectedEra}
                  onChange={e => setSelectedEra(e.target.value)}
                  className="appearance-none bg-white border border-indigo-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                >
                  {eras.map((era) => (
                    <option key={era} value={era}>
                      {era === 'all' ? 'All Eras' : era}
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
                  className="appearance-none bg-white border border-indigo-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Classics First</option>
                  <option value="views">Most Studied</option>
                  <option value="rating">Highest Rated</option>
                  <option value="title">Title A-Z</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="flex bg-indigo-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-white shadow-sm text-indigo-600' : 'text-indigo-500 hover:text-indigo-700'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-white shadow-sm text-indigo-600' : 'text-indigo-500 hover:text-indigo-700'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mb-8">
          <div className="border-b border-indigo-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('books')}
                className={`py-3 px-1 border-b-2 font-medium text-lg transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === 'books'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                Ibitabo
                <span className="bg-indigo-100 text-indigo-700 text-sm font-normal px-2 py-1 rounded-full">
                  {books.length}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('documentaries')}
                className={`py-3 px-1 border-b-2 font-medium text-lg transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === 'documentaries'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Film className="w-5 h-5" />
                Philosophy <span className="bg-indigo-100 text-indigo-700 text-sm font-normal px-2 py-1 rounded-full">
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
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden border border-indigo-100 ${
                viewMode === 'list' ? 'flex' : 'h-full flex flex-col'
              }`}
              onClick={() => handleItemClick(item)}
            >
              {/* Cover Image with Type Badge */}
              <div className={`relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-100 ${
                viewMode === 'list' ? 'w-40 flex-shrink-0' : 'h-48'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent z-10" />
                
                {/* Philosophy Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full grid grid-cols-4 gap-4">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="border-2 border-indigo-300 rounded-lg transform rotate-45"></div>
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
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500' 
                      : 'bg-gradient-to-r from-gray-500 to-slate-500'
                  }`}>
                    {item.type === 'book' ? 'Text' : 'Documentary'}
                  </span>
                </div>

                {/* Featured/New Badges */}
                <div className="absolute top-3 right-3 z-30 space-y-2">
                  {item.isFeatured && (
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      ⭐ Foundational
                    </span>
                  )}
                  {item.isNew && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Contemporary
                    </span>
                  )}
                  {item.philosophicalSchool && (
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {item.philosophicalSchool}
                    </span>
                  )}
                </div>

                {/* Branch Badge */}
                <div className="absolute bottom-3 left-3 z-30">
                  <span className={`px-3 py-1 backdrop-blur-sm text-xs font-bold rounded-full shadow-lg flex items-center gap-1 ${getBranchColor(item.branch)}`}>
                    {getBranchIcon(item.branch)}
                    {item.branch}
                  </span>
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
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
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2 group-hover:text-indigo-600 transition-colors">
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
                        <span>{item.views.toLocaleString()} studied</span>
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
                      <span className={`px-2 py-1 text-xs rounded-full ${getEraColor(item.era)}`}>
                        {item.era}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center gap-2">
                      {item.type === 'book' ? (
                        <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full">
                          {item.pages}p
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 bg-gray-50 text-gray-700 text-xs px-2 py-1 rounded-full">
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
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No philosophical content found</h3>
            <p className="text-gray-600">Try adjusting your search or filters to explore our philosophy collection</p>
          </div>
        )}

        {/* Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                {/* Cover Image */}
                <div className="lg:w-2/5 p-8 bg-gradient-to-br from-indigo-50 to-purple-50">
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
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500' 
                          : 'bg-gradient-to-r from-gray-500 to-slate-500'
                      }`}>
                        {selectedItem.type === 'book' ? '📖 Philosophical Text' : '🎬 Philosophy Documentary'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Era Badge */}
                  <div className="mt-4 flex justify-center">
                    <div className={`px-4 py-2 rounded-full font-medium ${getEraColor(selectedItem.era)}`}>
                      {selectedItem.era} Era
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:w-3/5 p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 text-sm font-bold rounded-full flex items-center gap-1 ${getBranchColor(selectedItem.branch)}`}>
                          {getBranchIcon(selectedItem.branch)}
                          {selectedItem.branch}
                        </span>
                        {selectedItem.philosophicalSchool && (
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-bold rounded-full">
                            {selectedItem.philosophicalSchool}
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
                          <span>{selectedItem.views.toLocaleString()} studied</span>
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

                    <div className="grid grid-cols-2 gap-4 py-4 bg-indigo-50 rounded-xl p-4">
                      <div>
                        <span className="text-sm text-gray-500">Philosophical Branch</span>
                        <p className="font-bold text-lg text-gray-800">{selectedItem.branch}</p>
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
                        <span className="text-sm text-gray-500">Historical Era</span>
                        <p className="font-medium">{selectedItem.era}</p>
                      </div>
                    </div>

                    {selectedItem.rating && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Philosophical Significance:</span>
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
                          Watch Documentary
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleRead(selectedItem)}
                          className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center justify-center gap-3 shadow-lg"
                        >
                          <BookOpen className="w-5 h-5" />
                          Study Philosophical Text
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