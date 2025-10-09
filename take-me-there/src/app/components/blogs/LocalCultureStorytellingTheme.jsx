'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, Heart, Star, Music, Palette, Home,
  MapPin, Calendar, Clock, Users, Award, Eye,
  ChevronLeft, ChevronRight, Volume2, VolumeX, Play, Pause,
  Feather, Scroll, Crown, TreePine, Mountain, Coffee,
  ArrowLeft, ArrowRight, MoreHorizontal, Quote,
  Camera, Share2, Bookmark, Menu, X, Search
} from 'lucide-react';
import { ootyData } from '../../../lib/data/destinations';

const LocalCultureStorytellingTheme = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [bookmarks, setBookmarks] = useState(new Set());
  const [showGlossary, setShowGlossary] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [readingProgress, setReadingProgress] = useState(0);

  const audioRef = useRef();
  const storyRef = useRef();

  // Comprehensive cultural storytelling content for Ooty
  const culturalStories = {
    introduction: {
      title: "ஊட்டி கதை - The Ooty Chronicles",
      subtitle: "Stories from the Land of the Todas",
      description: "Journey through the cultural tapestry of Udhagamandalam, where ancient traditions meet colonial heritage, and every mountain whispers tales of diverse communities who have called these hills home for centuries."
    },

    chapters: [
      {
        id: 1,
        title: "The Sacred Buffalo People",
        subtitle: "Toda Community & Their Ancient Ways",
        culturalMotifs: ["buffalo", "mandolin", "temple"],
        pattern: "toda-geometric",
        pages: [
          {
            title: "Children of the Hills",
            content: `In the misty heights of the Nilgiri Hills, where clouds dance with ancient shola trees, live the Todas - a pastoral community whose roots run deeper than the valleys themselves. For over a thousand years, these indigenous people have maintained their unique way of life, centered around their sacred relationship with buffaloes.

            The Todas, numbering around 1,600 today, are the original inhabitants of these hills. Their name comes from the Tamil word "Thodavar," meaning "those who live in the hills." Their distinctive dome-shaped huts, called "munds," dot the landscape like natural sculptures emerging from the earth itself.

            Their society is built around the concept of sacred dairying, where every aspect of buffalo care is ritualized and sacred. The Toda buffalo is not just livestock but a divine companion, integral to their spiritual and social identity. Each buffalo has a name, a lineage, and a sacred purpose.

            The community practices polyandry, where one woman may have multiple husbands, typically brothers. This unique social structure has helped maintain their small population and preserve their cultural identity through centuries of external pressures and changes.`,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
            audioClip: "https://example.com/toda-chant.mp3",
            culturalElements: [
              "Sacred buffalo herding traditions",
              "Dome-shaped architectural heritage",
              "Polyandrous family structures",
              "Ritual dairy practices",
              "Indigenous language preservation"
            ]
          },
          {
            title: "The Sacred Dairy Temples",
            content: `At the heart of Toda culture lie the sacred dairies, called "ti." These are not mere functional buildings but temples where the daily miracle of milk processing becomes a spiritual ceremony. The dairies are constructed using traditional techniques passed down through generations, without nails or modern tools.

            Only certain men, called "palol," are permitted to enter these sacred spaces. They undergo purification rituals and maintain strict dietary restrictions. The processing of milk into various products follows ancient protocols that have remained unchanged for centuries.

            The Todas produce several unique dairy products unknown elsewhere. "Putukuli" is a fermented cheese-like product with medicinal properties. "Avarai" is a clarified butter used in sacred ceremonies. Each product has its season, its ritual, and its spiritual significance.

            The architecture of these dairies reflects deep understanding of the local climate and materials. The curved walls and low doorways create natural temperature regulation, while the thatched roofs provide insulation using locally available grasses and bamboo.

            Women are traditionally excluded from these sacred spaces, but they play crucial roles in other aspects of dairy management and cultural preservation. This gender-based division of labor reflects the Toda understanding of complementary sacred responsibilities.`,
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
            audioClip: "https://example.com/dairy-ritual.mp3",
            culturalElements: [
              "Sacred dairy architecture",
              "Ritual purification practices",
              "Traditional food processing",
              "Gender-specific sacred roles",
              "Sustainable building techniques"
            ]
          },
          {
            title: "Songs of the Ancestors",
            content: `The Toda oral tradition is preserved through songs that serve as both entertainment and historical record. These songs, called "kwilm," contain genealogies, migration stories, and sacred knowledge passed down through generations.

            The songs are performed in a unique musical style using the "mandolin" - a simple stringed instrument that accompanies the melodic chanting. The melodies are hauntingly beautiful, echoing across the hills during festivals and ceremonies.

            Each song tells specific stories: creation myths explaining how the Todas came to the hills, love songs celebrating relationships, work songs that accompany daily activities, and sacred songs used in religious ceremonies. The language used in these songs is archaic Toda, preserving linguistic elements that have disappeared from everyday speech.

            Women are the primary keepers of certain types of songs, particularly lullabies and domestic songs, while men perform the ritual and historical songs. This division ensures that different aspects of cultural knowledge are preserved through various community members.

            Today, efforts are underway to record and preserve these songs, as the younger generation increasingly speaks Tamil and English rather than traditional Toda. Cultural preservation programs work with elders to document this irreplaceable oral heritage.`,
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
            audioClip: "https://example.com/toda-song.mp3",
            culturalElements: [
              "Oral history preservation",
              "Traditional musical instruments",
              "Ancestral language conservation",
              "Gender-specific cultural roles",
              "Intergenerational knowledge transfer"
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Echoes of the Raj",
        subtitle: "Colonial Heritage & Architectural Legacy",
        culturalMotifs: ["crown", "teacup", "church"],
        pattern: "victorian-ornate",
        pages: [
          {
            title: "The Summer Capital Dream",
            content: `In 1818, John Sullivan, the Collector of Coimbatore, climbed these mist-covered hills and envisioned something extraordinary: a summer retreat that would rival the finest European hill stations. What he created was not just a town, but a cultural phenomenon that would influence Indian hill station development for centuries.

            Sullivan's vision was ambitious and romantic. He imagined English gardens blooming in tropical mountains, Victorian architecture harmonizing with ancient landscapes, and a society that would blend British administrative efficiency with local knowledge and labor.

            The first British residents were administrators, military officers, and their families seeking respite from the oppressive heat of the plains. They brought with them not just their administrative systems but their entire way of life: English gardens, hunting parties, elaborate dinner traditions, and social hierarchies.

            The transformation was remarkable. Within decades, Ooty became the unofficial summer capital of the Madras Presidency. The Governor's residence, the club, the racecourse, and numerous bungalows created a little England in the heart of South India.

            This colonial vision required massive infrastructure development. Roads were carved through mountain slopes, water systems were engineered to supply the growing settlement, and the famous Nilgiri Mountain Railway was constructed to connect this mountain paradise with the world below.`,
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
            audioClip: "https://example.com/colonial-era.mp3",
            culturalElements: [
              "Administrative innovation",
              "Infrastructure development",
              "Social hierarchy establishment",
              "Architectural importation",
              "Economic transformation"
            ]
          },
          {
            title: "Gardens of Memory",
            content: `The Government Botanical Garden, established in 1848, represents more than horticultural achievement—it embodies the colonial attempt to recreate European landscapes in tropical mountains. The garden was designed by William Graham McIvor, whose vision was to create a living museum of global flora.

            The garden's layout follows Victorian principles of formal landscape design, with geometric patterns, symmetrical pathways, and carefully planned vistas. The Italian Garden section, with its terraced flower beds and ornamental features, reflects European aesthetic preferences adapted to local conditions.

            Beyond aesthetics, the garden served scientific and economic purposes. It functioned as an acclimatization center where European and temperate plants were tested for cultivation in Indian conditions. Many species that now seem native to Indian hill stations were first introduced through such colonial botanical experiments.

            The annual flower show, begun during the colonial period, became a social event that brought together the entire community. It was a display not just of horticultural achievement but of colonial prosperity and cultural sophistication.

            The garden also reflects the complex relationship between colonial science and local knowledge. While European botanists received credit for "discoveries," much of the practical cultivation knowledge came from local gardeners and indigenous plant experts whose contributions were rarely acknowledged.`,
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
            audioClip: "https://example.com/garden-history.mp3",
            culturalElements: [
              "Botanical experimentation",
              "Landscape design principles",
              "Scientific colonialism",
              "Cultural adaptation",
              "Knowledge appropriation"
            ]
          },
          {
            title: "Rails Through Time",
            content: `The Nilgiri Mountain Railway, completed in 1908, represents one of the most ambitious engineering projects of colonial India. More than a transportation system, it became a symbol of British technological superiority and their ability to conquer seemingly impossible terrain.

            The railway's construction required innovative engineering solutions. The rack and pinion system, imported from Switzerland, had to be adapted to Indian conditions. The route required 250 bridges and 16 tunnels, each representing significant engineering challenges in an era before modern machinery.

            The project employed thousands of workers, primarily local laborers who brought their own engineering knowledge and physical endurance to complement British technical expertise. The human cost was significant, with many workers losing their lives during the dangerous construction process.

            For passengers, the toy train journey became a cultural experience as much as transportation. The slow, scenic route allowed travelers to observe the changing landscape, from tropical forests to temperate grasslands, creating a sense of journey through different worlds.

            The railway also transformed local economies. Remote villages gained access to markets, tea estates could transport their produce efficiently, and tourism began to develop as the hills became more accessible to visitors from the plains.

            Today, the railway's UNESCO World Heritage status recognizes not just its engineering significance but its role in cultural and economic transformation of the region.`,
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
            audioClip: "https://example.com/train-whistle.mp3",
            culturalElements: [
              "Engineering innovation",
              "Cross-cultural collaboration",
              "Economic transformation",
              "Tourism development",
              "Heritage preservation"
            ]
          }
        ]
      },
      {
        id: 3,
        title: "The Tea Gardens' Tale",
        subtitle: "Plantation Culture & Community",
        culturalMotifs: ["tealeaf", "basket", "cottage"],
        pattern: "plantation-stripes",
        pages: [
          {
            title: "Green Gold of the Hills",
            content: `The transformation of Ooty's landscape through tea cultivation represents one of the most significant cultural and environmental changes in the region's history. What began as an experiment in the 1850s became a dominant economic force that shaped the social fabric of the entire district.

            Tea cultivation in the Nilgiris was initially attempted by British planters who recognized the similarity between these hills and the tea-growing regions of China and Ceylon. The climate, elevation, and soil conditions proved ideal for producing high-quality tea with a distinctive bright, citrusy flavor.

            The establishment of tea estates required massive landscape modification. Forests were cleared, terraces were carved into hillsides, and entire watersheds were altered to support irrigation systems. This transformation created the iconic stepped landscape that defines Ooty today.

            Labor for the plantations came primarily from Tamil Nadu and Kerala, creating new communities in the hills. Workers brought their own cultural traditions, languages, and social structures, adding new layers to the region's cultural complexity.

            The plantation system established a unique social hierarchy. British managers lived in large bungalows with extensive gardens, while Tamil and Malayali workers lived in estate housing called "lines." This system created distinct cultural enclaves within the broader Ooty community.`,
            image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
            audioClip: "https://example.com/tea-picking.mp3",
            culturalElements: [
              "Agricultural innovation",
              "Landscape transformation",
              "Labor migration patterns",
              "Social stratification",
              "Cultural diversity"
            ]
          },
          {
            title: "Hands that Harvest Dreams",
            content: `The tea pickers of Ooty, predominantly women, represent a unique cultural community whose skills and knowledge have shaped the quality of Nilgiri tea for generations. Their expertise in selecting the perfect "two leaves and a bud" requires years of training and an intimate understanding of the tea plant's rhythms.

            These women, many of whose families have worked on tea estates for generations, have developed their own cultural traditions within the plantation system. Their songs, sung while picking tea, create rhythms that make the work more bearable and help maintain the steady pace required for quality harvesting.

            The tea-picking community has preserved traditional knowledge about weather patterns, plant health, and optimal harvesting times. This knowledge, passed down through generations, often proves more accurate than modern meteorological predictions.

            Living conditions in the estate lines have evolved over time, but the community structure remains strong. Extended families often work on the same estates, creating multi-generational connections to specific tea gardens and particular plots of land.

            Women tea pickers have also become cultural ambassadors, sharing their knowledge with visitors through estate tours and tea tasting sessions. Their expertise in explaining the nuances of tea processing and their stories of plantation life provide authentic insights into this important aspect of Ooty's heritage.

            The community faces modern challenges as younger generations seek education and opportunities beyond the plantations, raising questions about the preservation of traditional tea cultivation knowledge.`,
            image: "https://images.unsplash.com/photo-1597450901350-fa8c0e48f36b?w=800&h=600&fit=crop",
            audioClip: "https://example.com/picking-songs.mp3",
            culturalElements: [
              "Traditional craftsmanship",
              "Intergenerational knowledge",
              "Work songs and rhythms",
              "Community solidarity",
              "Cultural adaptation"
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Festivals of Unity",
        subtitle: "Celebrations Across Communities",
        culturalMotifs: ["rangoli", "lamp", "flower"],
        pattern: "festival-mandala",
        pages: [
          {
            title: "The Convergence of Traditions",
            content: `Ooty's unique position as a meeting point of different cultures has created a festival calendar that reflects remarkable diversity and adaptation. Throughout the year, Hindu festivals blend with Christian celebrations, tribal rituals occur alongside colonial commemorations, and new fusion traditions emerge from cross-cultural interaction.

            The Toda festivals, particularly the "Mod" (harvest) celebrations, represent the oldest continuous cultural traditions in the region. These festivals involve complex rituals related to buffalo worship, dairy ceremonies, and seasonal transitions. The entire community participates in elaborate preparations that can last for days.

            Christian festivals, introduced during the colonial period, have taken on local characteristics. Christmas celebrations in Ooty churches feature Tamil carols, local decorations using indigenous flowers and plants, and feast preparations that blend European traditions with South Indian cuisine.

            Hindu festivals like Diwali, Dussehra, and Pongal are celebrated with unique hill station adaptations. The cooler climate allows for different decorative traditions, and the multicultural environment means that festivals often include participants from various communities.

            The annual Summer Festival, established during the colonial period, has evolved into a celebration that showcases the cultural diversity of Ooty. It features traditional Toda performances, classical Indian music and dance, contemporary arts, and international cultural presentations.

            What makes Ooty's festival culture unique is the way different communities participate in each other's celebrations. It's common to see British descendants attending Toda ceremonies, Tamil families enjoying Christmas celebrations, and Toda youth participating in contemporary cultural events.`,
            image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&h=600&fit=crop",
            audioClip: "https://example.com/festival-music.mp3",
            culturalElements: [
              "Cultural syncretism",
              "Seasonal celebrations",
              "Community participation",
              "Traditional adaptations",
              "Inter-cultural exchange"
            ]
          }
        ]
      }
    ],

    glossary: {
      "Munds": {
        definition: "Traditional dome-shaped huts of the Toda people, built without nails using bamboo and grass",
        pronunciation: "muːndz",
        significance: "Sacred architecture representing Toda cosmology and sustainable building practices"
      },
      "Palol": {
        definition: "Sacred dairy priests among the Todas who perform ritual milk processing",
        pronunciation: "pɑːloːl",
        significance: "Maintains spiritual connection between community and sacred buffaloes"
      },
      "Kwilm": {
        definition: "Traditional Toda songs that preserve oral history and cultural knowledge",
        pronunciation: "kwɪlm",
        significance: "Primary method of cultural transmission across generations"
      },
      "Putukuli": {
        definition: "Fermented cheese-like dairy product unique to Toda culture",
        pronunciation: "putukulɪ",
        significance: "Sacred food with medicinal properties, central to Toda dietary traditions"
      },
      "Shola": {
        definition: "Tropical montane forest ecosystem unique to the Western Ghats",
        pronunciation: "ʃoːlɑː",
        significance: "Sacred groves that provide spiritual and ecological foundation for local cultures"
      }
    },

    audioNarration: {
      narrator: "Dr. Kamala Krishnamurthy, Cultural Anthropologist",
      languages: ["English", "Tamil", "Toda"],
      backgroundMusic: "Traditional Nilgiri folk melodies"
    }
  };

  // Chapter navigation
  const nextChapter = () => {
    if (currentChapter < culturalStories.chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      setCurrentPage(0);
    }
  };

  const previousChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setCurrentPage(0);
    }
  };

  const nextPage = () => {
    const chapter = culturalStories.chapters[currentChapter];
    if (currentPage < chapter.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      nextChapter();
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (currentChapter > 0) {
      previousChapter();
      const prevChapter = culturalStories.chapters[currentChapter - 1];
      setCurrentPage(prevChapter.pages.length - 1);
    }
  };

  // Audio controls
  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setAudioPlaying(!audioPlaying);
    }
  };

  // Bookmark system
  const toggleBookmark = () => {
    const bookmarkId = `${currentChapter}-${currentPage}`;
    const newBookmarks = new Set(bookmarks);
    if (newBookmarks.has(bookmarkId)) {
      newBookmarks.delete(bookmarkId);
    } else {
      newBookmarks.add(bookmarkId);
    }
    setBookmarks(newBookmarks);
  };

  // Reading progress tracking
  useEffect(() => {
    const totalPages = culturalStories.chapters.reduce((total, chapter) => total + chapter.pages.length, 0);
    const currentPageNumber = culturalStories.chapters
      .slice(0, currentChapter)
      .reduce((total, chapter) => total + chapter.pages.length, 0) + currentPage + 1;
    setReadingProgress((currentPageNumber / totalPages) * 100);
  }, [currentChapter, currentPage]);

  const currentChapterData = culturalStories.chapters[currentChapter];
  const currentPageData = currentChapterData?.pages[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative">
      {/* Cultural Pattern Overlay */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-amber-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Navigation Header */}
      <header className="fixed top-2 left-0 right-0 z-40 px-4">
        <div className="container mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-amber-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6 text-amber-600" />
                <span className="font-bold text-amber-800">Cultural Chronicles</span>
              </div>

              <div className="flex items-center space-x-4">
                {/* Chapter Progress */}
                <div className="hidden md:flex items-center space-x-2">
                  <span className="text-sm text-amber-600">
                    Chapter {currentChapter + 1} of {culturalStories.chapters.length}
                  </span>
                  <div className="w-24 h-2 bg-amber-200 rounded-full">
                    <div 
                      className="h-full bg-amber-500 rounded-full transition-all duration-300"
                      style={{ width: `${((currentPage + 1) / currentChapterData.pages.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Audio Control */}
                <button
                  onClick={toggleAudio}
                  className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 transition-colors duration-300"
                >
                  {audioPlaying ? <Pause className="w-4 h-4 text-amber-600" /> : <Play className="w-4 h-4 text-amber-600" />}
                </button>

                {/* Bookmark */}
                <button
                  onClick={toggleBookmark}
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    bookmarks.has(`${currentChapter}-${currentPage}`)
                      ? 'bg-red-100 text-red-600'
                      : 'bg-amber-100 text-amber-600 hover:bg-amber-200'
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                </button>

                {/* Glossary Toggle */}
                <button
                  onClick={() => setShowGlossary(!showGlossary)}
                  className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 transition-colors duration-300"
                >
                  <Search className="w-4 h-4 text-amber-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Story Content */}
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Chapter Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${
                currentChapterData.culturalMotifs.includes('buffalo') ? 'from-green-500 to-blue-500' :
                currentChapterData.culturalMotifs.includes('crown') ? 'from-purple-500 to-pink-500' :
                currentChapterData.culturalMotifs.includes('tealeaf') ? 'from-green-600 to-yellow-500' :
                'from-orange-500 to-red-500'
              } flex items-center justify-center`}>
                {currentChapterData.culturalMotifs.includes('buffalo') ? <TreePine className="w-6 h-6 text-white" /> :
                 currentChapterData.culturalMotifs.includes('crown') ? <Crown className="w-6 h-6 text-white" /> :
                 currentChapterData.culturalMotifs.includes('tealeaf') ? <Coffee className="w-6 h-6 text-white" /> :
                 <Heart className="w-6 h-6 text-white" />}
              </div>
              <div className="text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-amber-800">
                  {currentChapterData.title}
                </h1>
                <p className="text-lg text-amber-600 italic">
                  {currentChapterData.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Story Page */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-amber-200">
              {/* Page Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={currentPageData.image}
                  alt={currentPageData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{currentPageData.title}</h2>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      Page {currentPage + 1} of {currentChapterData.pages.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Page Content */}
              <div className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  {currentPageData.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6 text-justify">
                      {paragraph.split(' ').map((word, wordIndex) => {
                        const cleanWord = word.replace(/[.,!?]/g, '');
                        const isGlossaryWord = culturalStories.glossary[cleanWord];
                        return (
                          <span key={wordIndex}>
                            {isGlossaryWord ? (
                              <span
                                className="text-amber-600 hover:text-amber-800 cursor-pointer underline decoration-dotted"
                                onClick={() => setSelectedWord(cleanWord)}
                              >
                                {word}
                              </span>
                            ) : (
                              word
                            )}
                            {wordIndex < paragraph.split(' ').length - 1 ? ' ' : ''}
                          </span>
                        );
                      })}
                    </p>
                  ))}
                </div>

                {/* Cultural Elements */}
                <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
                  <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center">
                    <Palette className="w-5 h-5 mr-2" />
                    Cultural Elements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentPageData.culturalElements.map((element, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full" />
                        <span className="text-sm text-amber-700">{element}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote Highlight */}
                <div className="mt-8 p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl border-l-4 border-orange-500">
                  <Quote className="w-8 h-8 text-orange-500 mb-3" />
                  <p className="text-lg italic text-orange-800 leading-relaxed">
                    "Every tradition in Ooty tells a story of adaptation, preservation, and the beautiful complexity that emerges when cultures meet in harmony."
                  </p>
                  <p className="text-sm text-orange-600 mt-3">
                    — {culturalStories.audioNarration.narrator}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8 max-w-4xl mx-auto">
            <button
              onClick={previousPage}
              disabled={currentChapter === 0 && currentPage === 0}
              className="flex items-center space-x-2 px-6 py-3 bg-amber-100 hover:bg-amber-200 disabled:bg-gray-100 disabled:text-gray-400 text-amber-700 rounded-full transition-all duration-300 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <div className="flex items-center space-x-2">
              {currentChapterData.pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage ? 'bg-amber-500' : 'bg-amber-200 hover:bg-amber-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentChapter === culturalStories.chapters.length - 1 && 
                        currentPage === currentChapterData.pages.length - 1}
              className="flex items-center space-x-2 px-6 py-3 bg-amber-100 hover:bg-amber-200 disabled:bg-gray-100 disabled:text-gray-400 text-amber-700 rounded-full transition-all duration-300 disabled:cursor-not-allowed"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      {/* Glossary Sidebar */}
      {showGlossary && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 border-l border-amber-200">
          <div className="p-6 border-b border-amber-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-amber-800">Cultural Glossary</h3>
              <button
                onClick={() => setShowGlossary(false)}
                className="p-2 hover:bg-amber-100 rounded-full transition-colors duration-300"
              >
                <X className="w-5 h-5 text-amber-600" />
              </button>
            </div>
          </div>
          <div className="p-6 overflow-y-auto h-full pb-20">
            {Object.entries(culturalStories.glossary).map(([term, data]) => (
              <div key={term} className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">{term}</h4>
                <p className="text-sm text-amber-600 mb-2">/{data.pronunciation}/</p>
                <p className="text-gray-700 text-sm mb-3">{data.definition}</p>
                <p className="text-xs text-amber-600 italic">{data.significance}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Word Popup */}
      {selectedWord && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-amber-800">{selectedWord}</h3>
              <button
                onClick={() => setSelectedWord(null)}
                className="p-2 hover:bg-amber-100 rounded-full transition-colors duration-300"
              >
                <X className="w-5 h-5 text-amber-600" />
              </button>
            </div>
            <div className="space-y-3">
              <p className="text-amber-600">/{culturalStories.glossary[selectedWord].pronunciation}/</p>
              <p className="text-gray-700">{culturalStories.glossary[selectedWord].definition}</p>
              <p className="text-sm text-amber-600 italic">{culturalStories.glossary[selectedWord].significance}</p>
            </div>
          </div>
        </div>
      )}

      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src={currentPageData?.audioClip} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default LocalCultureStorytellingTheme;