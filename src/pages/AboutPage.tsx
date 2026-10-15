import React from 'react';
import { UtensilsCrossed, Heart, Compass, ShieldCheck, Sparkles, BookOpen, Flame } from 'lucide-react';
import { PageTrendingKeywords } from '../components/PageTrendingKeywords';
import { SITE_STATIC_PAGES_SEO } from '../utils/seo';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Editorial Lead Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <div className="w-12 h-12 rounded bg-[#B83A24] flex items-center justify-center text-white mx-auto shadow-sm">
          <UtensilsCrossed className="w-6 h-6 text-[#FFF6E8]" />
        </div>
        <span className="text-xs uppercase font-bold tracking-wider text-[#B83A24] block">
          Editorial Publication
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#35271F] leading-tight">
          About TasteTrails
        </h1>
        <p className="font-serif italic text-lg sm:text-xl text-[#F4A62A] text-amber-700">
          Good Food. Great Stories. Unforgettable Flavours.
        </p>
      </div>

      {/* Page Trending & Two Related Keywords */}
      <PageTrendingKeywords
        seo={SITE_STATIC_PAGES_SEO.about}
        trendingLabel="Trending Editorial Mission"
      />

      {/* Trending Editorial Themes in 2026 */}
      <section className="bg-gradient-to-r from-[#B83A24]/10 via-[#F4A62A]/10 to-[#FFF6E8] p-5 rounded-2xl border border-[#B83A24]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#B83A24] text-white flex items-center justify-center shrink-0">
            <Flame className="w-4 h-4 fill-white" />
          </div>
          <div>
            <span className="font-bold uppercase tracking-wider text-[#B83A24] block">
              Trending Research Focus
            </span>
            <p className="text-[#35271F] font-semibold text-sm">
              Documenting Indigenous Grains, Millets & Coastal Street Artisans
            </p>
          </div>
        </div>
        <a
          href="#/explore"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('#/explore');
          }}
          className="text-xs font-semibold text-[#B83A24] hover:underline whitespace-nowrap"
          aria-label="Read field essays and food stories"
        >
          <span>Read Field Essays & Stories →</span>
        </a>
      </section>

      {/* Mission & Background (From PRD Section 11) */}
      <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#35271F]/10 shadow-xs space-y-6 text-[#35271F]/90 leading-relaxed text-base sm:text-[17px]">
        <h2 className="font-serif text-2xl font-bold text-[#35271F] border-b border-[#35271F]/10 pb-4">
          What is the Story and Mission Behind TasteTrails?
        </h2>

        <p>
          TasteTrails is a food-focused digital publication dedicated to discovering authentic flavours, sharing culinary stories, and exploring the cultural heritage behind memorable meals across Indian street food markets, regional kitchens, and restaurant gems.
        </p>

        <p>
          From bustling street-food markets and traditional Indian kitchens to creative recipes and hidden restaurant gems, TasteTrails brings food enthusiasts closer to the dishes and cultures they love.
        </p>

        <p>
          Our goal is to make food discovery engaging, informative, and accessible through detailed articles, practical recipes, restaurant reviews, and visual storytelling.
        </p>

        <div className="p-6 bg-[#FFF6E8] rounded-xl border border-[#F4A62A]/40 text-center space-y-2">
          <span className="text-xs uppercase font-bold tracking-wider text-[#B83A24]">
            Our Guiding Mission
          </span>
          <p className="font-serif text-xl sm:text-2xl font-bold text-[#35271F]">
            “To celebrate good food and the stories that bring people together.”
          </p>
        </div>
      </div>

      {/* Editorial Principles */}
      <div className="space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#35271F] text-center">
          What Core Editorial Pillars Guide Our Food Writing and Recipes?
        </h2>
        <p className="text-center text-xs sm:text-sm text-[#78685D] max-w-xl mx-auto">
          Our editorial board adheres to three non-negotiable standards: unvarnished critique honesty, deep subcontinental heritage research, and home-tested recipe precision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#35271F]/10 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#B83A24]/10 flex items-center justify-center text-[#B83A24]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#35271F]">Unvarnished Honesty</h3>
            <p className="text-xs sm:text-sm text-[#78685D] leading-relaxed">
              We never fabricate ratings, review numbers, or paid endorsements. Our restaurant critiques report honest pros, cons, and verifiable pricing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#35271F]/10 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#284B36]/10 flex items-center justify-center text-[#284B36]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#35271F]">Subcontinental Roots</h3>
            <p className="text-xs sm:text-sm text-[#78685D] leading-relaxed">
              We celebrate street-level artisans, age-old spice blending chemistry, and ancestral culinary traditions often overlooked by Western media.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#35271F]/10 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F4A62A]/20 flex items-center justify-center text-[#F4A62A] text-amber-700">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#35271F]">Kitchen Practicality</h3>
            <p className="text-xs sm:text-sm text-[#78685D] leading-relaxed">
              Every recipe includes precise metric measurements, clear allergen callouts, serving multipliers, and troubleshooting advice for home cooks.
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Team */}
      <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#35271F]/10 space-y-6">
        <h2 className="font-serif text-2xl font-bold text-[#35271F] border-b border-[#35271F]/10 pb-4">
          Who Are the Contributing Writers and Culinary Editors Behind TasteTrails?
        </h2>
        <p className="text-xs sm:text-sm text-[#78685D]">
          Our multidisciplinary masthead unites seasoned food journalists, heritage recipe researchers, and visual documentarians across India.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#B83A24] text-white flex items-center justify-center font-bold font-serif shrink-0">
              A
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#35271F]">Aarav Mehta</h4>
              <p className="text-xs text-[#B83A24] font-medium">Culinary Journalist & Street Explorer</p>
              <p className="text-xs text-[#78685D] mt-1 leading-relaxed">
                Specializes in subcontinental street food, vendor histories, and market itineraries.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#284B36] text-white flex items-center justify-center font-bold font-serif shrink-0">
              M
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#35271F]">Dr. Meera Nambiar</h4>
              <p className="text-xs text-[#284B36] font-medium">Culinary Chemist & Spice Researcher</p>
              <p className="text-xs text-[#78685D] mt-1 leading-relaxed">
                Decodes spice solubility, volatile oil chemistry, and ancient plant-based traditions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F4A62A] text-[#35271F] flex items-center justify-center font-bold font-serif shrink-0">
              K
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#35271F]">Chef Kabir Anand</h4>
              <p className="text-xs text-[#B83A24] font-medium">Culinary Director & Recipe Architect</p>
              <p className="text-xs text-[#78685D] mt-1 leading-relaxed">
                Calibrates restaurant-grade techniques for home cooks with exact metric measurements.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#35271F] text-white flex items-center justify-center font-bold font-serif shrink-0">
              P
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#35271F]">Priya Sharma</h4>
              <p className="text-xs text-[#78685D] font-medium">Restaurant Critic & Editorial Director</p>
              <p className="text-xs text-[#78685D] mt-1 leading-relaxed">
                Focuses on hospitality ethics, honest critique standards, and dining accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
