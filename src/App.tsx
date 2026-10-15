import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { RecipesPage } from './pages/RecipesPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { VlogsPage } from './pages/VlogsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookmarksPage } from './pages/BookmarksPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.hash || '#/'
  );
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentPath(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path: string) => {
    if (window.location.hash === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = path;
    }
  };

  // Route Dispatcher
  const renderCurrentRoute = () => {
    const cleanHash = currentPath.split('?')[0];
    const queryString = currentPath.includes('?') ? currentPath.split('?')[1] : '';
    const searchParams = new URLSearchParams(queryString);

    // 1. Article detail: #/article/:slug
    if (cleanHash.startsWith('#/article/')) {
      const slug = cleanHash.replace('#/article/', '');
      return <ArticleDetailPage slug={slug} onNavigate={handleNavigate} />;
    }

    // 2. Recipe detail: #/recipe/:slug
    if (cleanHash.startsWith('#/recipe/')) {
      const slug = cleanHash.replace('#/recipe/', '');
      return <RecipeDetailPage slug={slug} onNavigate={handleNavigate} />;
    }

    // 3. Explore articles: #/explore
    if (cleanHash === '#/explore') {
      const initialCat = searchParams.get('cat') || undefined;
      return <ArticlesPage initialCategory={initialCat} onNavigate={handleNavigate} />;
    }

    // 4. Recipes directory: #/recipes
    if (cleanHash === '#/recipes') {
      return <RecipesPage onNavigate={handleNavigate} />;
    }

    // 5. Food Vlogs: #/vlogs
    if (cleanHash === '#/vlogs') {
      return <VlogsPage />;
    }

    // 6. Restaurant reviews: #/reviews
    if (cleanHash === '#/reviews') {
      return <ReviewsPage />;
    }

    // 7. About: #/about
    if (cleanHash === '#/about') {
      return <AboutPage onNavigate={handleNavigate} />;
    }

    // 8. Contact: #/contact
    if (cleanHash === '#/contact') {
      return <ContactPage />;
    }

    // 9. Bookmarks: #/bookmarks
    if (cleanHash === '#/bookmarks') {
      return <BookmarksPage onNavigate={handleNavigate} />;
    }

    // Default: Home Page
    return <HomePage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF6E8] text-[#35271F] font-sans antialiased selection:bg-[#F4A62A]/30 selection:text-[#35271F]">
      {/* Top Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {renderCurrentRoute()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Real-time Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
