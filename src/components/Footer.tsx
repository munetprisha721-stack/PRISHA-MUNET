import React from 'react';
import { UtensilsCrossed, ArrowUpRight, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#35271F] text-[#FFF6E8] border-t border-[#35271F]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#FFF6E8]/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#B83A24] flex items-center justify-center text-[#FFF6E8]">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FFF6E8]">
                TasteTrails
              </span>
            </div>
            <p className="text-[#F4A62A] font-serif italic text-base">
              Good Food. Great Stories. Unforgettable Flavours.
            </p>
            <p className="text-[#FFF6E8]/70 text-sm leading-relaxed max-w-sm">
              A digital culinary publication celebrating the vibrant world of Indian street
              eats, traditional heritage recipes, candid restaurant reviews, and immersive food travelogues.
            </p>
          </div>

          {/* Editorial Navigation */}
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-wider text-[#F4A62A] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FFF6E8]/80">
              <li>
                <button
                  onClick={() => onNavigate('#/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#/explore')}
                  className="hover:text-white transition-colors text-left"
                >
                  All 12 Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#/recipes')}
                  className="hover:text-white transition-colors text-left"
                >
                  Recipe Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#/vlogs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Food Vlogs & Tours
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#/reviews')}
                  className="hover:text-white transition-colors text-left"
                >
                  Restaurant Critiques
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#/bookmarks')}
                  className="hover:text-white transition-colors text-left"
                >
                  Saved Bookmarks
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-wider text-[#F4A62A] mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FFF6E8]/80">
              <li>
                <button
                  onClick={() => onNavigate('#/explore?cat=Indian Street Food')}
                  className="hover:text-white transition-colors text-left"
                >
                  Indian Street Food
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#/explore?cat=Traditional Indian Cuisine')}
                  className="hover:text-white transition-colors text-left"
                >
                  Traditional Cuisine
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#/explore?cat=Recipes and Cooking')}
                  className="hover:text-white transition-colors text-left"
                >
                  Recipes & Cooking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#/explore?cat=Desserts and Baking')}
                  className="hover:text-white transition-colors text-left"
                >
                  Desserts & Sweets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#/explore?cat=Food Travel')}
                  className="hover:text-white transition-colors text-left"
                >
                  Food Travel Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Publication & Connect */}
          <div>
            <h4 className="text-xs uppercase font-semibold tracking-wider text-[#F4A62A] mb-4">
              Publication
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FFF6E8]/80 mb-6">
              <li>
                <button
                  onClick={() => onNavigate('#/about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Our Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#/contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact & Submissions
                </button>
              </li>
            </ul>
            <div className="pt-2 border-t border-[#FFF6E8]/10">
              <span className="text-xs text-[#FFF6E8]/60 block mb-2">Connect with us</span>
              <div className="flex items-center gap-3 text-xs text-[#F4A62A]">
                <span className="hover:underline cursor-pointer flex items-center gap-0.5">
                  YouTube <ArrowUpRight className="w-3 h-3" />
                </span>
                <span className="text-[#FFF6E8]/30">·</span>
                <span className="hover:underline cursor-pointer flex items-center gap-0.5">
                  Instagram <ArrowUpRight className="w-3 h-3" />
                </span>
                <span className="text-[#FFF6E8]/30">·</span>
                <span className="hover:underline cursor-pointer flex items-center gap-0.5">
                  Pinterest <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF6E8]/60">
          <p>© {new Date().getFullYear()} TasteTrails. All editorial rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="w-3.5 h-3.5 text-[#B83A24] fill-[#B83A24]" /> for food lovers, home cooks, and culinary travelers.
          </p>
        </div>
      </div>
    </footer>
  );
};
