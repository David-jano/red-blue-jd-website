'use client';

import { useState } from 'react';
import { Search, Eye, User, Calendar, Clock, Film, BookOpen, Play, Download, Bookmark, Share2, ChevronDown, Grid, List, ExternalLink, Brain, Users, Heart, MessageCircle, Target, Zap, Shield, TrendingUp } from 'lucide-react';

interface PsychologyItem {
  id: string;
  title: string;
  author?: string;
  narrator?: string;
  publishedDate: string;
  views: number;
  description: string;
  coverImage: string;
  category: string;
  approach: 'Cognitive' | 'Behavioral' | 'Psychoanalytic' | 'Humanistic' | 'Evolutionary' | 'Social' | 'Clinical' | 'Developmental';
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
  therapyType?: string;
}

export default function PsychologyPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedApproach, setSelectedApproach] = useState('all');
  const [selectedType, setSelectedType] = useState<'all' | 'book' | 'documentary'>('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedItem, setSelectedItem] = useState<PsychologyItem | null>(null);
  const [activeTab, setActiveTab] = useState<'books' | 'documentaries'>('books');

  const categories: string[] = [
    'all', 'Clinical Psychology', 'Cognitive Psychology', 'Social Psychology', 'Developmental Psychology',
    'Abnormal Psychology', 'Personality Psychology', 'Neuropsychology', 'Forensic Psychology',
    'Health Psychology', 'Educational Psychology', 'Industrial Psychology', 'Positive Psychology'
  ];

  const approaches = ['all', 'Cognitive', 'Behavioral', 'Psychoanalytic', 'Humanistic', 'Evolutionary', 'Social', 'Clinical', 'Developmental'];

  const psychologyItems: PsychologyItem[] = [
    // Psychology Books
    {
      id: '1',
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      publishedDate: '2011-10-25',
      views: 2850000,
      description: 'Nobel Prize winner Daniel Kahneman explores the two systems that drive the way we think—System 1 (fast, intuitive) and System 2 (slow, deliberate).',
      coverImage: '/images/psychology/thinking-fast-slow.jpg',
      category: 'Cognitive Psychology',
      approach: 'Cognitive',
      pages: 499,
      language: 'English',
      isbn: '978-0374275631',
      publisher: 'Farrar, Straus and Giroux',
      type: 'book',
      isFeatured: true,
      rating: 4.6,
      therapyType: 'Cognitive Behavioral Therapy'
    },
    {
      id: '2',
      title: 'The Body Keeps the Score',
      author: 'Bessel van der Kolk',
      publishedDate: '2014-09-25',
      views: 1890000,
      description: 'A pioneering researcher transforms our understanding of trauma and offers a bold new paradigm for healing.',
      coverImage: '/images/psychology/body-keeps-score.jpg',
      category: 'Clinical Psychology',
      approach: 'Clinical',
      pages: 464,
      language: 'English',
      isbn: '978-0670785933',
      publisher: 'Penguin Books',
      type: 'book',
      rating: 4.9,
      therapyType: 'Trauma Therapy'
    },
    {
      id: '3',
      title: 'Man\'s Search for Meaning',
      author: 'Viktor E. Frankl',
      publishedDate: '1946-01-01',
      views: 4567000,
      description: 'A prominent psychiatrist recounts his experiences in Nazi death camps and describes his psychotherapeutic method of finding meaning in all forms of existence.',
      coverImage: '/images/psychology/mans-search.jpg',
      category: 'Positive Psychology',
      approach: 'Humanistic',
      pages: 165,
      language: 'English',
      isbn: '978-0807014295',
      publisher: 'Beacon Press',
      type: 'book',
      isFeatured: true,
      rating: 4.8,
      therapyType: 'Logotherapy'
    },
    {
      id: '4',
      title: 'Influence: The Psychology of Persuasion',
      author: 'Robert B. Cialdini',
      publishedDate: '1984-01-01',
      views: 1560000,
      description: 'The classic book on persuasion that explains the psychology of why people say "yes"—and how to apply these understandings.',
      coverImage: '/images/psychology/influence.jpg',
      category: 'Social Psychology',
      approach: 'Social',
      pages: 320,
      language: 'English',
      isbn: '978-0061241895',
      publisher: 'Harper Business',
      type: 'book',
      rating: 4.7
    },
    {
      id: '5',
      title: 'Quiet: The Power of Introverts in a World That Can\'t Stop Talking',
      author: 'Susan Cain',
      publishedDate: '2012-01-24',
      views: 2345000,
      description: 'At least one-third of the people we know are introverts. This book shows how dramatically we undervalue introverts, and how much we lose in doing so.',
      coverImage: '/images/psychology/quiet.jpg',
      category: 'Personality Psychology',
      approach: 'Humanistic',
      pages: 352,
      language: 'English',
      isbn: '978-0307352149',
      publisher: 'Crown',
      type: 'book',
      rating: 4.6
    },
    {
      id: '6',
      title: 'The Social Animal',
      author: 'Elliot Aronson',
      publishedDate: '1972-01-01',
      views: 890000,
      description: 'A classic exploration of human social behavior that combines rigorous research with compelling storytelling.',
      coverImage: '/images/psychology/social-animal.jpg',
      category: 'Social Psychology',
      approach: 'Social',
      pages: 425,
      language: 'English',
      isbn: '978-0716726184',
      publisher: 'Worth Publishers',
      type: 'book',
      rating: 4.5
    },
    {
      id: '7',
      title: 'The Interpretation of Dreams',
      author: 'Sigmund Freud',
      publishedDate: '1899-11-04',
      views: 1234000,
      description: 'Freud\'s groundbreaking work that established the importance of psychoanalysis and introduced the concept of the unconscious mind.',
      coverImage: '/images/psychology/dreams.jpg',
      category: 'Abnormal Psychology',
      approach: 'Psychoanalytic',
      pages: 688,
      language: 'English',
      isbn: '978-0684836459',
      publisher: 'Basic Books',
      type: 'book',
      isFeatured: true,
      rating: 4.3,
      therapyType: 'Psychoanalysis'
    },
    {
      id: '8',
      title: 'Mindset: The New Psychology of Success',
      author: 'Carol S. Dweck',
      publishedDate: '2006-02-28',
      views: 1987000,
      description: 'World-renowned Stanford University psychologist shows how success in school, work, sports, and relationships can be dramatically influenced by how we think about our talents and abilities.',
      coverImage: '/images/psychology/mindset.jpg',
      category: 'Educational Psychology',
      approach: 'Cognitive',
      pages: 288,
      language: 'English',
      isbn: '978-0345472328',
      publisher: 'Ballantine Books',
      type: 'book',
      isNew: true,
      rating: 4.6
    },

    // Psychology Documentaries
    {
      id: '9',
      title: 'The Stanford Prison Experiment',
      narrator: 'Philip Zimbardo',
      publishedDate: '2015-07-17',
      views: 3450000,
      description: 'A dramatic recreation of the infamous 1971 psychology experiment that tested how ordinary people would behave when given absolute power.',
      coverImage: '/images/psychology/stanford-prison.jpg',
      category: 'Social Psychology',
      approach: 'Social',
      duration: '2h',
      youtubeUrl: 'https://www.youtube.com/watch?v=760lwYmpXbc',
      language: 'English',
      type: 'documentary',
      isFeatured: true,
      rating: 4.7
    },
    {
      id: '10',
      title: 'The Brain with David Eagleman',
      narrator: 'David Eagleman',
      publishedDate: '2015-10-14',
      views: 1234000,
      description: 'Neuroscientist David Eagleman explores the wonders of the human brain in an epic series that reveals the ultimate story of us, why we feel and think the things we do.',
      coverImage: '/images/psychology/brain-eagleman.jpg',
      category: 'Neuropsychology',
      approach: 'Cognitive',
      duration: '6h',
      youtubeUrl: 'https://www.youtube.com/watch?v=6XzTgQKW9G4',
      language: 'English',
      type: 'documentary',
      rating: 4.8
    },
    {
      id: '11',
      title: 'The Century of the Self',
      narrator: 'Adam Curtis',
      publishedDate: '2002-03-17',
      views: 4567000,
      description: 'A documentary about how Freud\'s theories of the unconscious were used by corporations and politicians to control the masses in the 20th century.',
      coverImage: '/images/psychology/century-self.jpg',
      category: 'Social Psychology',
      approach: 'Psychoanalytic',
      duration: '4h',
      youtubeUrl: 'https://www.youtube.com/watch?v=eJ3RzGoQC4s',
      language: 'English',
      type: 'documentary',
      isFeatured: true,
      rating: 4.9
    },
    {
      id: '12',
      title: 'The Truth About Lies',
      narrator: 'Steven Pinker',
      publishedDate: '2018-01-01',
      views: 876000,
      description: 'Exploring the psychology of deception—why we lie, how we detect lies, and the consequences of dishonesty in relationships and society.',
      coverImage: '/images/psychology/truth-lies.jpg',
      category: 'Social Psychology',
      approach: 'Social',
      duration: '1h 30m',
      youtubeUrl: 'https://www.youtube.com/watch?v=H0-WkpmTPrM',
      language: 'English',
      type: 'documentary',
      rating: 4.6
    },
    {
      id: '13',
      title: 'The Mindfulness Movement',
      narrator: 'Sharon Salzberg',
      publishedDate: '2020-01-01',
      views: 543000,
      description: 'A documentary exploring the growing popularity of mindfulness meditation and its impact on mental health, education, and corporate culture.',
      coverImage: '/images/psychology/mindfulness-movement.jpg',
      category: 'Positive Psychology',
      approach: 'Humanistic',
      duration: '1h 25m',
      youtubeUrl: 'https://www.youtube.com/watch?v=DYpAE7NS8PM',
      language: 'English',
      type: 'documentary',
      isNew: true,
      rating: 4.5
    },
    {
      id: '14',
      title: 'The Milgram Experiment',
      narrator: 'Stanley Milgram',
      publishedDate: '1965-01-01',
      views: 2876000,
      description: 'The original documentary footage of Stanley Milgram\'s controversial obedience experiments at Yale University.',
      coverImage: '/images/psychology/milgram.jpg',
      category: 'Social Psychology',
      approach: 'Social',
      duration: '45m',
      youtubeUrl: 'https://www.youtube.com/watch?v=wdUu3u9Web4',
      language: 'English',
      type: 'documentary',
      rating: 4.7
    },
    {
      id: '15',
      title: 'The Secret Life of the Brain',
      narrator: 'Blair Brown',
      publishedDate: '2002-01-22',
      views: 987000,
      description: 'A five-part series that explores the fascinating advances in brain research and our understanding of how the brain develops from infancy to old age.',
      coverImage: '/images/psychology/secret-life-brain.jpg',
      category: 'Neuropsychology',
      approach: 'Cognitive',
      duration: '5h',
      youtubeUrl: 'https://www.youtube.com/watch?v=6jAHb3nCwKk',
      language: 'English',
      type: 'documentary',
      rating: 4.8
    },
    {
      id: '16',
      title: 'Happy',
      narrator: 'Roko Belic',
      publishedDate: '2011-01-01',
      views: 1234000,
      description: 'A documentary that takes viewers on a journey across five continents in search of what really makes people happy.',
      coverImage: '/images/psychology/happy-doc.jpg',
      category: 'Positive Psychology',
      approach: 'Humanistic',
      duration: '1h 16m',
      youtubeUrl: 'https://www.youtube.com/watch?v=JcMQmuvyPmc',
      language: 'English',
      type: 'documentary',
      rating: 4.6
    },
    {
      id: '17',
      title: 'The Power of Vulnerability',
      narrator: 'Brené Brown',
      publishedDate: '2010-12-01',
      views: 3567000,
      description: 'Brené Brown studies human connection—our ability to empathize, belong, and love. In this TED talk turned documentary, she discusses vulnerability.',
      coverImage: '/images/psychology/vulnerability.jpg',
      category: 'Social Psychology',
      approach: 'Humanistic',
      duration: '21m',
      youtubeUrl: 'https://www.youtube.com/watch?v=iCvmsMzlF7o',
      language: 'English',
      type: 'documentary',
      isFeatured: true,
      rating: 4.9
    },
    {
      id: '18',
      title: 'The Baby Human',
      narrator: 'Susan Sarandon',
      publishedDate: '2004-01-01',
      views: 876000,
      description: 'An exploration of the first two years of human life, showing how babies learn language, think, and develop social bonds.',
      coverImage: '/images/psychology/baby-human.jpg',
      category: 'Developmental Psychology',
      approach: 'Developmental',
      duration: '6h',
      youtubeUrl: 'https://www.youtube.com/watch?v=dEnkY2iaKis',
      language: 'English',
      type: 'documentary',
      rating: 4.7
    },
  ];

  // Filter by type
  const filteredByType = psychologyItems.filter(item => 
    selectedType === 'all' || item.type === selectedType
  );

  // Apply other filters
  const filteredItems = filteredByType.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
      || (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase()))
      || (item.narrator && item.narrator.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesApproach = selectedApproach === 'all' || item.approach === selectedApproach;
    return matchesSearch && matchesCategory && matchesApproach;
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

  const handleItemClick = (item: PsychologyItem) => {
    setSelectedItem(item);
  };

  const handlePlay = (item: PsychologyItem) => {
    if (item.type === 'documentary' && item.youtubeUrl) {
      window.open(item.youtubeUrl, '_blank');
    } else {
      alert(`Opening: ${item.title}`);
    }
  };

  const handleDownload = (item: PsychologyItem) => {
    alert(`Downloading: ${item.title}`);
  };

  const handleRead = (item: PsychologyItem) => {
    alert(`Reading: ${item.title}`);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Clinical Psychology': return <Heart className="w-4 h-4" />;
      case 'Cognitive Psychology': return <Brain className="w-4 h-4" />;
      case 'Social Psychology': return <Users className="w-4 h-4" />;
      case 'Developmental Psychology': return <TrendingUp className="w-4 h-4" />;
      case 'Abnormal Psychology': return <Zap className="w-4 h-4" />;
      case 'Personality Psychology': return <Target className="w-4 h-4" />;
      case 'Neuropsychology': return <Brain className="w-4 h-4" />;
      case 'Positive Psychology': return <Heart className="w-4 h-4" fill="currentColor" />;
      case 'Forensic Psychology': return <Shield className="w-4 h-4" />;
      case 'Health Psychology': return <Heart className="w-4 h-4" />;
      case 'Educational Psychology': return <MessageCircle className="w-4 h-4" />;
      case 'Industrial Psychology': return <Users className="w-4 h-4" />;
      default: return <Brain className="w-4 h-4" />;
    }
  };

  const getApproachColor = (approach: string) => {
    switch (approach) {
      case 'Cognitive': return 'bg-blue-100 text-blue-700';
      case 'Behavioral': return 'bg-green-100 text-green-700';
      case 'Psychoanalytic': return 'bg-purple-100 text-purple-700';
      case 'Humanistic': return 'bg-amber-100 text-amber-700';
      case 'Evolutionary': return 'bg-red-100 text-red-700';
      case 'Social': return 'bg-indigo-100 text-indigo-700';
      case 'Clinical': return 'bg-pink-100 text-pink-700';
      case 'Developmental': return 'bg-teal-100 text-teal-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const StatCard = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) => (
    <div className="bg-white rounded-xl p-4 shadow-lg border border-purple-100">
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-black bg-clip-text mb-4">
            Ubumenya-muntu
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Shakisha ubujyakuzimu bw'imitekerereze ya muntu ukoresheje Ibitabo na documentaire mu buryo bworoshye
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard 
            icon={BookOpen} 
            label="Psychology Texts" 
            value="742" 
            color="bg-gradient-to-r from-purple-500 to-indigo-500" 
          />
          <StatCard 
            icon={Film} 
            label="Psychological Studies" 
            value="315+" 
            color="bg-gradient-to-r from-pink-500 to-rose-500" 
          />
          <StatCard 
            icon={Brain} 
            label="Psychological Approaches" 
            value="8" 
            color="bg-gradient-to-r from-blue-500 to-cyan-500" 
          />
          <StatCard 
            icon={Users} 
            label="Pioneering Psychologists" 
            value="89" 
            color="bg-gradient-to-r from-green-500 to-emerald-500" 
          />
        </div>

        {/* Search & Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6 mb-8 border border-purple-100">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search psychological theories, studies, or researchers..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value as any)}
                  className="appearance-none bg-white border border-purple-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
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
                  className="appearance-none bg-white border border-purple-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
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
                  value={selectedApproach}
                  onChange={e => setSelectedApproach(e.target.value)}
                  className="appearance-none bg-white border border-purple-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                >
                  {approaches.map((approach) => (
                    <option key={approach} value={approach}>
                      {approach === 'all' ? 'All Approaches' : approach}
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
                  className="appearance-none bg-white border border-purple-200 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
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

              <div className="flex bg-purple-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-white shadow-sm text-purple-600' : 'text-purple-500 hover:text-purple-700'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-white shadow-sm text-purple-600' : 'text-purple-500 hover:text-purple-700'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mb-8">
          <div className="border-b border-purple-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('books')}
                className={`py-3 px-1 border-b-2 font-medium text-lg transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === 'books'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <BookOpen className="w-5 h-5" />
               Books 
                <span className="bg-purple-100 text-purple-700 text-sm font-normal px-2 py-1 rounded-full">
                  {books.length}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('documentaries')}
                className={`py-3 px-1 border-b-2 font-medium text-lg transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === 'documentaries'
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Film className="w-5 h-5" />
                Documentaries
                <span className="bg-purple-100 text-purple-700 text-sm font-normal px-2 py-1 rounded-full">
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
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden border border-purple-100 ${
                viewMode === 'list' ? 'flex' : 'h-full flex flex-col'
              }`}
              onClick={() => handleItemClick(item)}
            >
              {/* Cover Image with Type Badge */}
              <div className={`relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-100 ${
                viewMode === 'list' ? 'w-40 flex-shrink-0' : 'h-48'
              }`}>
                {/* Your Image Will Appear Here */}
                <div className="absolute inset-0">
                  {/* Image container - replace with your actual image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-4">
                      {/* Image placeholder removed */}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent z-10" />

                {/* Psychology Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="grid grid-cols-4 gap-6">
                      {[...Array(16)].map((_, i) => (
                        <Brain key={i} className="w-6 h-6 text-purple-300" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-3 left-3 z-30">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                    item.type === 'book' 
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500' 
                      : 'bg-gradient-to-r from-pink-500 to-rose-500'
                  }`}>
                    {item.type === 'book' ? 'Book' : 'Documentary'}
                  </span>
                </div>

                {/* Featured/New Badges */}
                <div className="absolute top-3 right-3 z-30 space-y-2">
                  {item.isFeatured && (
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      Seminal Work
                    </span>
                  )}
                  {item.isNew && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      New Research
                    </span>
                  )}
                  {item.therapyType && (
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                       {item.therapyType.split(' ')[0]}
                    </span>
                  )}
                </div>

                {/* Approach Badge */}
                <div className="absolute bottom-3 left-3 z-30">
                  <span className={`px-3 py-1 backdrop-blur-sm text-xs font-bold rounded-full shadow-lg flex items-center gap-1 ${getApproachColor(item.approach)}`}>
                    {item.approach}
                  </span>
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-indigo-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
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
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2 group-hover:text-purple-600 transition-colors">
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
                      <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full flex items-center gap-1">
                        {getCategoryIcon(item.category)}
                        {item.category.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center gap-2">
                      {item.type === 'book' ? (
                        <span className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded-full">
                          📄 {item.pages}p
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 bg-pink-50 text-pink-700 text-xs px-2 py-1 rounded-full">
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
            <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No psychology content found</h3>
            <p className="text-gray-600">Try adjusting your search or filters to explore our psychology collection</p>
          </div>
        )}

        {/* Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                {/* Cover Image */}
                <div className="lg:w-2/5 p-8 bg-gradient-to-br from-purple-50 to-indigo-50">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                    {/* Your Image Will Appear Here */}
                    <div className="w-full h-full bg-gradient-to-br from-purple-200 to-indigo-300">
                      {/* Image placeholder removed */}
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg ${
                        selectedItem.type === 'book' 
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-500' 
                          : 'bg-gradient-to-r from-pink-500 to-rose-500'
                      }`}>
                        {selectedItem.type === 'book' ? 'Psychology Book' : 'Psychological Documentary'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Approach Badge */}
                  <div className="mt-4 flex justify-center">
                    <div className={`px-4 py-2 rounded-full font-medium ${getApproachColor(selectedItem.approach)}`}>
                      {selectedItem.approach} Approach
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:w-3/5 p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-bold rounded-full flex items-center gap-1">
                          {getCategoryIcon(selectedItem.category)}
                          {selectedItem.category}
                        </span>
                        {selectedItem.therapyType && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full flex items-center gap-1">
                            🛋️ {selectedItem.therapyType}
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

                    <div className="grid grid-cols-2 gap-4 py-4 bg-purple-50 rounded-xl p-4">
                      <div>
                        <span className="text-sm text-gray-500">Psychological Category</span>
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
                        <span className="text-sm text-gray-500">Theoretical Approach</span>
                        <p className="font-medium">{selectedItem.approach}</p>
                      </div>
                    </div>

                    {selectedItem.rating && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Academic Rating:</span>
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
                          Watch Study
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleRead(selectedItem)}
                          className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-3 shadow-lg"
                        >
                          <BookOpen className="w-5 h-5" />
                          Read Psychological Study
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