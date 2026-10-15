import React, { useState } from 'react';
import { Article } from '../types';
import { BookmarkButton } from './BookmarkButton';
import { Clock, UtensilsCrossed, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onSelect: (slug: string) => void;
  layout?: 'standard' | 'horizontal' | 'compact';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelect,
  layout = 'standard',
}) => {
  const [imgError, setImgError] = useState(false);

  if (layout === 'horizontal') {
    return (
      <article
        onClick={() => onSelect(article.slug)}
        className="group cursor-pointer bg-white/70 hover:bg-white rounded-xl border border-[#35271F]/10 hover:border-[#B83A24]/30 overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col sm:flex-row"
      >
        <div className="sm:w-2/5 relative aspect-video sm:aspect-auto overflow-hidden bg-[#FFF6E8] shrink-0">
          {!imgError ? (
            <img
              src={article.coverImage}
              alt={`${article.title} - ${article.category}`}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#35271F]/5 text-[#35271F]/40">
              <UtensilsCrossed className="w-8 h-8 mb-2 text-[#B83A24]/40" />
              <span className="text-xs uppercase tracking-wider font-semibold">TasteTrails</span>
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B83A24]">
                {article.category}
              </span>
              <BookmarkButton slug={article.slug} size="sm" />
            </div>

            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#35271F] group-hover:text-[#B83A24] transition-colors leading-snug">
              <a
                href={`#/article/${article.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelect(article.slug);
                }}
                className="hover:underline"
                aria-label={`Read article: ${article.title}`}
              >
                {article.title}
              </a>
            </h3>

            <p className="text-sm text-[#78685D] leading-relaxed line-clamp-2">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-4 mt-2 border-t border-[#35271F]/10 flex items-center justify-between text-xs text-[#78685D]">
            <span>By {article.author.name}</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#35271F]/40" />
                <span>{article.readingTime}</span>
              </div>
              <a
                href={`#/article/${article.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelect(article.slug);
                }}
                className="inline-flex items-center gap-1 font-semibold text-[#B83A24] hover:underline"
                aria-label={`Read full story: ${article.title}`}
              >
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={() => onSelect(article.slug)}
      className="group cursor-pointer bg-white/70 hover:bg-white rounded-xl border border-[#35271F]/10 hover:border-[#B83A24]/30 overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col"
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#FFF6E8]">
        {!imgError ? (
          <img
            src={article.coverImage}
            alt={`${article.title} - ${article.category}`}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#35271F]/5 text-[#35271F]/40">
            <UtensilsCrossed className="w-8 h-8 mb-2 text-[#B83A24]/40" />
            <span className="text-xs uppercase tracking-wider font-semibold">TasteTrails</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-2">
          {/* Metadata line (Zero-pill text separator) */}
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="font-semibold uppercase tracking-wider text-[#B83A24]">
              {article.category}
            </span>
            <BookmarkButton slug={article.slug} size="sm" />
          </div>

          <h3 className="font-serif text-lg font-bold text-[#35271F] group-hover:text-[#B83A24] transition-colors leading-snug line-clamp-2">
            <a
              href={`#/article/${article.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onSelect(article.slug);
              }}
              className="hover:underline"
              aria-label={`Read article: ${article.title}`}
            >
              {article.title}
            </a>
          </h3>

          <p className="text-sm text-[#78685D] leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-[#35271F]/10 flex items-center justify-between text-xs text-[#78685D]">
          <span>{article.author.name}</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#35271F]/40" />
              <span>{article.readingTime}</span>
            </div>
            <a
              href={`#/article/${article.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onSelect(article.slug);
              }}
              className="inline-flex items-center gap-1 font-semibold text-[#B83A24] hover:underline"
              aria-label={`Read full story: ${article.title}`}
            >
              <span>Read Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
