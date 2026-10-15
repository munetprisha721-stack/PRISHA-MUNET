import { PageSEO } from '../types';

export function updatePageSEO(seo: PageSEO) {
  if (typeof document === 'undefined') return;

  // 1. Update Document Title (30-60 characters)
  document.title = seo.metaTitle;

  // 2. Update Meta Description (120-160 characters)
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.setAttribute('name', 'description');
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute('content', seo.metaDescription);

  // 3. Update Meta Keywords (Main Keyword + 2 Related Keywords)
  const keywordsStr = [seo.mainKeyword, ...seo.relatedKeywords].join(', ');
  let kwMeta = document.querySelector('meta[name="keywords"]');
  if (!kwMeta) {
    kwMeta = document.createElement('meta');
    kwMeta.setAttribute('name', 'keywords');
    document.head.appendChild(kwMeta);
  }
  kwMeta.setAttribute('content', keywordsStr);

  // 4. Update OpenGraph Tags
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', seo.metaTitle);

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', seo.metaDescription);

  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (!ogUrl) {
    ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    document.head.appendChild(ogUrl);
  }
  ogUrl.setAttribute('content', seo.canonicalUrl);

  // 5. Update Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', seo.canonicalUrl);
}

export const SITE_STATIC_PAGES_SEO: Record<string, PageSEO> = {
  home: {
    metaTitle: 'TasteTrails – Indian Food & Street Flavours | TasteTrails',
    metaDescription: 'Discover authentic Indian street food, traditional heritage recipes, candid restaurant reviews, and immersive culinary vlogs with TasteTrails.',
    mainKeyword: 'Indian food blog',
    relatedKeywords: ['Indian street food guide', 'authentic regional recipes'],
    canonicalUrl: 'https://tastetrails.app/',
  },
  explore: {
    metaTitle: 'Explore Food Stories & Guides | TasteTrails Archive',
    metaDescription: 'Browse 12 comprehensive food essays spanning Delhi and Mumbai street food rivalry, spice science, vegetarian traditions, and restaurant critiques.',
    mainKeyword: 'Indian culinary stories',
    relatedKeywords: ['regional food articles', 'traditional cooking guides'],
    canonicalUrl: 'https://tastetrails.app/explore',
  },
  recipes: {
    metaTitle: 'Authentic Indian Recipes & Curries | TasteTrails',
    metaDescription: 'Tested metric recipes for restaurant-style Butter Chicken, Hyderabadi Dum Biryani, Mumbai Vada Pav, and Dal Makhani with scalable servings.',
    mainKeyword: 'authentic Indian recipes',
    relatedKeywords: ['step by step curry recipes', 'traditional home cooking'],
    canonicalUrl: 'https://tastetrails.app/recipes',
  },
  vlogs: {
    metaTitle: 'Indian Food Vlogs & Street Video Trails | TasteTrails',
    metaDescription: 'Watch high-definition food vlogs exploring Old Delhi street food stalls, Mumbai Chowpatty trails, and regional biryani handi masterclasses.',
    mainKeyword: 'Indian food vlogs',
    relatedKeywords: ['street food tours', 'culinary travel videos'],
    canonicalUrl: 'https://tastetrails.app/vlogs',
  },
  reviews: {
    metaTitle: 'Honest Indian Restaurant Reviews & Critiques | TasteTrails',
    metaDescription: 'Candid, balanced restaurant evaluations covering dining ambience, service cadence, honest pros and cons, and verifiable pricing breakdown.',
    mainKeyword: 'Indian restaurant reviews',
    relatedKeywords: ['honest dining critiques', 'regional food guides'],
    canonicalUrl: 'https://tastetrails.app/reviews',
  },
  about: {
    metaTitle: 'About TasteTrails – Celebrating Food Stories & Culture',
    metaDescription: 'TasteTrails is an independent digital food publication dedicated to celebrating subcontinental culinary heritage, street artisans, and home recipes.',
    mainKeyword: 'TasteTrails food publication',
    relatedKeywords: ['culinary storytelling', 'Indian gastronomy mission'],
    canonicalUrl: 'https://tastetrails.app/about',
  },
  contact: {
    metaTitle: 'Contact TasteTrails – Editorial Submissions & Tips',
    metaDescription: 'Get in touch with the TasteTrails editorial team. Submit street food recommendations, recipe inquiries, or reader feedback.',
    mainKeyword: 'contact TasteTrails',
    relatedKeywords: ['culinary submissions', 'food creator inquiry'],
    canonicalUrl: 'https://tastetrails.app/contact',
  },
  bookmarks: {
    metaTitle: 'Saved Food Stories & Bookmarked Recipes | TasteTrails',
    metaDescription: 'Access your saved food articles, quick-reference recipes, and travel food itineraries saved locally in your personal TasteTrails collection.',
    mainKeyword: 'saved food stories',
    relatedKeywords: ['personal recipe book', 'saved street food trails'],
    canonicalUrl: 'https://tastetrails.app/bookmarks',
  },
};
