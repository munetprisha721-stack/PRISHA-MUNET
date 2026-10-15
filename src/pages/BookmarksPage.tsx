import React, { useState, useEffect } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { ARTICLES } from '../data/articles';
import { getBookmarkedSlugs, toggleArticleBookmark } from '../utils/storage';
import { Article } from '../types';
import { Bookmark, Trash2, ArrowRight } from 'lucide-react';

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
            Your saved recipes, street food itineraries, and culinary essays stored locally in your browser.
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
