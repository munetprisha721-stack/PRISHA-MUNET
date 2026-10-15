import React from 'react';
import {
  Flame,
  Star,
  Soup,
  ChefHat,
  Cake,
  Compass,
  Video,
  BookOpen
} from 'lucide-react';

interface CategoryNavProps {
  onSelectCategory: (category: string) => void;
  activeCategory?: string;
}

export const CATEGORIES_LIST = [
  { name: 'Indian Street Food', icon: Flame, color: 'text-[#B83A24]', bg: 'bg-[#B83A24]/10', border: 'border-[#B83A24]/20' },
  { name: 'Restaurant Reviews', icon: Star, color: 'text-[#F4A62A]', bg: 'bg-[#F4A62A]/10', border: 'border-[#F4A62A]/20' },
  { name: 'Traditional Indian Cuisine', icon: Soup, color: 'text-[#284B36]', bg: 'bg-[#284B36]/10', border: 'border-[#284B36]/20' },
  { name: 'Recipes and Cooking', icon: ChefHat, color: 'text-[#B83A24]', bg: 'bg-[#B83A24]/10', border: 'border-[#B83A24]/20' },
  { name: 'Desserts and Baking', icon: Cake, color: 'text-amber-600', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
  { name: 'Food Travel', icon: Compass, color: 'text-emerald-700', bg: 'bg-emerald-600/10', border: 'border-emerald-600/20' },
  { name: 'Food Vlogs', icon: Video, color: 'text-[#B83A24]', bg: 'bg-[#B83A24]/10', border: 'border-[#B83A24]/20' },
  { name: 'Food Culture and Stories', icon: BookOpen, color: 'text-[#35271F]', bg: 'bg-[#35271F]/10', border: 'border-[#35271F]/20' },
];

export const CategoryNav: React.FC<CategoryNavProps> = ({
  onSelectCategory,
  activeCategory,
}) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase font-semibold tracking-wider text-[#B83A24] block mb-1">
              Curated Departments
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#35271F]">
              Explore by Category
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#78685D] max-w-md">
            Dive deep into regional street trails, royal heritage recipes, candid critiques, and video travelogues.
          </p>
        </div>

        {/* 8 Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORIES_LIST.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.name;

            return (
              <button
                key={cat.name}
                onClick={() => onSelectCategory(cat.name)}
                className={`text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-white border-[#B83A24] shadow-md ring-1 ring-[#B83A24]'
                    : 'bg-white/70 hover:bg-white border-[#35271F]/10 hover:border-[#35271F]/30 hover:shadow-sm'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg ${cat.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${cat.color}`} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#35271F] group-hover:text-[#B83A24] transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] text-[#78685D] mt-0.5 block">
                    Browse stories & guides →
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
