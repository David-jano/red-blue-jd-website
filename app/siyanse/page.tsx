"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Eye,
  User,
  Calendar,
  Globe,
  Clock,
  Film,
  BookOpen,
  Play,
  Download,
  Bookmark,
  Share2,
  ChevronDown,
  Grid,
  List,
  ExternalLink,
  Atom,
  Brain,
  Cpu,
  Zap,
  Server,
  Beaker,
  Telescope,
  Microscope,
} from "lucide-react";

interface ScienceItem {
  id: string;
  title: string;
  author?: string;
  narrator?: string;
  publishedDate: string;
  views: number;
  description: string;
  coverImage: string;
  field: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration?: string;
  youtubeUrl?: string;
  pages?: number;
  language: string;
  isbn?: string;
  publisher?: string;
  type: "book" | "documentary";
  isFeatured?: boolean;
  isNew?: boolean;
  rating?: number;
}

export default function SciencePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedType, setSelectedType] = useState<
    "all" | "book" | "documentary"
  >("all");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedItem, setSelectedItem] = useState<ScienceItem | null>(null);
  const [activeTab, setActiveTab] = useState<"books" | "documentaries">(
    "books"
  );

  const fields: string[] = [
    "all",
    "Physics",
    "Biology",
    "Chemistry",
    "Astronomy",
    "Neuroscience",
    "Computer Science",
    "Mathematics",
    "Quantum Mechanics",
    "Astrophysics",
    "Genetics",
    "Artificial Intelligence",
    "Climate Science",
    "Psychology",
    "Engineering",
    "Robotics",
    "Biotechnology",
  ];

  const difficulties = ["all", "Beginner", "Intermediate", "Advanced"];

  // Your custom cover images for science content
  const scienceItems: ScienceItem[] = [
    // Science Books
    {
      id: "1",
      title: "Imbaraga zitagira akagero",
      author: "Stephen Hawking",
      publishedDate: "1988-04-01",
      views: 2850000,
      description:
        "Igitabo gikomeye mu bijyanye n’ubumenyi cyanditswe n’umwe mu bantu bafite ubwenge bwinshi muri iki gihe, kigasuzuma ibibazo bikomeye ",
      coverImage: "/images/siyanse/006.webp",
      field: "Physics",
      difficulty: "Intermediate",
      pages: 212,
      language: "English",
      isbn: "978-0553380163",
      publisher: "Bantam Books",
      type: "book",
      isFeatured: true,
      rating: 4.7,
    },
    {
      id: "2",
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      publishedDate: "1976-01-01",
      views: 1450000,
      description:
        "Uburyo buhindura imyumvire mu kwiga ku ihindagurika ry’ibinyabuzima, butangiza igitekerezo cy’igitabo nk’aho ari cyo kintu cy’ingenzi gihitamo mu ihindagurika.",
      coverImage: "/images/siyanse/007.jpg",
      field: "Biology",
      difficulty: "Intermediate",
      pages: 360,
      language: "English",
      isbn: "978-0199291151",
      publisher: "Oxford University Press",
      type: "book",
      rating: 4.8,
    },
    {
      id: "3",
      title: "",
      author: "Carl Sagan",
      publishedDate: "1980-10-01",
      views: 1890000,
      description:
        "Kimwe mu bitabo by’ubumenyi byamamazwe cyane mu mateka, gisubiramo imyaka miliyari 14 y’ihindagurika ry’ikirere yahinduye ibinyabuzima bikagera ku bwenge.",
      coverImage: "/images/siyanse/005.jpg", // Your custom image
      field: "Astronomy",
      difficulty: "Beginner",
      pages: 365,
      language: "English",
      isbn: "978-0345331359",
      publisher: "Random House",
      type: "book",
      isFeatured: true,
      rating: 4.9,
    },
    {
      id: "4",
      title: "Ubuzima muri siyanse",
      author: "Michael White",
      publishedDate: "2016-05-17",
      views: 890000,
      description:
        'Amateka akomeye y’uturemangingo (genes) n’igisubizo ku kibazo gikomeye cy’ejo hazaza: Ese umuntu azaba ate igihe tuzamenya “gusoma” no “kwandika” amakuru yacu y’uturemangingo?',
      coverImage: "/images/siyanse/004.jpg", // Your custom image
      field: "Genetics",
      difficulty: "Intermediate",
      pages: 592,
      language: "English",
      isbn: "978-1476733500",
      publisher: "Scribner",
      type: "book",
      isNew: true,
      rating: 4.6,
    },
    {
      id: "5",
      title: "Imiterere ya siyansi",
      author: "Brian Greene",
      publishedDate: "1999-02-01",
      views: 756000,
      description:
        "Inkuru isobanutse kandi igezweho ku gushakisha inyigisho nyamukuru y’iby’ibinyabutabire—inyigisho yashyira hamwe imbaraga zose z’ibiremwa.",
      coverImage: "/images/siyanse/003.webp", // Your custom image
      field: "Quantum Mechanics",
      difficulty: "Advanced",
      pages: 448,
      language: "English",
      isbn: "978-0393058581",
      publisher: "W. W. Norton",
      type: "book",
      rating: 4.5,
    },

    // Science Documentaries
    {
      id: "6",
      title: "Cosmos: A Spacetime Odyssey",
      narrator: "Neil deGrasse Tyson",
      publishedDate: "2014-03-09",
      views: 3450000,
      description:
        "A follow-up to the 1980 television series Cosmos: A Personal Voyage, exploring how we discovered the laws of nature and found our coordinates in space and time.",
      coverImage: "/images/science/cosmos-doc.jpg", // Your custom image
      field: "Astronomy",
      difficulty: "Beginner",
      duration: "13h",
      youtubeUrl: "https://www.youtube.com/watch?v=kBTd9--9VMI",
      language: "English",
      type: "documentary",
      isFeatured: true,
      rating: 4.9,
    },
    {
      id: "7",
      title: "The Elegant Universe",
      narrator: "Brian Greene",
      publishedDate: "2003-10-28",
      views: 1234000,
      description:
        "A three-hour miniseries with mathematical physicist Brian Greene as the guide to the strange and beautiful world of string theory.",
      coverImage: "/images/science/elegant-universe-doc.jpg", // Your custom image
      field: "Quantum Mechanics",
      difficulty: "Advanced",
      duration: "3h",
      youtubeUrl: "https://www.youtube.com/watch?v=YtdE662eY_M",
      language: "English",
      type: "documentary",
      rating: 4.7,
    },
    {
      id: "8",
      title: "Planet Earth",
      narrator: "David Attenborough",
      publishedDate: "2006-03-05",
      views: 4567000,
      description:
        "A groundbreaking television series that captures rare action, impossible locations, and intimate moments with our planet's best-loved, wildest, and most elusive creatures.",
      coverImage: "/images/science/planet-earth.jpg", // Your custom image
      field: "Biology",
      difficulty: "Beginner",
      duration: "11h",
      youtubeUrl: "https://www.youtube.com/watch?v=7nS_aA-kyWw",
      language: "English",
      type: "documentary",
      rating: 4.9,
    },
    {
      id: "9",
      title: "The Human Brain",
      narrator: "David Eagleman",
      publishedDate: "2015-10-14",
      views: 876000,
      description:
        "Neuroscientist David Eagleman explores the wonders of the human brain in an epic series that reveals the ultimate story of us, why we feel and think the things we do.",
      coverImage: "/images/science/human-brain.jpg", // Your custom image
      field: "Neuroscience",
      difficulty: "Intermediate",
      duration: "6h",
      youtubeUrl: "https://www.youtube.com/watch?v=6XzTgQKW9G4",
      language: "English",
      type: "documentary",
      rating: 4.8,
    },
    {
      id: "10",
      title: "AlphaGo",
      narrator: "Fan Hui",
      publishedDate: "2017-01-26",
      views: 987000,
      description:
        "The story of Google DeepMind's AlphaGo AI and its historic match against legendary Go player Lee Sedol.",
      coverImage: "/images/science/alphago.jpg", // Your custom image
      field: "Artificial Intelligence",
      difficulty: "Intermediate",
      duration: "1h 30m",
      youtubeUrl: "https://www.youtube.com/watch?v=WXuK6gekU1Y",
      language: "English",
      type: "documentary",
      isFeatured: true,
      rating: 4.8,
    },
  ];

  // Filter by type
  const filteredByType = scienceItems.filter(
    (item) => selectedType === "all" || item.type === selectedType
  );

  // Apply other filters
  const filteredItems = filteredByType.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.author &&
        item.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.narrator &&
        item.narrator.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesField =
      selectedField === "all" || item.field === selectedField;
    const matchesDifficulty =
      selectedDifficulty === "all" || item.difficulty === selectedDifficulty;
    return matchesSearch && matchesField && matchesDifficulty;
  });

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.publishedDate).getTime() -
          new Date(a.publishedDate).getTime()
        );
      case "oldest":
        return (
          new Date(a.publishedDate).getTime() -
          new Date(b.publishedDate).getTime()
        );
      case "views":
        return b.views - a.views;
      case "title":
        return a.title.localeCompare(b.title);
      case "rating":
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  // Separate books and documentaries
  const books = sortedItems.filter((item) => item.type === "book");
  const documentaries = sortedItems.filter(
    (item) => item.type === "documentary"
  );
  const activeItems = activeTab === "books" ? books : documentaries;

  const handleItemClick = (item: ScienceItem) => {
    setSelectedItem(item);
  };

  const handlePlay = (item: ScienceItem) => {
    if (item.type === "documentary" && item.youtubeUrl) {
      window.open(item.youtubeUrl, "_blank");
    } else {
      alert(`Opening: ${item.title}`);
    }
  };

  const handleDownload = (item: ScienceItem) => {
    alert(`Downloading: ${item.title}`);
  };

  const handleRead = (item: ScienceItem) => {
    alert(`Reading: ${item.title}`);
  };

  const getFieldIcon = (field: string) => {
    switch (field) {
      case "Physics":
        return <Atom className="w-4 h-4" />;
      case "Biology":
        return <Zap className="w-4 h-4" />;
      case "Chemistry":
        return <Beaker className="w-4 h-4" />;
      case "Astronomy":
        return <Telescope className="w-4 h-4" />;
      case "Neuroscience":
        return <Brain className="w-4 h-4" />;
      case "Computer Science":
        return <Cpu className="w-4 h-4" />;
      case "Artificial Intelligence":
        return <Brain className="w-4 h-4" />;
      case "Quantum Mechanics":
        return <Atom className="w-4 h-4" />;
      case "Mathematics":
        return <Server className="w-4 h-4" />;
      case "Engineering":
        return <Cpu className="w-4 h-4" />;
      case "Robotics":
        return <Server className="w-4 h-4" />;
      case "Biotechnology":
        return <Beaker className="w-4 h-4" />;
      case "Genetics":
        return <Zap className="w-4 h-4" />;
      case "Astrophysics":
        return <Telescope className="w-4 h-4" />;
      case "Climate Science":
        return <Globe className="w-4 h-4" />;
      case "Psychology":
        return <Brain className="w-4 h-4" />;
      default:
        return <Beaker className="w-4 h-4" />;
    }
  };

  const StatCard = ({
    icon: Icon,
    label,
    value,
  }: {
    icon: any;
    label: string;
    value: string;
  }) => (
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
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Beaker className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <Atom className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-black bg-clip-text mb-4">
            SIYANSE
          </h1>
          <p className="text-l text-gray-600 max-w-3xl mx-auto">
            Shakisha ibintu byavumbuwe na siyansi ukoresheje ibitabo byemewe na
            documentaire
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard icon={BookOpen} label="Ibitabo bya Siyansi" value="1,284" />
          <StatCard icon={Film} label="Amasaha ya Dokumentari" value="850+" />
          <StatCard icon={Beaker} label="Ibyiciro bya Siyansi" value="18" />
        </div>

        {/* Search & Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6 mb-8 border border-blue-200">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Shaka siyansi, ubumenyi, cyangwa abashakashatsi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as any)}
                  className="appearance-none bg-white border border-blue-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
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
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="appearance-none bg-white border border-blue-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                >
                  {fields.map((field) => (
                    <option key={field} value={field}>
                      {field === "all" ? "Ibyiciro byose" : field}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="appearance-none bg-white border border-blue-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                >
                  {difficulties.map((difficulty) => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty === "all" ? "Icyiciro" : difficulty}
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
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-blue-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
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

              <div className="flex bg-blue-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === "grid"
                      ? "bg-white shadow-sm text-blue-600"
                      : "text-blue-500 hover:text-blue-700"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === "list"
                      ? "bg-white shadow-sm text-blue-600"
                      : "text-blue-500 hover:text-blue-700"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="mb-8">
          <div className="border-b border-blue-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("books")}
                className={`py-3 px-1 border-b-2 font-medium text-lg transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === "books"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <BookOpen className="w-5 h-5" />
                Ibitabo
                <span className="bg-blue-100 text-blue-700 text-sm font-normal px-2 py-1 rounded-full">
                  {books.length}
                </span>
              </button>
              <button
                onClick={() => setActiveTab("documentaries")}
                className={`py-3 px-1 border-b-2 font-medium text-lg transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === "documentaries"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Film className="w-5 h-5" />
                Ibyegeranyo
                <span className="bg-blue-100 text-blue-700 text-sm font-normal px-2 py-1 rounded-full">
                  {documentaries.length}
                </span>
              </button>
            </nav>
          </div>
        </div>

        {/* Content Grid */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-6"
          }`}
        >
          {activeItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden border border-blue-100 ${
                viewMode === "list" ? "flex" : "h-full flex flex-col"
              }`}
              onClick={() => handleItemClick(item)}
            >
              {/* Cover Image with Type Badge */}
              <div
                className={`relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-100 ${
                  viewMode === "list" ? "w-40 flex-shrink-0" : "h-48"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />

                {/* Custom Cover Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes={
                      viewMode === "list"
                        ? "160px"
                        : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    }
                  />
                </div>

                {/* Type Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                      item.type === "book"
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                        : "bg-gradient-to-r from-purple-500 to-pink-500"
                    }`}
                  >
                    {item.type === "book" ? "Book" : "Documentary"}
                  </span>
                </div>

                {/* Featured/New Badges */}
                <div className="absolute top-3 right-3 z-20 space-y-2">
                  {item.isFeatured && (
                    <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      Featured
                    </span>
                  )}
                  {item.isNew && (
                    <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      New
                    </span>
                  )}
                </div>

                {/* Field Badge */}
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                    {getFieldIcon(item.field)}
                    {item.field}
                  </span>
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-indigo-700/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                  <div className="flex gap-3">
                    {item.type === "documentary" ? (
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
              <div
                className={`p-4 flex-1 flex flex-col ${
                  viewMode === "list" ? "flex-1" : ""
                }`}
              >
                <div className="mb-3 flex-1">
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <div className="mb-3">
                    <div className="flex items-center text-gray-600 mb-2">
                      {item.type === "book" ? (
                        <>
                          <User className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="text-sm font-medium truncate">
                            {item.author}
                          </span>
                        </>
                      ) : (
                        <>
                          <Film className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="text-sm font-medium truncate">
                            {item.narrator}
                          </span>
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
                          <span className="text-sm font-bold">
                            {item.rating}
                          </span>
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
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.difficulty === "Beginner"
                            ? "bg-green-100 text-green-700"
                            : item.difficulty === "Intermediate"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {item.difficulty}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        {getFieldIcon(item.field)}
                        {item.field}
                      </span>
                      {item.type === "book" ? (
                        <span className="bg-cyan-50 text-cyan-700 text-xs px-2 py-1 rounded-full">
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
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No scientific content found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters to explore our collection
            </p>
          </div>
        )}

        {/* Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                {/* Cover Image */}
                <div className="lg:w-2/5 p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={selectedItem.coverImage}
                      alt={selectedItem.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg ${
                          selectedItem.type === "book"
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                            : "bg-gradient-to-r from-purple-500 to-pink-500"
                        }`}
                      >
                        {selectedItem.type === "book"
                          ? "Scientific Book"
                          : "Documentary Film"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:w-3/5 p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedItem.title}
                      </h2>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          {selectedItem.type === "book" ? (
                            <>
                              <User className="w-5 h-5 mr-2" />
                              <span className="text-lg font-medium">
                                {selectedItem.author}
                              </span>
                            </>
                          ) : (
                            <>
                              <Film className="w-5 h-5 mr-2" />
                              <span className="text-lg font-medium">
                                {selectedItem.narrator}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Eye className="w-5 h-5 mr-2" />
                          <span>
                            {selectedItem.views.toLocaleString()} views
                          </span>
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

                    <div className="grid grid-cols-2 gap-4 py-4 bg-blue-50 rounded-xl p-4">
                      <div>
                        <span className="text-sm text-gray-500">
                          Scientific Field
                        </span>
                        <p className="font-bold text-lg text-gray-800">
                          {selectedItem.field}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Published</span>
                        <p className="font-medium">
                          {new Date(
                            selectedItem.publishedDate
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">
                          {selectedItem.type === "book" ? "Pages" : "Duration"}
                        </span>
                        <p className="font-medium">
                          {selectedItem.type === "book"
                            ? `${selectedItem.pages} pages`
                            : selectedItem.duration}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">
                          Difficulty
                        </span>
                        <p className="font-medium">{selectedItem.difficulty}</p>
                      </div>
                    </div>

                    {selectedItem.rating && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          Scientific Rating:
                        </span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-amber-400">
                              {i < Math.floor(selectedItem.rating!) ? "★" : "☆"}
                            </span>
                          ))}
                          <span className="ml-2 font-bold text-gray-800">
                            {selectedItem.rating}/5
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-4 pt-6">
                      {selectedItem.type === "documentary" ? (
                        <button
                          onClick={() => {
                            if (selectedItem.youtubeUrl) {
                              window.open(selectedItem.youtubeUrl, "_blank");
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
                          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-3 shadow-lg"
                        >
                          <BookOpen className="w-5 h-5" />
                          Read Now
                        </button>
                      )}
                      <button
                        onClick={() => handleDownload(selectedItem)}
                        className="flex-1 border border-gray-300 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-3"
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
