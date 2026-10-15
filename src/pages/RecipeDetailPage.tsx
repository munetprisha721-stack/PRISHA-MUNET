import React, { useState, useEffect } from 'react';
import { Recipe } from '../types';
import { RECIPES } from '../data/recipes';
import { updatePageSEO } from '../utils/seo';
import {
  ArrowLeft,
  Clock,
  Users,
  Check,
  AlertTriangle,
  Flame,
  ChefHat,
  UtensilsCrossed,
  Printer,
  Minus,
  Plus,
  Search
} from 'lucide-react';

interface RecipeDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({
  slug,
  onNavigate,
}) => {
  const recipe = RECIPES.find((r) => r.slug === slug);

  const [servingScale, setServingScale] = useState(recipe ? recipe.servings : 4);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (recipe) {
      setServingScale(recipe.servings);
      updatePageSEO(recipe.seo);
    }
  }, [recipe, slug]);

  if (!recipe) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-[#35271F]">Recipe Not Found</h2>
        <p className="text-[#78685D] text-sm">
          The requested recipe is not currently in our database.
        </p>
        <button
          onClick={() => onNavigate('#/recipes')}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#284B36] text-white text-xs font-semibold uppercase tracking-wider rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Recipe Directory</span>
        </button>
      </div>
    );
  }

  const multiplier = servingScale / recipe.servings;

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleStep = (stepNum: number) => {
    setCompletedSteps((prev) => ({ ...prev, [stepNum]: !prev[stepNum] }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pb-20">
      {/* Top Banner */}
      <div className="bg-[#FFF6E8] border-b border-[#35271F]/10 pt-8 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => onNavigate('#/recipes')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#35271F]/70 hover:text-[#284B36] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Recipes</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-xs text-[#35271F]/70 hover:text-[#35271F] px-3 py-1.5 bg-white rounded border border-[#35271F]/10 transition-colors"
              title="Print recipe card"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Recipe</span>
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold uppercase tracking-wider text-[#284B36]">
                {recipe.cuisine} · {recipe.dishType}
              </span>
              <span>·</span>
              <span className={`font-semibold ${recipe.isVegetarian ? 'text-[#284B36]' : 'text-[#B83A24]'}`}>
                {recipe.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#35271F] leading-tight">
              {recipe.name}
            </h1>

            <p className="text-base sm:text-lg text-[#78685D] leading-relaxed max-w-3xl">
              {recipe.description}
            </p>

            {/* SEO Keywords Ribbon */}
            <div className="bg-white/80 p-3 rounded-lg border border-[#35271F]/10 text-xs flex flex-wrap items-center gap-2 text-[#78685D]">
              <span className="font-semibold text-[#284B36] flex items-center gap-1">
                <Search className="w-3.5 h-3.5" /> Recipe Focus Keywords:
              </span>
              <span className="bg-[#FFF6E8] px-2 py-0.5 rounded text-[#35271F] font-semibold border border-[#35271F]/10">
                {recipe.seo.mainKeyword}
              </span>
              <span className="bg-[#FFF6E8] px-2 py-0.5 rounded text-[#78685D] border border-[#35271F]/10">
                {recipe.seo.relatedKeywords[0]}
              </span>
              <span className="bg-[#FFF6E8] px-2 py-0.5 rounded text-[#78685D] border border-[#35271F]/10">
                {recipe.seo.relatedKeywords[1]}
              </span>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#35271F]/10">
              <div className="flex items-center gap-2 text-xs text-[#78685D]">
                <Clock className="w-4 h-4 text-[#284B36]" />
                <div>
                  <span className="block font-bold text-[#35271F]">{recipe.prepTimeMinutes} mins</span>
                  <span>Prep Time</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#78685D]">
                <Flame className="w-4 h-4 text-[#B83A24]" />
                <div>
                  <span className="block font-bold text-[#35271F]">{recipe.cookTimeMinutes} mins</span>
                  <span>Cook Time</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#78685D]">
                <Users className="w-4 h-4 text-[#F4A62A]" />
                <div>
                  <span className="block font-bold text-[#35271F]">{servingScale} Servings</span>
                  <span>Yield</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#78685D]">
                <ChefHat className="w-4 h-4 text-[#35271F]" />
                <div>
                  <span className="block font-bold text-[#35271F]">{recipe.difficulty}</span>
                  <span>Skill Level</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Recipe Photograph */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-[#35271F]">
          {!imgError ? (
            <img
              src={recipe.coverImage}
              alt={recipe.name}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#35271F] text-white/50">
              <UtensilsCrossed className="w-16 h-16 mb-2 text-[#284B36]" />
              <span className="text-sm font-semibold uppercase tracking-wider">TasteTrails Recipe Kitchen</span>
            </div>
          )}
        </div>
      </div>

      {/* Allergen & Dietary Warning Notice */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-[#35271F]">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-semibold text-amber-900 block">Allergen Notice:</strong>
            <p className="text-amber-900/80 leading-relaxed">
              Contains: {recipe.allergens.join(', ')}. Please review substitutions below for nut-free, vegan, or gluten-conscious adjustments.
            </p>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout: Ingredients & Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Ingredients Column with Interactive Scaler */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#35271F]/10 shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#35271F]/10">
            <h2 className="font-serif text-xl font-bold text-[#35271F]">Ingredients</h2>

            {/* Serving Size Adjuster */}
            <div className="flex items-center gap-2 bg-[#FFF6E8] px-2 py-1 rounded-lg border border-[#35271F]/10">
              <button
                onClick={() => setServingScale(Math.max(1, servingScale - 1))}
                className="p-1 hover:text-[#B83A24] text-[#35271F]"
                title="Decrease servings"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-bold text-[#35271F] min-w-8 text-center">
                {servingScale} serv
              </span>
              <button
                onClick={() => setServingScale(servingScale + 1)}
                className="p-1 hover:text-[#B83A24] text-[#35271F]"
                title="Increase servings"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <p className="text-[11px] text-[#78685D] italic">
            Tap ingredients to check them off as you prepare your mise-en-place.
          </p>

          <ul className="space-y-3">
            {recipe.ingredients.map((ing, idx) => {
              const scaledQty = Math.round(ing.quantity * multiplier * 10) / 10;
              const isChecked = !!checkedIngredients[idx];

              return (
                <li
                  key={idx}
                  onClick={() => toggleIngredient(idx)}
                  className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                    isChecked
                      ? 'bg-[#284B36]/5 text-[#78685D] line-through'
                      : 'hover:bg-[#FFF6E8]'
                  }`}
                >
                  <div
                    className={`w-4 h-4 mt-0.5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                      isChecked
                        ? 'bg-[#284B36] border-[#284B36] text-white'
                        : 'border-[#35271F]/30 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3" />}
                  </div>

                  <div className="text-xs sm:text-sm leading-relaxed">
                    <span className="font-semibold text-[#35271F]">
                      {scaledQty} {ing.unit}{' '}
                    </span>
                    <span>{ing.name}</span>
                    {ing.notes && (
                      <span className="text-xs text-[#78685D] italic block">
                        ({ing.notes})
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Equipment Needed */}
          {recipe.equipment.length > 0 && (
            <div className="pt-4 border-t border-[#35271F]/10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#35271F] block">
                Recommended Equipment
              </span>
              <ul className="text-xs text-[#78685D] space-y-1 list-disc list-inside">
                {recipe.equipment.map((eq, i) => (
                  <li key={i}>{eq}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Steps Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#35271F]/10 shadow-xs space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#35271F]">
              Step-by-Step Instructions
            </h2>

            <div className="space-y-6">
              {recipe.steps.map((step) => {
                const isStepDone = !!completedSteps[step.stepNumber];

                return (
                  <div
                    key={step.stepNumber}
                    className={`p-4 rounded-xl border transition-all ${
                      isStepDone
                        ? 'bg-[#284B36]/5 border-[#284B36]/30'
                        : 'bg-[#FFF6E8]/40 border-[#35271F]/10'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="w-7 h-7 rounded-full bg-[#284B36] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {step.stepNumber}
                      </span>
                      <button
                        onClick={() => toggleStep(step.stepNumber)}
                        className={`text-xs px-2.5 py-1 rounded font-semibold transition-colors ${
                          isStepDone
                            ? 'bg-[#284B36] text-white'
                            : 'bg-white text-[#78685D] border border-[#35271F]/10 hover:text-[#35271F]'
                        }`}
                      >
                        {isStepDone ? 'Completed ✓' : 'Mark Done'}
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-[#35271F] leading-relaxed pt-1">
                      {step.instruction}
                    </p>

                    {step.tip && (
                      <div className="mt-3 p-2.5 bg-white rounded-lg border border-[#F4A62A]/40 text-xs text-[#78685D] flex items-start gap-2">
                        <span className="font-bold text-[#B83A24] shrink-0">Chef's Secret:</span>
                        <span>{step.tip}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Substitutions & Storage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-[#35271F]/10 space-y-2">
              <strong className="text-xs font-bold uppercase tracking-wider text-[#284B36] block">
                Substitutions & Variations
              </strong>
              <ul className="text-xs text-[#78685D] space-y-1.5 list-disc list-inside leading-relaxed">
                {recipe.substitutions.map((sub, i) => (
                  <li key={i}>{sub}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#35271F]/10 space-y-2">
              <strong className="text-xs font-bold uppercase tracking-wider text-[#35271F] block">
                Storage & Reheating
              </strong>
              <p className="text-xs text-[#78685D] leading-relaxed">
                {recipe.storage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
