import React from 'react';
import { Flame, TrendingUp, Search } from 'lucide-react';
import { PageSEO } from '../types';

interface PageTrendingKeywordsProps {
  seo: PageSEO;
  trendingLabel?: string;
}

export const PageTrendingKeywords: React.FC<PageTrendingKeywordsProps> = ({
  seo,
  trendingLabel = 'Trending Search Topics',
}) => {
  return (
    <aside aria-label="Trending and focus topics" className="w-full bg-white/80 rounded-xl border border-[#35271F]/10 p-3.5 sm:p-4 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        {/* Left: Trending indicator */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#B83A24]/10 flex items-center justify-center text-[#B83A24] shrink-0">
            <Flame className="w-3.5 h-3.5 fill-[#B83A24]" />
          </div>
          <span className="font-bold uppercase tracking-wider text-[#B83A24] flex items-center gap-1.5 whitespace-nowrap">
            <TrendingUp className="w-3 h-3" />
            <span>{trendingLabel}:</span>
          </span>
        </div>

        {/* Right: Main keyword + 2 related keywords as crawlable links with anchor text */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Main Keyword */}
          <a
            href={`#/explore?q=${encodeURIComponent(seo.mainKeyword)}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FFF6E8] hover:bg-[#ffeecf] rounded-md border border-[#F4A62A]/40 text-[#35271F] font-semibold transition-colors"
            aria-label={`Explore stories for main keyword: ${seo.mainKeyword}`}
          >
            <Search className="w-3 h-3 text-[#B83A24]" />
            <span className="text-[11px] text-[#78685D] uppercase font-bold tracking-wider">Main:</span>
            <span>{seo.mainKeyword}</span>
          </a>

          <span className="text-[#35271F]/30 hidden md:inline">·</span>

          {/* Related Keyword 1 */}
          <a
            href={`#/explore?q=${encodeURIComponent(seo.relatedKeywords[0])}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FFF6E8]/70 hover:bg-[#ffeecf] rounded-md border border-[#35271F]/10 text-[#78685D] hover:text-[#35271F] transition-colors"
            aria-label={`Explore stories for related keyword: ${seo.relatedKeywords[0]}`}
          >
            <span className="text-[10px] text-[#78685D]/80 uppercase font-semibold">Related:</span>
            <span>{seo.relatedKeywords[0]}</span>
          </a>

          {/* Related Keyword 2 */}
          <a
            href={`#/explore?q=${encodeURIComponent(seo.relatedKeywords[1])}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FFF6E8]/70 hover:bg-[#ffeecf] rounded-md border border-[#35271F]/10 text-[#78685D] hover:text-[#35271F] transition-colors"
            aria-label={`Explore stories for related keyword: ${seo.relatedKeywords[1]}`}
          >
            <span className="text-[10px] text-[#78685D]/80 uppercase font-semibold">Related:</span>
            <span>{seo.relatedKeywords[1]}</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
