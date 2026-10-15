import React, { useState } from 'react';
import { RestaurantReview } from '../types';
import { MapPin, Check, X, Sparkles, Utensils, Info } from 'lucide-react';

interface ReviewCardProps {
  review: RestaurantReview;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [imgError, setImgError] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="bg-white/80 rounded-2xl border border-[#35271F]/10 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col">
      {/* Visual Header */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#35271F]">
        {!imgError ? (
          <img
            src={review.coverImage}
            alt={`${review.name} - ${review.cuisine} restaurant dining in ${review.city}`}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#35271F]/90">
            <Utensils className="w-10 h-10 text-white/40" />
          </div>
        )}

        {/* Fictional Demonstration Notice Banner */}
        {review.isFictionalDemo && (
          <div className="absolute top-3 left-3 bg-[#35271F]/90 backdrop-blur-md text-[#FFF6E8] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded border border-white/20 flex items-center gap-1 shadow-sm">
            <Info className="w-3 h-3 text-[#F4A62A]" />
            <span>Fictional Editorial Case Study</span>
          </div>
        )}

        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#35271F] font-bold text-xs px-2.5 py-1 rounded shadow-sm">
          Price: {review.priceRange}
        </div>
      </div>

      {/* Review Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#78685D]">
            <span className="font-semibold uppercase tracking-wider text-[#B83A24]">
              {review.cuisine}
            </span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#B83A24]" />
              <span>{review.city}</span>
            </div>
          </div>

          <h3 className="font-serif text-xl font-bold text-[#35271F] leading-tight">
            {review.name}
          </h3>

          <p className="text-xs text-[#78685D] italic">
            Reviewed on {new Date(review.reviewDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
          </p>

          <p className="text-sm text-[#35271F]/80 leading-relaxed">
            {review.summary}
          </p>

          {/* Dish Recommendations */}
          <div className="bg-[#FFF6E8] p-3.5 rounded-xl border border-[#35271F]/10 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#35271F]">
              <Sparkles className="w-3.5 h-3.5 text-[#F4A62A]" />
              <span>Recommended Dishes</span>
            </div>
            <ul className="text-xs text-[#78685D] space-y-1 list-disc list-inside">
              {review.dishRecommendations.map((dish, i) => (
                <li key={i} className="leading-snug">{dish}</li>
              ))}
            </ul>
          </div>

          {/* Honest Pros & Cons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
            <div className="bg-[#284B36]/5 border border-[#284B36]/20 p-3 rounded-lg space-y-1.5">
              <span className="font-bold text-[#284B36] flex items-center gap-1 uppercase tracking-wider text-[11px]">
                <Check className="w-3.5 h-3.5" /> Pros
              </span>
              <ul className="space-y-1 text-[#35271F]/80">
                {review.pros.map((p, idx) => (
                  <li key={idx} className="leading-relaxed">• {p}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#B83A24]/5 border border-[#B83A24]/20 p-3 rounded-lg space-y-1.5">
              <span className="font-bold text-[#B83A24] flex items-center gap-1 uppercase tracking-wider text-[11px]">
                <X className="w-3.5 h-3.5" /> Cons
              </span>
              <ul className="space-y-1 text-[#35271F]/80">
                {review.cons.map((c, idx) => (
                  <li key={idx} className="leading-relaxed">• {c}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Expanded Critique Dimensions */}
          {expanded && (
            <div className="pt-4 border-t border-[#35271F]/10 space-y-3 text-xs text-[#35271F]/90 animate-in fade-in duration-200">
              <div>
                <strong className="block text-[#35271F] font-semibold mb-0.5">Ambience & Acoustic Quality:</strong>
                <p className="text-[#78685D]">{review.ambience}</p>
              </div>
              <div>
                <strong className="block text-[#35271F] font-semibold mb-0.5">Food Critique:</strong>
                <p className="text-[#78685D]">{review.foodScore}</p>
              </div>
              <div>
                <strong className="block text-[#35271F] font-semibold mb-0.5">Hospitality & Service Pace:</strong>
                <p className="text-[#78685D]">{review.serviceScore}</p>
              </div>
              <div>
                <strong className="block text-[#35271F] font-semibold mb-0.5">Value Assessment:</strong>
                <p className="text-[#78685D]">{review.valueScore}</p>
              </div>
              <div className="p-3 bg-[#35271F]/5 rounded-lg border border-[#35271F]/10">
                <strong className="block text-[#35271F] font-semibold mb-0.5">Final Critic's Verdict:</strong>
                <p className="text-[#35271F] italic">{review.overallVerdict}</p>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#35271F] hover:text-[#B83A24] bg-[#FFF6E8] hover:bg-[#ffeecf] rounded-lg transition-colors border border-[#35271F]/10"
        >
          {expanded ? 'Show Less' : 'Read Full Editorial Critique'}
        </button>
      </div>
    </article>
  );
};
