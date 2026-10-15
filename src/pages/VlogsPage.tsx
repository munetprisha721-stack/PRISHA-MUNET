import React, { useState, useMemo } from 'react';
import { VideoCard } from '../components/VideoCard';
import { VideoModal } from '../components/VideoModal';
import { VLOG_VIDEOS } from '../data/vlogs';
import { VlogVideo } from '../types';
import { Video, Filter, PlusCircle, Check, Flame, Play } from 'lucide-react';
import { PageTrendingKeywords } from '../components/PageTrendingKeywords';
import { SITE_STATIC_PAGES_SEO } from '../utils/seo';

export const VlogsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalVideo, setActiveModalVideo] = useState<VlogVideo | null>(null);

  // Allow creator to add custom video in-memory during session
  const [allVideos, setAllVideos] = useState<VlogVideo[]>(VLOG_VIDEOS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newCat, setNewCat] = useState<any>('Street Food Tours');
  const [addSuccess, setAddSuccess] = useState(false);

  const categories = [
    'All',
    'Street Food Tours',
    'Restaurant Visits',
    'Cooking Videos',
    'Dessert Trails',
    'Food Challenges',
    'Travel Food Diaries',
  ];

  const featuredVlog = useMemo(() => allVideos[0], [allVideos]);

  const filteredVideos = useMemo(() => {
    if (selectedCategory === 'All') return allVideos;
    return allVideos.filter((v) => v.category === selectedCategory);
  }, [allVideos, selectedCategory]);

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) return;

    // Extract ID
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = newUrl.match(regExp);
    const ytId = match && match[2].length === 11 ? match[2] : undefined;

    const newEntry: VlogVideo = {
      id: `vlog-custom-${Date.now()}`,
      title: newTitle.trim(),
      description: newDesc.trim() || 'Uploaded video dispatch from the field.',
      category: newCat,
      duration: 'Creator Video',
      thumbnail: '/src/assets/images/hero_indian_feast_1792023725138.jpg',
      youtubeId: ytId,
      location: 'Field Dispatch',
    };

    setAllVideos([newEntry, ...allVideos]);
    setNewTitle('');
    setNewDesc('');
    setNewUrl('');
    setAddSuccess(true);
    setTimeout(() => {
      setAddSuccess(false);
      setShowAddForm(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#35271F]/10">
        <div className="space-y-3">
          <span className="text-xs uppercase font-bold tracking-wider text-[#B83A24]">
            Motion & Street Soundscapes
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#35271F]">
            TasteTrails Food Vlogs
          </h1>
          <p className="text-[#78685D] text-sm sm:text-base max-w-2xl leading-relaxed">
            Travel along our street food crawls, kitchen masterclasses, and dessert quests with verified high-definition video embeds.
          </p>
        </div>

        {/* Add Video Trigger */}
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#35271F] hover:bg-[#201712] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-sm self-start md:self-auto shrink-0"
        >
          <PlusCircle className="w-4 h-4 text-[#F4A62A]" />
          <span>{showAddForm ? 'Close Add Video' : 'Add Food Vlog URL'}</span>
        </button>
      </div>

      {/* Page Trending & Two Related Keywords */}
      <PageTrendingKeywords
        seo={SITE_STATIC_PAGES_SEO.vlogs}
        trendingLabel="Trending Video Expeditions"
      />

      {/* Trending Vlog Spotlight */}
      {selectedCategory === 'All' && !showAddForm && (
        <section className="bg-gradient-to-r from-[#B83A24]/10 via-[#F4A62A]/10 to-[#FFF6E8] p-6 rounded-2xl border border-[#B83A24]/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div
              className="relative w-full md:w-1/3 aspect-video rounded-xl overflow-hidden shadow-md cursor-pointer group shrink-0"
              onClick={() => setActiveModalVideo(featuredVlog)}
            >
              <img
                src={featuredVlog.thumbnail}
                alt={`${featuredVlog.title} - Trending street food vlog thumbnail`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#B83A24] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
              </div>
              <span className="absolute top-2 left-2 bg-[#B83A24] text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                #1 Trending Vlog
              </span>
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B83A24] flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 fill-[#B83A24]" /> Trending Video Expedition
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#35271F] leading-snug">
                What is This Week's Top Trending Street Food Vlog?
              </h2>
              <p className="text-xs sm:text-sm text-[#78685D] leading-relaxed">
                Our featured video expedition spotlights <strong>{featuredVlog.title}</strong> in {featuredVlog.location} ({featuredVlog.duration}). {featuredVlog.description}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setActiveModalVideo(featuredVlog)}
                  className="px-4 py-2 bg-[#B83A24] hover:bg-[#9d301d] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
                  aria-label={`Watch video: ${featuredVlog.title}`}
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Watch Video: {featuredVlog.title}</span>
                </button>
                <div className="flex items-center gap-2 text-xs text-[#78685D]">
                  <span>Duration: {featuredVlog.duration}</span>
                  <span>·</span>
                  <span>Location: {featuredVlog.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Add Custom Video Form (PRD Section 8) */}
      {showAddForm && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#35271F]/15 shadow-md space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-bold text-[#35271F]">
              Add a YouTube Food Vlog
            </h3>
            <span className="text-xs text-[#78685D]">
              Directly embed a valid YouTube video into the gallery
            </span>
          </div>

          {addSuccess ? (
            <div className="p-4 bg-[#284B36]/10 text-[#284B36] rounded-xl flex items-center gap-2 text-sm font-semibold">
              <Check className="w-5 h-5" />
              <span>Video successfully added to your TasteTrails gallery!</span>
            </div>
          ) : (
            <form onSubmit={handleAddVideo} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#35271F] mb-1">
                    Video Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g., Street Food Crawl in Amritsar"
                    className="w-full px-3 py-2 bg-[#FFF6E8]/40 border border-[#35271F]/15 rounded-lg text-xs text-[#35271F] focus:outline-none focus:border-[#B83A24]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#35271F] mb-1">
                    YouTube URL *
                  </label>
                  <input
                    type="text"
                    required
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full px-3 py-2 bg-[#FFF6E8]/40 border border-[#35271F]/15 rounded-lg text-xs text-[#35271F] focus:outline-none focus:border-[#B83A24]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#35271F] mb-1">
                    Category
                  </label>
                  <select
                    value={newCat}
                    onChange={(e) => setNewCat(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FFF6E8]/40 border border-[#35271F]/15 rounded-lg text-xs text-[#35271F] focus:outline-none focus:border-[#B83A24]"
                  >
                    {categories.filter((c) => c !== 'All').map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#35271F] mb-1">
                    Short Description
                  </label>
                  <input
                    type="text"
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    placeholder="Brief summary of stalls and dishes featured"
                    className="w-full px-3 py-2 bg-[#FFF6E8]/40 border border-[#35271F]/15 rounded-lg text-xs text-[#35271F] focus:outline-none focus:border-[#B83A24]"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#B83A24] hover:bg-[#9d301d] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
                >
                  Publish Video to Gallery
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <span className="text-xs text-[#78685D] font-medium flex items-center gap-1 shrink-0 mr-1">
          <Filter className="w-3.5 h-3.5" /> Category:
        </span>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                isSelected
                  ? 'bg-[#B83A24] text-white shadow-xs'
                  : 'bg-white text-[#35271F]/80 hover:bg-[#FFF6E8] border border-[#35271F]/10'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Video Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onPlay={(v) => setActiveModalVideo(v)}
          />
        ))}
      </div>

      {/* Player Modal */}
      <VideoModal
        video={activeModalVideo}
        onClose={() => setActiveModalVideo(null)}
      />
    </div>
  );
};
