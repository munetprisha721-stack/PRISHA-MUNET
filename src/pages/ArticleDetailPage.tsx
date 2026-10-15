import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { BookmarkButton } from '../components/BookmarkButton';
import { ArticleCard } from '../components/ArticleCard';
import { ARTICLES } from '../data/articles';
import { updatePageSEO } from '../utils/seo';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Check,
  UtensilsCrossed,
  BookOpen,
  Tag,
  Search
} from 'lucide-react';

interface ArticleDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  slug,
  onNavigate,
}) => {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const article = ARTICLES.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (article) {
      updatePageSEO(article.seo);
    }
  }, [article, slug]);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-[#35271F]">Article Not Found</h2>
        <p className="text-[#78685D] text-sm">
          The food story you are looking for may have moved or does not exist.
        </p>
        <button
          onClick={() => onNavigate('#/explore')}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B83A24] text-white text-xs font-semibold uppercase tracking-wider rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Stories</span>
        </button>
      </div>
    );
  }

  // Related articles lookup
  const relatedArticles = ARTICLES.filter((a) =>
    article.relatedArticleSlugs.includes(a.slug)
  );

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <article className="pb-20">
      {/* Editorial Header */}
      <div className="bg-[#FFF6E8] border-b border-[#35271F]/10 pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => onNavigate('#/explore')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#35271F]/70 hover:text-[#B83A24] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Stories</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-xs text-[#35271F]/70 hover:text-[#35271F] px-2.5 py-1 bg-white/60 hover:bg-white rounded border border-[#35271F]/10 transition-colors"
                title="Copy story link"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#284B36]" />
                    <span className="text-[#284B36] font-medium">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </>
                )}
              </button>
              <BookmarkButton slug={article.slug} size="md" showLabel />
            </div>
          </div>

          {/* Category & Title */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B83A24] block">
              {article.category}
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#35271F] tracking-tight leading-[1.2]" style={{ textWrap: 'balance' }}>
              {article.title}
            </h1>

            {/* 40-60 Word Excerpt */}
            <p className="text-lg text-[#78685D] leading-relaxed font-serif italic pt-2 border-l-2 border-[#F4A62A] pl-4">
              "{article.excerpt}"
            </p>

            {/* SEO Keywords Ribbon */}
            <div className="bg-white/80 p-3 rounded-lg border border-[#35271F]/10 text-xs flex flex-wrap items-center gap-2 text-[#78685D]">
              <span className="font-semibold text-[#B83A24] flex items-center gap-1">
                <Search className="w-3.5 h-3.5" /> Focus Keywords:
              </span>
              <span className="bg-[#FFF6E8] px-2 py-0.5 rounded text-[#35271F] font-semibold border border-[#35271F]/10">
                {article.seo.mainKeyword}
              </span>
              <span className="bg-[#FFF6E8] px-2 py-0.5 rounded text-[#78685D] border border-[#35271F]/10">
                {article.seo.relatedKeywords[0]}
              </span>
              <span className="bg-[#FFF6E8] px-2 py-0.5 rounded text-[#78685D] border border-[#35271F]/10">
                {article.seo.relatedKeywords[1]}
              </span>
            </div>

            {/* Metadata Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-[#78685D] border-t border-[#35271F]/10">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#35271F]">{article.author.name}</span>
                <span>·</span>
                <span>{article.author.role}</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#35271F]/40" />
                  <span>{new Date(article.publishedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#35271F]/40" />
                  <span>{article.readingTime}</span>
                </span>
                <span>·</span>
                <span>{article.wordCount} words</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Cover Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-10">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-[#35271F]">
          {!imgError ? (
            <img
              src={article.coverImage}
              alt={article.title}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#35271F] text-white/50">
              <UtensilsCrossed className="w-16 h-16 mb-2 text-[#F4A62A]" />
              <span className="text-sm font-semibold uppercase tracking-wider">TasteTrails Magazine</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Prose Reading Canvas */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12 text-[#35271F]">
        {article.sections.map((section, sIdx) => (
          <section key={sIdx} className="space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#35271F] pt-4 border-t border-[#35271F]/10">
              {section.title}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-base sm:text-[17px] leading-[1.8] text-[#35271F]/90">
              {section.content.map((p, pIdx) => {
                // Drop cap for the very first paragraph of the first section
                if (sIdx === 0 && pIdx === 0) {
                  return (
                    <p
                      key={pIdx}
                      className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#B83A24]"
                    >
                      {p}
                    </p>
                  );
                }
                return <p key={pIdx}>{p}</p>;
              })}
            </div>

            {/* Pull Quote */}
            {section.quote && (
              <figure className="my-8 py-6 px-8 bg-white/60 rounded-xl border-y border-[#35271F]/10 text-center">
                <blockquote className="font-serif italic text-xl sm:text-2xl text-[#B83A24] leading-relaxed">
                  "{section.quote}"
                </blockquote>
                {section.quoteAuthor && (
                  <figcaption className="text-xs uppercase font-semibold tracking-wider text-[#78685D] mt-3">
                    — {section.quoteAuthor}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Subsections */}
            {section.subsections && (
              <div className="space-y-6 pt-2">
                {section.subsections.map((sub, subIdx) => (
                  <div key={subIdx} className="space-y-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#35271F]">
                      {sub.subtitle}
                    </h3>
                    {sub.text.map((subP, subPIdx) => (
                      <p key={subPIdx} className="text-base leading-[1.8] text-[#35271F]/90">
                        {subP}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Structured Table */}
            {section.table && (
              <div className="my-8 overflow-hidden rounded-xl border border-[#35271F]/15 bg-white shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#35271F] text-white">
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3.5 font-semibold tracking-wider uppercase text-[11px]">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#35271F]/10">
                      {section.table.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className={rIdx % 2 === 0 ? 'bg-white' : 'bg-[#FFF6E8]/40 hover:bg-[#FFF6E8]'}
                        >
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3.5 text-[#35271F]/90 leading-relaxed font-normal">
                              {cIdx === 0 ? <strong className="font-semibold text-[#35271F]">{cell}</strong> : cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {section.table.caption && (
                  <p className="p-2.5 bg-[#FFF6E8] text-[11px] text-[#78685D] italic border-t border-[#35271F]/10">
                    {section.table.caption}
                  </p>
                )}
              </div>
            )}

            {/* Editorial Callout (Script, Itinerary, Checklist, Template) */}
            {section.callout && (
              <div className="my-8 p-6 bg-white rounded-xl border border-[#B83A24]/20 shadow-xs space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B83A24]">
                    {section.callout.title}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-[#35271F] font-mono leading-relaxed bg-[#FFF6E8]/60 p-4 rounded-lg whitespace-pre-wrap border border-[#35271F]/10">
                  {section.callout.content}
                </div>
              </div>
            )}
          </section>
        ))}

        {/* Tags */}
        <div className="pt-8 border-t border-[#35271F]/10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#78685D] mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>Story Tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-[#35271F] bg-white px-3 py-1 rounded-md border border-[#35271F]/10"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="p-6 bg-white rounded-2xl border border-[#35271F]/10 flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-[#B83A24] text-white flex items-center justify-center font-serif text-xl font-bold shrink-0">
            {article.author.name[0]}
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B83A24]">
              Written by
            </span>
            <h4 className="font-serif font-bold text-lg text-[#35271F]">{article.author.name}</h4>
            <p className="text-xs text-[#78685D]">{article.author.role}</p>
            <p className="text-xs text-[#78685D] pt-2 leading-relaxed">
              Contributing culinary writer for TasteTrails, documenting regional recipes, traditional markets, and subcontinental gastronomy.
            </p>
          </div>
        </div>
      </div>

      {/* Related Articles Grid */}
      {relatedArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-[#35271F]/10">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-4 h-4 text-[#B83A24]" />
            <h3 className="font-serif text-2xl font-bold text-[#35271F]">
              Related Food Stories & Recipes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard
                key={rel.id}
                article={rel}
                onSelect={(s) => onNavigate(`#/article/${s}`)}
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
