import React, { useState } from 'react';
import { Recipe } from '../types';
import { Clock, Users, UtensilsCrossed, ArrowRight } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (slug: string) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSelect }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={() => onSelect(recipe.slug)}
      className="group cursor-pointer bg-white/70 hover:bg-white rounded-xl border border-[#35271F]/10 hover:border-[#284B36]/30 overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col"
    >
      {/* Dish Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#FFF6E8]">
        {!imgError ? (
          <img
            src={recipe.coverImage}
            alt={`${recipe.name} - authentic ${recipe.cuisine} recipe`}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#35271F]/5 text-[#35271F]/40">
            <UtensilsCrossed className="w-8 h-8 mb-2 text-[#284B36]/40" />
            <span className="text-xs uppercase tracking-wider font-semibold">TasteTrails Recipe</span>
          </div>
        )}

        {/* Veg / Non-Veg Indicator */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1.5 shadow-sm">
          <span
            className={`w-2 h-2 rounded-full ${
              recipe.isVegetarian ? 'bg-[#284B36]' : 'bg-[#B83A24]'
            }`}
          />
          <span className={recipe.isVegetarian ? 'text-[#284B36]' : 'text-[#B83A24]'}>
            {recipe.isVegetarian ? 'Vegetarian' : 'Non-Veg'}
          </span>
        </div>

        {/* Difficulty badge */}
        <div className="absolute top-3 right-3 bg-[#35271F]/80 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
          {recipe.difficulty}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#284B36]">
            {recipe.cuisine} · {recipe.dishType}
          </span>
          <h3 className="font-serif text-lg font-bold text-[#35271F] group-hover:text-[#284B36] transition-colors leading-snug">
            <a
              href={`#/recipe/${recipe.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onSelect(recipe.slug);
              }}
              className="hover:underline"
              aria-label={`View recipe: ${recipe.name}`}
            >
              {recipe.name}
            </a>
          </h3>
          <p className="text-xs text-[#78685D] leading-relaxed line-clamp-2">
            {recipe.description}
          </p>
        </div>

        {/* Metrics & Button */}
        <div className="pt-3 border-t border-[#35271F]/10 flex items-center justify-between text-xs text-[#78685D]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#35271F]/50" />
              <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes}m</span>
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#35271F]/50" />
              <span>{recipe.servings} serv</span>
            </span>
          </div>

          <a
            href={`#/recipe/${recipe.slug}`}
            onClick={(e) => {
              e.preventDefault();
              onSelect(recipe.slug);
            }}
            className="inline-flex items-center gap-1 font-semibold text-[#284B36] hover:underline"
            aria-label={`View full recipe instructions for ${recipe.name}`}
          >
            <span>View Recipe</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
