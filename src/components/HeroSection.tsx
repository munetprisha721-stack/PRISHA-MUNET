import React, { useState } from 'react';
import { Compass, Play, UtensilsCrossed } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
  onWatchVlogs: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore,
  onWatchVlogs,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4A62A]/15 border border-[#F4A62A]/30 rounded-full text-xs font-semibold text-[#35271F]">
              <span className="w-2 h-2 rounded-full bg-[#B83A24]" />
              <span>TasteTrails Editorial Magazine</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#35271F] tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Follow Your Cravings.{' '}
              <span className="text-[#B83A24] italic">Discover Your Next Favourite.</span>
            </h1>

            <p className="text-[#78685D] text-base sm:text-lg leading-relaxed max-w-2xl">
              From sizzling Indian street food to hidden restaurant gems and irresistible homemade recipes,
              explore the stories behind every delicious bite.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#/explore"
                onClick={(e) => {
                  e.preventDefault();
                  onExplore();
                }}
                className="px-6 py-3.5 bg-[#B83A24] hover:bg-[#9d301d] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all shadow-sm flex items-center gap-2"
                aria-label="Explore All Food Stories and Street Guides"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Food Stories</span>
              </a>

              <a
                href="#/vlogs"
                onClick={(e) => {
                  e.preventDefault();
                  onWatchVlogs();
                }}
                className="px-6 py-3.5 bg-white hover:bg-[#FFF6E8] text-[#35271F] border border-[#35271F]/20 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all shadow-xs flex items-center gap-2"
                aria-label="Watch Street Food Vlogs and Video Tours"
              >
                <Play className="w-4 h-4 text-[#B83A24] fill-[#B83A24]" />
                <span>Watch Food Vlogs</span>
              </a>
            </div>

            {/* Quiet Credential Ribbon */}
            <div className="pt-6 border-t border-[#35271F]/10 flex flex-wrap items-center gap-6 text-xs text-[#78685D]">
              <div>
                <span className="font-serif font-bold text-base text-[#35271F] block">12 Full</span>
                <span>Editorial Articles</span>
              </div>
              <div className="w-px h-8 bg-[#35271F]/10" />
              <div>
                <span className="font-serif font-bold text-base text-[#35271F] block">Authentic</span>
                <span>Metric Recipes</span>
              </div>
              <div className="w-px h-8 bg-[#35271F]/10" />
              <div>
                <span className="font-serif font-bold text-base text-[#35271F] block">Honest</span>
                <span>Culinary Critiques</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image / Feast Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
              {!imgError ? (
                <img
                  src="/src/assets/images/hero_indian_feast_1792023725138.jpg"
                  alt="Lavish Indian feast with fragrant saffron biryani, copper kadai butter chicken, crisp naan, and street chaat"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full bg-[#35271F]/10 flex items-center justify-center p-8">
                  <UtensilsCrossed className="w-16 h-16 text-[#B83A24]/40" />
                </div>
              )}

              {/* Editorial Frame Accent */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#35271F]/10">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#B83A24] block">
                  Lead Discovery
                </span>
                <p className="font-serif font-bold text-sm text-[#35271F] truncate">
                  The Royal Subcontinental Feast: 5 Tastes & Infinite Traditions
                </p>
              </div>
            </div>

            {/* Saffron accent backdrop */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#F4A62A]/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
