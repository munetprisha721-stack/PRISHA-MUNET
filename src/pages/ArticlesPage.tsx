import React, { useState, useMemo, useEffect } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { ARTICLES } from '../data/articles';
import { CATEGORIES_LIST } from '../components/CategoryNav';
import { Search, Filter, ArrowUpDown, X, BookOpen } from 'lucide-react';

interface ArticlesPageProps {
  initialCategory?: string;
  onNavigate: (path: string) => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({
  initialCategory,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || 'All'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest');

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = ['All', ...CATEGORIES_LIST.map((c) => c.name)];

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;

      const normalizedQuery = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !normalizedQuery ||
        article.title.toLowerCase().includes(normalizedQuery) ||
        article.excerpt.toLowerCase().includes(normalizedQuery) ||
        article.tags.some((t) => t.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      }
      if (sortBy === 'oldest') {
        return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
      }
      return a.title.localeCompare(b.title);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs uppercase font-bold tracking-wider text-[#B83A24]">
          The TasteTrails Archive
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#35271F]">
          Explore Food Stories & Guides
        </h1>
        <p className="text-[#78685D] text-sm sm:text-base max-w-2xl leading-relaxed">
          Browse our complete collection of 12 in-depth articles exploring street gastronomy, regional spice science, restaurant critique ethics, and food vlogging.
        </p>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="bg-white p-5 rounded-2xl border border-[#35271F]/10 shadow-xs space-y-4">
        {/* Top Controls: Search & Sort */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#35271F]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by title, ingredients, or tags..."
              className="w-full pl-10 pr-9 py-2.5 bg-[#FFF6E8]/40 border border-[#35271F]/15 rounded-lg text-xs sm:text-sm text-[#35271F] placeholder-[#35271F]/40 focus:outline-none focus:border-[#B83A24]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#35271F]/40 hover:text-[#35271F]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-2 shrink-0 text-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#35271F]/50" />
            <span className="text-[#78685D] font-medium">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FFF6E8]/40 border border-[#35271F]/15 rounded-lg px-3 py-2 text-xs text-[#35271F] font-semibold focus:outline-none focus:border-[#B83A24]"
            >
              <option value="newest">Latest Articles</option>
              <option value="oldest">Earliest Published</option>
              <option value="title">Title (A to Z)</option>
            </select>
          </div>
        </div>

        {/* Category Filter Chips / Tabs (Functional Interactive Controls) */}
        <div className="pt-2 border-t border-[#35271F]/10 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <span className="text-xs text-[#78685D] font-medium flex items-center gap-1 shrink-0 mr-1">
            <Filter className="w-3 h-3" /> Category:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-[#B83A24] text-white shadow-xs'
                    : 'bg-[#FFF6E8] text-[#35271F]/80 hover:bg-[#35271F]/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Reset */}
      <div className="flex items-center justify-between text-xs text-[#78685D]">
        <span>
          Showing <strong className="text-[#35271F]">{filteredArticles.length}</strong> of{' '}
          {ARTICLES.length} stories
        </span>
        {(selectedCategory !== 'All' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-[#B83A24] font-semibold hover:underline flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="p-16 text-center bg-white rounded-2xl border border-[#35271F]/10 space-y-3">
          <BookOpen className="w-10 h-10 mx-auto text-[#B83A24]/30" />
          <h3 className="font-serif text-xl font-bold text-[#35271F]">
            No matching food stories found
          </h3>
          <p className="text-xs text-[#78685D] max-w-md mx-auto">
            We couldn't find any articles matching your search criteria. Try choosing another category or clearing your search query.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-2 px-4 py-2 bg-[#B83A24] text-white text-xs font-semibold uppercase tracking-wider rounded-lg"
          >
            Show All 12 Articles
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
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
