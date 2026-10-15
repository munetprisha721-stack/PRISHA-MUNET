import React, { useState, useMemo } from 'react';
import { ReviewCard } from '../components/ReviewCard';
import { RESTAURANT_REVIEWS } from '../data/reviews';
import { Star, MapPin, DollarSign, Filter, Info, X, Flame, Sparkles } from 'lucide-react';
import { PageTrendingKeywords } from '../components/PageTrendingKeywords';
import { SITE_STATIC_PAGES_SEO } from '../utils/seo';

export const ReviewsPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedCuisine, setSelectedCuisine] = useState<string>('All');
  const [selectedPrice, setSelectedPrice] = useState<string>('All');

  const cities = ['All', 'New Delhi', 'Mumbai', 'Jaipur', 'Bengaluru', 'Kolkata'];
  const cuisines = [
    'All',
    'Awadhi & North Indian',
    'Konkan & Mangalorean Seafood',
    'Traditional Rajasthani & Marwari',
    'Chettinad & Karnataka Regional',
    'Bengali Street & Heritage Snacks',
  ];
  const priceRanges = ['All', '$', '$$', '$$$'];

  const trendingReview = RESTAURANT_REVIEWS[0];

  const filteredReviews = useMemo(() => {
    return RESTAURANT_REVIEWS.filter((rev) => {
      const matchCity = selectedCity === 'All' || rev.city === selectedCity;
      const matchCuisine = selectedCuisine === 'All' || rev.cuisine === selectedCuisine;
      const matchPrice = selectedPrice === 'All' || rev.priceRange === selectedPrice;
      return matchCity && matchCuisine && matchPrice;
    });
  }, [selectedCity, selectedCuisine, selectedPrice]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs uppercase font-bold tracking-wider text-[#B83A24]">
          Independent Culinary Journalism
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#35271F]">
          Restaurant Reviews & Critiques
        </h1>
        <p className="text-[#78685D] text-sm sm:text-base max-w-2xl leading-relaxed">
          Unvarnished, balanced evaluations covering acoustics, service cadence, ingredient integrity, and honest pros & cons.
        </p>
      </div>

      {/* Page Trending & Two Related Keywords */}
      <PageTrendingKeywords
        seo={SITE_STATIC_PAGES_SEO.reviews}
        trendingLabel="Trending Dining Inquiries"
      />

      {/* Trending Review Highlight */}
      {selectedCity === 'All' && selectedCuisine === 'All' && selectedPrice === 'All' && (
        <section className="bg-gradient-to-r from-amber-600/10 via-[#F4A62A]/10 to-[#FFF6E8] p-6 rounded-2xl border border-amber-600/20 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
              <Flame className="w-4 h-4 fill-amber-700 text-amber-700" />
              <span>Trending Critique This Month</span>
            </span>
            <span className="text-xs text-[#78685D]">
              Fictional Editorial Benchmark
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/90 p-4 rounded-xl border border-[#35271F]/10">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#78685D] mb-1">
                <span className="font-bold text-[#B83A24]">{trendingReview.city}</span>
                <span>·</span>
                <span>{trendingReview.cuisine}</span>
                <span>·</span>
                <span>Price {trendingReview.priceRange}</span>
              </div>
              <h2 className="font-serif text-lg font-bold text-[#35271F]">
                Which Dining Experience is Featured in This Week's Critique Benchmark?
              </h2>
              <p className="text-xs text-[#78685D] mt-0.5">
                Our featured dining critique examines <strong>{trendingReview.name}</strong> in {trendingReview.city} ({trendingReview.cuisine}, Price {trendingReview.priceRange}): {trendingReview.summary}
              </p>
            </div>
            <div className="text-xs font-semibold text-amber-800 bg-[#FFF6E8] px-3 py-1.5 rounded-lg border border-amber-500/20 whitespace-nowrap">
              Top Pick: {trendingReview.dishRecommendations[0]}
            </div>
          </div>
        </section>
      )}

      {/* Mandatory PRD Transparency Disclaimer */}
      <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-[#35271F]">
        <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="font-semibold text-amber-900 block">
            Editorial Transparency Notice (PRD Section 9 Compliance):
          </strong>
          <p className="text-amber-900/80 leading-relaxed text-xs">
            As mandated by our editorial standards, TasteTrails strictly avoids fabricating restaurant ratings, prices, or hours. The dining rooms below are clearly labelled fictional case studies illustrating our comprehensive review methodology until verified dining audits are published.
          </p>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="bg-white p-5 rounded-2xl border border-[#35271F]/10 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 text-xs">
          {/* City filter */}
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#B83A24]" />
            <span className="text-[#78685D] font-medium">City:</span>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-[#FFF6E8] border border-[#35271F]/15 rounded-lg px-3 py-1.5 text-xs text-[#35271F] font-semibold focus:outline-none focus:border-[#B83A24]"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Cuisine filter */}
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#284B36]" />
            <span className="text-[#78685D] font-medium">Cuisine:</span>
            <select
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
              className="bg-[#FFF6E8] border border-[#35271F]/15 rounded-lg px-3 py-1.5 text-xs text-[#35271F] font-semibold focus:outline-none focus:border-[#B83A24]"
            >
              {cuisines.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range filter */}
          <div className="flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5 text-[#F4A62A]" />
            <span className="text-[#78685D] font-medium">Price:</span>
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="bg-[#FFF6E8] border border-[#35271F]/15 rounded-lg px-3 py-1.5 text-xs text-[#35271F] font-semibold focus:outline-none focus:border-[#B83A24]"
            >
              {priceRanges.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>

        {(selectedCity !== 'All' || selectedCuisine !== 'All' || selectedPrice !== 'All') && (
          <button
            onClick={() => {
              setSelectedCity('All');
              setSelectedCuisine('All');
              setSelectedPrice('All');
            }}
            className="text-xs text-[#B83A24] font-semibold hover:underline flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset Review Filters</span>
          </button>
        )}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};
