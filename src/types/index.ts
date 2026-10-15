export type ArticleCategory =
  | 'Indian Street Food'
  | 'Food Travel'
  | 'Restaurant Reviews'
  | 'Recipes and Cooking'
  | 'Traditional Indian Cuisine'
  | 'Desserts and Baking'
  | 'Food Vlogs'
  | 'Food Photography'
  | 'Food Vlogs and Creator Business';

export interface ArticleTable {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface ArticleSection {
  title: string;
  content: string[]; // paragraphs
  subsections?: {
    subtitle: string;
    text: string[];
  }[];
  table?: ArticleTable;
  callout?: {
    title: string;
    content: string;
    type?: 'note' | 'tip' | 'template' | 'script' | 'itinerary' | 'checklist';
  };
  quote?: string;
  quoteAuthor?: string;
}

export interface PageSEO {
  metaTitle: string;
  metaDescription: string;
  mainKeyword: string;
  relatedKeywords: [string, string];
  canonicalUrl: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: ArticleCategory;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedDate: string;
  readingTime: string;
  wordCount: number;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  sections: ArticleSection[];
  relatedArticleSlugs: string[];
  seo: PageSEO;
}

export interface RecipeIngredient {
  name: string;
  quantity: number;
  unit: string;
  notes?: string;
}

export interface RecipeStep {
  stepNumber: number;
  instruction: string;
  tip?: string;
}

export interface Recipe {
  id: string;
  slug: string;
  name: string;
  category: string;
  cuisine: string;
  dishType: 'Curry' | 'Rice' | 'Street Food' | 'Snack' | 'Dessert';
  isVegetarian: boolean;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  coverImage: string;
  description: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  equipment: string[];
  substitutions: string[];
  storage: string;
  allergens: string[];
  seo: PageSEO;
}

export interface VlogVideo {
  id: string;
  title: string;
  description: string;
  category:
    | 'Street Food Tours'
    | 'Restaurant Visits'
    | 'Cooking Videos'
    | 'Dessert Trails'
    | 'Food Challenges'
    | 'Travel Food Diaries';
  duration?: string;
  thumbnail: string;
  youtubeId?: string; // e.g. "dQw4w9WgXcQ" or valid embed
  location?: string;
  featured?: boolean;
}

export interface RestaurantReview {
  id: string;
  name: string;
  city: string;
  locationDetails: string;
  cuisine: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  reviewDate: string;
  dishRecommendations: string[];
  pros: string[];
  cons: string[];
  summary: string;
  coverImage: string;
  ambience: string;
  foodScore: string;
  serviceScore: string;
  valueScore: string;
  overallVerdict: string;
  isFictionalDemo: boolean;
}
