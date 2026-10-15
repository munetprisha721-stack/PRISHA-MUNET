# TasteTrails — Food Blogging and Food Vlogging Website

> **Good Food. Great Stories. Unforgettable Flavours.**

TasteTrails is a digital culinary publication celebrating subcontinental food culture through street food discoveries, authentic regional recipes, candid restaurant critiques, and immersive food vlogs.

Built as a college project and ready for immediate deployment on **Vercel**.

---

## 🎨 Brand Identity & Color Palette

TasteTrails uses a warm, appetizing, and editorial colour palette with strict contrast ratios:

| Color Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Chilli Red** | `#B83A24` | Primary brand accent, primary CTA buttons |
| **Saffron Gold** | `#F4A62A` | Highlights, badges, warmth accents |
| **Warm Cream** | `#FFF6E8` | Primary warm background canvas |
| **Herb Green** | `#284B36` | Secondary actions, recipe badges & accents |
| **Espresso Brown** | `#35271F` | Deep editorial typography, footer background |
| **Muted Text** | `#78685D` | Secondary details, metadata, captions |
| **Pure White** | `#FFFFFF` | Card surfaces, modals, crisp contrast |

### Typography
- **Headings & Editorial Titles:** Playfair Display (Serif)
- **Body Prose & Metadata:** Plus Jakarta Sans (Sans-Serif)

---

## 📖 The 12 Complete Food Articles Included

All 12 required long-form articles (approx. 900–1,200 words each) are fully written with detailed sections, comparison tables, itineraries, scripts, and checklists:

1. **The Ultimate Guide to Indian Street Food** (Category: Indian Street Food) — Features regional staples table, chutney chemistry, and hygiene guide.
2. **Delhi vs Mumbai Street Food — Which City Wins?** (Category: Food Travel) — Features 24-hour food itineraries for both megacities.
3. **How to Write an Honest and Helpful Restaurant Review** (Category: Restaurant Reviews) — Features sample review template and fictional case study.
4. **The Ultimate Guide to Indian Spices and Their Uses** (Category: Recipes and Cooking) — Features 12-spice reference matrix and tadka science.
5. **How to Make Restaurant-Style Butter Chicken at Home** (Category: Recipes and Cooking) — Features metric ingredient list, numbered instructions, and allergen notes.
6. **Biryani Explained — Regional Styles, Ingredients, and Methods** (Category: Traditional Indian Cuisine) — Features regional biryani comparison table (Hyderabadi, Awadhi, Kolkata, Malabar).
7. **Desserts Around India That Every Food Lover Should Discover** (Category: Desserts and Baking) — Features 10-sweet discovery table across milk, chenna, and syrup traditions.
8. **How to Start a Food Vlog — First Reel to Complete Channel** (Category: Food Vlogs) — Features sample 60-second reel script, shot list, and pre-filming checklist.
9. **Five Food Photography Tricks That Make Every Dish Look Delicious** (Category: Food Photography) — Features lighting, angles, natural styling, and 5-second pre-shot audit.
10. **How to Discover Hidden Food Gems While Travelling** (Category: Food Travel) — Features illustrative 1-day food itinerary for Jaipur.
11. **Vegetarian Indian Food — Beyond Paneer and Potatoes** (Category: Traditional Indian Cuisine) — Features 5 practical plant-based meals and ancient millets.
12. **The Business of Food Vlogging — Building a Food Brand** (Category: Food Vlogs and Creator Business) — Features 30-day content calendar and creator integrity checklist.

---

## 🍲 Interactive Recipe Features

- Scalable serving size multiplier (recalculates ingredient quantities in real-time)
- Interactive ingredient checkboxes for cooking prep
- Step-by-step numbered instructions with chef's secrets
- Allergen warnings & dietary variation guidelines
- Prep time, cook time, difficulty level, and equipment lists

---

## 🎥 Food Vlogs & Video Gallery

- Curated category galleries: Street Food Tours, Cooking Videos, Restaurant Visits, Dessert Trails, Food Challenges, Travel Food Diaries
- Responsive modal video player with YouTube embed support
- In-app custom YouTube URL loader allowing creators to add and test custom food vlogs
- Zero fabricated video views or likes

---

## 🔍 Search, Bookmarks, and Navigation

- **Real-Time Search:** Instant modal search across all articles, recipes, and reviews (press `Ctrl+K` or tap the search icon).
- **Persistent Bookmarks:** Save articles locally via browser `localStorage`. Dedicated Bookmarks page with quick-remove and clear-all actions.
- **Category Filtering:** 8 curated department filters on Explore Food and Recipe directories.
- **Top Bar Contract:** Clean 1-line brand title, single-line navigation links, and primary CTA.

---

## 💻 Tech Stack

- **React 19**
- **TypeScript**
- **Vite 8**
- **Tailwind CSS v4**
- **Lucide Icons**
- **HTML5 Semantic & Schema.org JSON-LD Metadata**

---

## 🚀 Local Development Setup

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
The compiled static assets will be output to the `dist/` directory.

### 5. Type Checking / Linting
```bash
npm run lint
```

---

## 🌐 How to Deploy to Vercel

Deploying TasteTrails to Vercel is straightforward:

### Method 1: Deploy via Vercel Git Integration (Recommended)
1. Push this repository to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of TasteTrails food website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/tastetrails.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com) with your GitHub account.
3. Click **Add New...** → **Project**.
4. Select your `tastetrails` repository and click **Import**.
5. Vercel automatically detects Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**. Your site will be live on a `*.vercel.app` URL within 60 seconds!

### Method 2: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```
Follow the interactive prompts (select default settings) to deploy immediately.

---

## 📋 Acceptance Criteria Checklist

- [x] TasteTrails branding and colour palette implemented
- [x] Responsive navigation bar with 3-zone contract & working mobile menu
- [x] All 12 full-length, detailed food articles published
- [x] Each article and recipe has its own working URL
- [x] Dedicated Recipes page with serving multiplier & ingredient checklist
- [x] Dedicated Food Vlogs gallery with YouTube modal embed support
- [x] Dedicated Restaurant Reviews page with honest pros/cons and transparency disclaimer
- [x] Global real-time search modal (`Ctrl+K`)
- [x] Persistent browser bookmarks via `localStorage`
- [x] Newsletter and Contact forms with input validation & front-end demo transparency
- [x] Zero broken images policy with styled resilient fallbacks
- [x] SEO-ready with OpenGraph tags, JSON-LD Schema, `robots.txt`, and `sitemap.xml`
- [x] Vercel deployment configuration (`vercel.json`) and documentation included
