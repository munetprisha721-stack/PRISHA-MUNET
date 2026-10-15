import React, { useState } from 'react';
import { Recipe } from '../types';
import { Clock, Users, ChefHat, ArrowRight } from 'lucide-react';

interface RecipeOfTheWeekProps {
  recipe: Recipe;
  onSelect: (slug: string) => void;
}

export const RecipeOfTheWeek: React.FC<RecipeOfTheWeekProps> = ({
  recipe,
  onSelect,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="my-16">
      <div className="bg-gradient-to-br from-[#284B36]/5 to-[#FFF6E8] rounded-2xl border border-[#284B36]/20 p-6 sm:p-10 shadow-sm overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Dish Image */}
          <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-xl overflow-hidden shadow-md shrink-0">
            {!imgError ? (
              <img
                src={recipe.coverImage}
                alt={recipe.name}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-[#284B36]/10 flex items-center justify-center">
                <ChefHat className="w-12 h-12 text-[#284B36]/40" />
              </div>
            )}
            <div className="absolute top-4 left-4 bg-[#284B36] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow-sm">
              Recipe of the Week
            </div>
          </div>

          {/* Details */}
          <div className="w-full lg:w-1/2 space-y-5">
            <div className="space-y-2">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#284B36]">
                {recipe.cuisine} · {recipe.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#35271F] leading-snug">
                {recipe.name}
              </h3>
              <p className="text-sm sm:text-base text-[#78685D] leading-relaxed">
                {recipe.description}
              </p>
            </div>

            {/* Practical Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-[#35271F]/10">
              <div className="text-center p-2 rounded bg-white/60">
                <span className="block text-[11px] text-[#78685D] uppercase font-semibold">Prep</span>
                <span className="font-serif font-bold text-sm text-[#35271F]">{recipe.prepTimeMinutes}m</span>
              </div>
              <div className="text-center p-2 rounded bg-white/60">
                <span className="block text-[11px] text-[#78685D] uppercase font-semibold">Cook</span>
                <span className="font-serif font-bold text-sm text-[#35271F]">{recipe.cookTimeMinutes}m</span>
              </div>
              <div className="text-center p-2 rounded bg-white/60">
                <span className="block text-[11px] text-[#78685D] uppercase font-semibold">Serves</span>
                <span className="font-serif font-bold text-sm text-[#35271F]">{recipe.servings}</span>
              </div>
              <div className="text-center p-2 rounded bg-white/60">
                <span className="block text-[11px] text-[#78685D] uppercase font-semibold">Level</span>
                <span className="font-serif font-bold text-sm text-[#35271F]">{recipe.difficulty}</span>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                onClick={() => onSelect(recipe.slug)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#284B36] hover:bg-[#1f3b2a] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
              >
                <span>View Complete Recipe & Steps</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
