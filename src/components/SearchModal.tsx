import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Utensils, Star, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { RECIPES } from '../data/recipes';
import { RESTAURANT_REVIEWS } from '../data/reviews';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const filteredArticles = normalizedQuery
    ? ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(normalizedQuery) ||
          a.excerpt.toLowerCase().includes(normalizedQuery) ||
          a.category.toLowerCase().includes(normalizedQuery) ||
          a.tags.some((t) => t.toLowerCase().includes(normalizedQuery))
      )
    : [];

  const filteredRecipes = normalizedQuery
    ? RECIPES.filter(
        (r) =>
          r.name.toLowerCase().includes(normalizedQuery) ||
          r.cuisine.toLowerCase().includes(normalizedQuery) ||
          r.dishType.toLowerCase().includes(normalizedQuery) ||
          r.description.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const filteredReviews = normalizedQuery
    ? RESTAURANT_REVIEWS.filter(
        (rev) =>
          rev.name.toLowerCase().includes(normalizedQuery) ||
          rev.city.toLowerCase().includes(normalizedQuery) ||
          rev.cuisine.toLowerCase().includes(normalizedQuery) ||
          rev.dishRecommendations.some((d) => d.toLowerCase().includes(normalizedQuery))
      )
    : [];

  const totalResults =
    filteredArticles.length + filteredRecipes.length + filteredReviews.length;

  const handleSelect = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search TasteTrails"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#FFF6E8] rounded-xl shadow-2xl border border-[#35271F]/15 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#35271F]/10 bg-white">
          <Search className="w-5 h-5 text-[#35271F]/50 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, recipes, street foods, or cities..."
            className="w-full bg-transparent text-[#35271F] placeholder-[#35271F]/40 text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#35271F]/40 hover:text-[#35271F] rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider font-semibold px-2 py-1 bg-[#35271F]/5 hover:bg-[#35271F]/10 rounded text-[#35271F]/70"
          >
            Esc
          </button>
        </div>

        {/* Search Results / Suggestion Body */}
        <div className="overflow-y-auto p-5 space-y-6">
          {!normalizedQuery ? (
            <div className="py-8 text-center text-[#35271F]/60 space-y-3">
              <BookOpen className="w-8 h-8 mx-auto text-[#B83A24]/40" />
              <p className="text-sm font-medium">
                Try searching for <span className="text-[#B83A24] font-semibold">"Butter Chicken"</span>,{' '}
                <span className="text-[#B83A24] font-semibold">"Biryani"</span>,{' '}
                <span className="text-[#B83A24] font-semibold">"Mumbai"</span>, or{' '}
                <span className="text-[#B83A24] font-semibold">"Spices"</span>.
              </p>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-[#35271F]/70 space-y-2">
              <p className="text-base font-serif font-bold text-[#35271F]">No food stories found</p>
              <p className="text-xs">
                We couldn't find any articles, recipes, or reviews matching "{query}". Try checking your spelling or search by ingredient or city.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Articles Section */}
              {filteredArticles.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B83A24] mb-3">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Articles ({filteredArticles.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredArticles.map((article) => (
                      <button
                        key={article.id}
                        onClick={() => handleSelect(`#/article/${article.slug}`)}
                        className="w-full text-left p-3 rounded-lg bg-white/70 hover:bg-white border border-[#35271F]/10 hover:border-[#B83A24]/30 transition-all flex items-start justify-between group"
                      >
                        <div className="space-y-1 pr-3">
                          <p className="text-sm font-semibold text-[#35271F] group-hover:text-[#B83A24] transition-colors">
                            {article.title}
                          </p>
                          <p className="text-xs text-[#35271F]/60 line-clamp-1">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-[11px] text-[#35271F]/50 pt-0.5">
                            <span>{article.category}</span>
                            <span>·</span>
                            <span>{article.readingTime}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#35271F]/30 group-hover:text-[#B83A24] shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Recipes Section */}
              {filteredRecipes.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#284B36] mb-3">
                    <Utensils className="w-3.5 h-3.5" />
                    <span>Recipes ({filteredRecipes.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredRecipes.map((recipe) => (
                      <button
                        key={recipe.id}
                        onClick={() => handleSelect(`#/recipe/${recipe.slug}`)}
                        className="w-full text-left p-3 rounded-lg bg-white/70 hover:bg-white border border-[#35271F]/10 hover:border-[#284B36]/30 transition-all flex items-start justify-between group"
                      >
                        <div className="space-y-1 pr-3">
                          <p className="text-sm font-semibold text-[#35271F] group-hover:text-[#284B36] transition-colors">
                            {recipe.name}
                          </p>
                          <p className="text-xs text-[#35271F]/60 line-clamp-1">
                            {recipe.description}
                          </p>
                          <div className="flex items-center gap-2 text-[11px] text-[#35271F]/50 pt-0.5">
                            <span>{recipe.cuisine}</span>
                            <span>·</span>
                            <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</span>
                            <span>·</span>
                            <span>{recipe.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#35271F]/30 group-hover:text-[#284B36] shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews Section */}
              {filteredReviews.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F4A62A] text-amber-700 mb-3">
                    <Star className="w-3.5 h-3.5" />
                    <span>Restaurant Critiques ({filteredReviews.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredReviews.map((rev) => (
                      <button
                        key={rev.id}
                        onClick={() => handleSelect(`#/reviews?id=${rev.id}`)}
                        className="w-full text-left p-3 rounded-lg bg-white/70 hover:bg-white border border-[#35271F]/10 hover:border-amber-500/30 transition-all flex items-start justify-between group"
                      >
                        <div className="space-y-1 pr-3">
                          <p className="text-sm font-semibold text-[#35271F] group-hover:text-amber-800 transition-colors">
                            {rev.name}
                          </p>
                          <p className="text-xs text-[#35271F]/60 line-clamp-1">
                            {rev.summary}
                          </p>
                          <div className="flex items-center gap-2 text-[11px] text-[#35271F]/50 pt-0.5">
                            <span>{rev.city}</span>
                            <span>·</span>
                            <span>{rev.cuisine}</span>
                            <span>·</span>
                            <span>Price {rev.priceRange}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#35271F]/30 group-hover:text-amber-700 shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
