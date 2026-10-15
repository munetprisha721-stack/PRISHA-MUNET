import React, { useState, useMemo } from 'react';
import { RecipeCard } from '../components/RecipeCard';
import { RECIPES } from '../data/recipes';
import { Utensils, Filter, Check, X } from 'lucide-react';

interface RecipesPageProps {
  onNavigate: (path: string) => void;
}

export const RecipesPage: React.FC<RecipesPageProps> = ({ onNavigate }) => {
  const [selectedCuisine, setSelectedCuisine] = useState<string>('All');
  const [selectedDishType, setSelectedDishType] = useState<string>('All');
  const [vegOnly, setVegOnly] = useState<boolean>(false);

  const cuisines = ['All', 'North Indian', 'Hyderabadi', 'Maharashtrian', 'Punjabi', 'Kashmiri & Awadhi'];
  const dishTypes = ['All', 'Curry', 'Rice', 'Street Food', 'Snack', 'Dessert'];

  const filteredRecipes = useMemo(() => {
    return RECIPES.filter((recipe) => {
      const matchCuisine = selectedCuisine === 'All' || recipe.cuisine === selectedCuisine;
      const matchDishType = selectedDishType === 'All' || recipe.dishType === selectedDishType;
      const matchVeg = !vegOnly || recipe.isVegetarian;

      return matchCuisine && matchDishType && matchVeg;
    });
  }, [selectedCuisine, selectedDishType, vegOnly]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-3">
        <span className="text-xs uppercase font-bold tracking-wider text-[#284B36]">
          Kitchen Tested & Calibrated
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#35271F]">
          Authentic Regional Recipes
        </h1>
        <p className="text-[#78685D] text-sm sm:text-base max-w-2xl leading-relaxed">
          Master timeless Indian dishes with exact metric measurements, allergen guidelines, equipment checklists, and step-by-step chef tips.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white p-5 rounded-2xl border border-[#35271F]/10 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Cuisine Selector */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#78685D] font-medium">Cuisine:</span>
              <select
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
                className="bg-[#FFF6E8] border border-[#35271F]/15 rounded-lg px-3 py-1.5 text-xs text-[#35271F] font-semibold focus:outline-none focus:border-[#284B36]"
              >
                {cuisines.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Dish Type Selector */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#78685D] font-medium">Dish Type:</span>
              <select
                value={selectedDishType}
                onChange={(e) => setSelectedDishType(e.target.value)}
                className="bg-[#FFF6E8] border border-[#35271F]/15 rounded-lg px-3 py-1.5 text-xs text-[#35271F] font-semibold focus:outline-none focus:border-[#284B36]"
              >
                {dishTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Vegetarian Toggle Button */}
          <button
            onClick={() => setVegOnly(!vegOnly)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 border transition-all ${
              vegOnly
                ? 'bg-[#284B36] text-white border-[#284B36]'
                : 'bg-[#FFF6E8] text-[#35271F] border-[#35271F]/15 hover:bg-[#35271F]/5'
            }`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                vegOnly ? 'bg-white' : 'bg-[#284B36]'
              }`}
            />
            <span>Vegetarian Only</span>
          </button>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-[#78685D]">
        <span>
          Showing <strong className="text-[#35271F]">{filteredRecipes.length}</strong> recipes
        </span>
        {(selectedCuisine !== 'All' || selectedDishType !== 'All' || vegOnly) && (
          <button
            onClick={() => {
              setSelectedCuisine('All');
              setSelectedDishType('All');
              setVegOnly(false);
            }}
            className="text-[#284B36] font-semibold hover:underline flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset Recipe Filters</span>
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredRecipes.length === 0 ? (
        <div className="p-16 text-center bg-white rounded-2xl border border-[#35271F]/10 space-y-3">
          <Utensils className="w-10 h-10 mx-auto text-[#284B36]/30" />
          <h3 className="font-serif text-xl font-bold text-[#35271F]">
            No matching recipes found
          </h3>
          <p className="text-xs text-[#78685D] max-w-md mx-auto">
            Try adjusting your cuisine or dietary filters to view more culinary recipes.
          </p>
          <button
            onClick={() => {
              setSelectedCuisine('All');
              setSelectedDishType('All');
              setVegOnly(false);
            }}
            className="mt-2 px-4 py-2 bg-[#284B36] text-white text-xs font-semibold uppercase tracking-wider rounded-lg"
          >
            Show All Recipes
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelect={(slug) => onNavigate(`#/recipe/${slug}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
