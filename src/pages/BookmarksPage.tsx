import React, { useState, useEffect, useMemo } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { ARTICLES } from '../data/articles';
import { getBookmarkedSlugs, toggleArticleBookmark } from '../utils/storage';
import { Article } from '../types';
import { Bookmark, Trash2, ArrowRight, Flame, Sparkles } from 'lucide-react';
import { PageTrendingKeywords } from '../components/PageTrendingKeywords';
import { SITE_STATIC_PAGES_SEO } from '../utils/seo';

interface BookmarksPageProps {
  onNavigate: (path: string) => void;
}

export const BookmarksPage: React.FC<BookmarksPageProps> = ({ onNavigate }) => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Article[]>([]);

  const loadBookmarks = () => {
    const slugs = getBookmarkedSlugs();
    const matches = ARTICLES.filter((a) => slugs.includes(a.slug));
    setBookmarkedArticles(matches);
  };

  useEffect(() => {
    loadBookmarks();
    const handleUpdate = () => loadBookmarks();
    window.addEventListener('tastetrails_bookmarks_updated', handleUpdate);
    return () => window.removeEventListener('tastetrails_bookmarks_updated', handleUpdate);
  }, []);

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all saved articles?')) {
      localStorage.removeItem('tastetrails_bookmarked_slugs');
      window.dispatchEvent(new Event('tastetrails_bookmarks_updated'));
      setBookmarkedArticles([]);
    }
  };

  const trendingSuggestions = useMemo(() => {
    return ARTICLES.filter((a) => a.trending).slice(0, 3);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#35271F]/10 gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-[#B83A24] fill-[#B83A24]" />
            <span className="text-xs uppercase font-bold tracking-wider text-[#B83A24]">
              Personal Reading List
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#35271F]">
            Saved Food Stories
          </h1>
          <p className="text-[#78685D] text-sm sm:text-base max-w-2xl leading-relaxed">
            Your saved recipes, street food itineraries, and culinary essays stored locally in your browser for quick offline reference.
          </p>
        </div>

        {bookmarkedArticles.length > 0 && (
          <button
            onClick={handleClearAll}
            className="inline-flex items-center gap-1.5 text-xs text-[#B83A24] hover:text-[#9d301d] font-semibold p-2 rounded hover:bg-[#B83A24]/10 transition-colors self-start sm:self-auto"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear All Saved Stories</span>
          </button>
        )}
      </div>

      {/* Page Trending & Two Related Keywords */}
      <PageTrendingKeywords
        seo={SITE_STATIC_PAGES_SEO.bookmarks}
        trendingLabel="Trending Reader Library"
      />

      {/* Trending Bookmarked Reads */}
      <section className="bg-gradient-to-r from-[#B83A24]/10 via-[#F4A62A]/10 to-[#FFF6E8] p-5 sm:p-6 rounded-2xl border border-[#B83A24]/20 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#B83A24] text-white flex items-center justify-center">
              <Flame className="w-4 h-4 fill-white" />
            </div>
            <h2 className="font-serif text-base sm:text-lg font-bold text-[#35271F]">
              Which Food Stories Are Most Frequently Bookmarked by Readers?
            </h2>
          </div>
          <span className="text-xs text-[#78685D] uppercase font-semibold hidden sm:inline">
            Popular Selections
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#78685D]">
          Discover the most popular offline culinary reads chosen by the TasteTrails community, including essential Delhi chaat guides and Mughlai recipe secrets.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {trendingSuggestions.map((art) => (
            <a
              key={art.id}
              href={`#/article/${art.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`#/article/${art.slug}`);
              }}
              className="bg-white/80 hover:bg-white p-3 rounded-xl border border-[#35271F]/10 cursor-pointer transition-all hover:shadow-xs group block"
              aria-label={`Read bookmarked recommendation: ${art.title}`}
            >
              <span className="text-[10px] uppercase font-bold text-[#B83A24] block mb-1">
                {art.category}
              </span>
              <h3 className="font-serif text-xs font-bold text-[#35271F] group-hover:text-[#B83A24] transition-colors line-clamp-1">
                {art.title}
              </h3>
              <p className="text-[11px] text-[#78685D] mt-1 line-clamp-1 group-hover:text-[#B83A24]">
                Read {art.readingTime} story by {art.author.name} →
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Grid or Empty State */}
      {bookmarkedArticles.length === 0 ? (
        <div className="p-16 text-center bg-white rounded-2xl border border-[#35271F]/10 space-y-4 max-w-xl mx-auto">
          <div className="w-14 h-14 bg-[#B83A24]/10 rounded-full flex items-center justify-center mx-auto text-[#B83A24]">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#35271F]">
            Your reading list is empty
          </h3>
          <p className="text-sm text-[#78685D] leading-relaxed">
            Whenever you encounter an article or recipe you'd like to revisit, tap the bookmark icon to save it here for offline reference.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('#/explore')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#B83A24] hover:bg-[#9d301d] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
            >
              <span>Explore All 12 Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onSelect={(slug) => onNavigate(`#/article/${slug}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
