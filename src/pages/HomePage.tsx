import React, { useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { CategoryNav } from '../components/CategoryNav';
import { ArticleCard } from '../components/ArticleCard';
import { RecipeCard } from '../components/RecipeCard';
import { RecipeOfTheWeek } from '../components/RecipeOfTheWeek';
import { VideoCard } from '../components/VideoCard';
import { Newsletter } from '../components/Newsletter';
import { VideoModal } from '../components/VideoModal';
import { BookmarkButton } from '../components/BookmarkButton';
import { ARTICLES } from '../data/articles';
import { RECIPES } from '../data/recipes';
import { VLOG_VIDEOS } from '../data/vlogs';
import { VlogVideo } from '../types';
import { ArrowRight, Clock, Sparkles, Video, BookOpen, UtensilsCrossed } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedVideo, setSelectedVideo] = useState<VlogVideo | null>(null);
  const [featuredImgError, setFeaturedImgError] = useState(false);

  // Featured Article: Blog 1 (Indian Street Food)
  const featuredArticle = ARTICLES[0];

  // Trending discoveries (6 Editor's Picks)
  const trendingArticles = ARTICLES.filter((a) => a.trending).slice(0, 6);

  // Recipe of the week: Restaurant Butter Chicken
  const recipeOfWeek = RECIPES[0];

  // Latest vlogs for video section (first 4)
  const featuredVlogs = VLOG_VIDEOS.slice(0, 4);

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <HeroSection
        onExplore={() => onNavigate('#/explore')}
        onWatchVlogs={() => onNavigate('#/vlogs')}
      />

      {/* C. Featured Food Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-[#F4A62A]" />
          <span className="text-xs uppercase font-bold tracking-wider text-[#B83A24]">
            Lead Editorial Feature
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-[#35271F]/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Featured Image */}
            <div
              className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#35271F] cursor-pointer"
              onClick={() => onNavigate(`#/article/${featuredArticle.slug}`)}
            >
              {!featuredImgError ? (
                <img
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  referrerPolicy="no-referrer"
                  onError={() => setFeaturedImgError(true)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#35271F]">
                  <UtensilsCrossed className="w-16 h-16 text-white/30" />
                </div>
              )}
              <div className="absolute top-4 left-4 bg-[#B83A24] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow-sm">
                Featured Story
              </div>
            </div>

            {/* Featured Body */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B83A24]">
                    {featuredArticle.category}
                  </span>
                  <BookmarkButton slug={featuredArticle.slug} size="md" showLabel />
                </div>

                <h2
                  onClick={() => onNavigate(`#/article/${featuredArticle.slug}`)}
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#35271F] hover:text-[#B83A24] transition-colors cursor-pointer leading-tight"
                >
                  {featuredArticle.title}
                </h2>

                <p className="text-[#78685D] text-sm sm:text-base leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[#35271F]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-[#78685D]">
                  <span className="font-semibold text-[#35271F] block">{featuredArticle.author.name}</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3 h-3 text-[#35271F]/40" />
                    <span>{featuredArticle.readingTime}</span>
                    <span>·</span>
                    <span>{featuredArticle.publishedDate}</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate(`#/article/${featuredArticle.slug}`)}
                  className="px-5 py-2.5 bg-[#B83A24] hover:bg-[#9d301d] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. Trending Food Discoveries (Editor's Picks) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#B83A24] block mb-1">
              Curated Highlights
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#35271F]">
              Trending Food Discoveries (Editor's Picks)
            </h2>
          </div>
          <button
            onClick={() => onNavigate('#/explore')}
            className="text-xs font-semibold uppercase tracking-wider text-[#B83A24] hover:text-[#9d301d] flex items-center gap-1"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onSelect={(slug) => onNavigate(`#/article/${slug}`)}
            />
          ))}
        </div>
      </section>

      {/* E. Explore by Category */}
      <CategoryNav
        onSelectCategory={(category) =>
          onNavigate(`#/explore?cat=${encodeURIComponent(category)}`)
        }
      />

      {/* H. Recipe of the Week */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RecipeOfTheWeek
          recipe={recipeOfWeek}
          onSelect={(slug) => onNavigate(`#/recipe/${slug}`)}
        />
      </div>

      {/* G. Watch the Latest Food Vlogs */}
      <section className="bg-[#35271F] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Video className="w-4 h-4 text-[#F4A62A]" />
                <span className="text-xs uppercase font-bold tracking-wider text-[#F4A62A]">
                  Visual Expeditions
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Watch the Latest Food Vlogs
              </h2>
            </div>
            <button
              onClick={() => onNavigate('#/vlogs')}
              className="text-xs font-semibold uppercase tracking-wider text-[#F4A62A] hover:underline flex items-center gap-1"
            >
              <span>Explore All Vlogs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVlogs.map((vlog) => (
              <VideoCard
                key={vlog.id}
                video={vlog}
                onPlay={(v) => setSelectedVideo(v)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* F. Latest Blog Posts (All 12 Articles in responsive grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BookOpen className="w-4 h-4 text-[#B83A24]" />
              <span className="text-xs uppercase font-bold tracking-wider text-[#B83A24]">
                The Complete Journal
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#35271F]">
              All 12 Food Articles & Stories
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#78685D] max-w-sm">
            Read complete essays spanning street food, biryani traditions, restaurant critique ethics, and camera secrets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onSelect={(slug) => onNavigate(`#/article/${slug}`)}
            />
          ))}
        </div>
      </section>

      {/* I. Newsletter Section */}
      <Newsletter />

      {/* Video Modal Player */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};
