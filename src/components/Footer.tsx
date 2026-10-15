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
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#/');
              }}
              className="inline-flex items-center gap-2 group"
              aria-label="TasteTrails Home - Good Food and Great Stories"
            >
              <div className="w-8 h-8 rounded bg-[#B83A24] flex items-center justify-center text-[#FFF6E8] shadow-xs">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FFF6E8] group-hover:text-[#F4A62A] transition-colors">
                TasteTrails
              </span>
            </a>
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
                <a
                  href="#/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/');
                  }}
                  className="hover:text-white transition-colors text-left block"
                  aria-label="TasteTrails Home Page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#/explore"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/explore');
                  }}
                  className="hover:text-white transition-colors text-left block"
                  aria-label="All 12 Food Articles & Stories"
                >
                  All 12 Articles
                </a>
              </li>
              <li>
                <a
                  href="#/recipes"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/recipes');
                  }}
                  className="hover:text-white transition-colors text-left block"
                  aria-label="Authentic Indian Recipe Directory"
                >
                  Recipe Directory
                </a>
              </li>
              <li>
                <a
                  href="#/vlogs"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/vlogs');
                  }}
                  className="hover:text-white transition-colors text-left block"
                  aria-label="Food Vlogs & Video Tours"
                >
                  Food Vlogs & Tours
                </a>
              </li>
              <li>
                <a
                  href="#/reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/reviews');
                  }}
                  className="hover:text-white transition-colors text-left block"
                  aria-label="Restaurant Critiques & Ratings"
                >
                  Restaurant Critiques
                </a>
              </li>
              <li>
                <a
                  href="#/bookmarks"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/bookmarks');
                  }}
                  className="hover:text-white transition-colors text-left block"
                  aria-label="Your Saved Bookmarks"
                >
                  Saved Bookmarks
                </a>
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
                <a
                  href="#/explore?cat=Indian%20Street%20Food"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/explore?cat=Indian Street Food');
                  }}
                  className="hover:text-white transition-colors text-left block"
                  aria-label="Explore Indian Street Food stories"
                >
                  Indian Street Food
                </a>
              </li>
              <li>
                <a
                  href="#/explore?cat=Traditional%20Indian%20Cuisine"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/explore?cat=Traditional Indian Cuisine');
                  }}
                  className="hover:text-white transition-colors text-left block"
                  aria-label="Explore Traditional Indian Cuisine stories"
                >
                  Traditional Cuisine
                </a>
              </li>
              <li>
                <a
                  href="#/explore?cat=Recipes%20and%20Cooking"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/explore?cat=Recipes and Cooking');
                  }}
                  className="hover:text-white transition-colors text-left block"
                  aria-label="Explore Recipes and Cooking guides"
                >
                  Recipes & Cooking
                </a>
              </li>
              <li>
                <a
                  href="#/explore?cat=Desserts%20and%20Baking"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/explore?cat=Desserts and Baking');
                  }}
                  className="hover:text-white transition-colors text-left block"
                  aria-label="Explore Desserts and Baking stories"
                >
                  Desserts & Sweets
                </a>
              </li>
              <li>
                <a
                  href="#/explore?cat=Food%20Travel"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/explore?cat=Food Travel');
                  }}
                  className="hover:text-white transition-colors text-left block"
                  aria-label="Explore Food Travel Guides"
                >
                  Food Travel Guides
                </a>
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
                <a
                  href="#/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/about');
                  }}
                  className="hover:text-white transition-colors text-left block"
                  aria-label="About TasteTrails Mission and Team"
                >
                  About Our Mission
                </a>
              </li>
              <li>
                <a
                  href="#/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('#/contact');
                  }}
                  className="hover:text-white transition-colors text-left block"
                  aria-label="Contact TasteTrails and Editorial Submissions"
                >
                  Contact & Submissions
                </a>
              </li>
            </ul>
            <div className="pt-2 border-t border-[#FFF6E8]/10">
              <span className="text-xs text-[#FFF6E8]/60 block mb-2">Connect with us</span>
              <div className="flex items-center gap-3 text-xs text-[#F4A62A]">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-0.5"
                  aria-label="TasteTrails on YouTube channel"
                >
                  <span>TasteTrails YouTube</span> <ArrowUpRight className="w-3 h-3" />
                </a>
                <span className="text-[#FFF6E8]/30">·</span>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-0.5"
                  aria-label="TasteTrails on Instagram profile"
                >
                  <span>TasteTrails Instagram</span> <ArrowUpRight className="w-3 h-3" />
                </a>
                <span className="text-[#FFF6E8]/30">·</span>
                <a
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-0.5"
                  aria-label="TasteTrails on Pinterest boards"
                >
                  <span>TasteTrails Pinterest</span> <ArrowUpRight className="w-3 h-3" />
                </a>
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
