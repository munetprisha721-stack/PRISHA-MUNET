import React, { useState, useEffect } from 'react';
import { Search, Bookmark, Menu, X, Compass, UtensilsCrossed } from 'lucide-react';
import { getBookmarkedSlugs } from '../utils/storage';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookmarkCount, setBookmarkCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setBookmarkCount(getBookmarkedSlugs().length);
    };
    updateCount();
    window.addEventListener('tastetrails_bookmarks_updated', updateCount);
    return () => {
      window.removeEventListener('tastetrails_bookmarks_updated', updateCount);
    };
  }, []);

  const navLinks = [
    { label: 'Home', path: '#/' },
    { label: 'Explore Food', path: '#/explore' },
    { label: 'Recipes', path: '#/recipes' },
    { label: 'Food Vlogs', path: '#/vlogs' },
    { label: 'Reviews', path: '#/reviews' },
    { label: 'About', path: '#/about' },
    { label: 'Contact', path: '#/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF6E8]/95 backdrop-blur-md border-b border-[#35271F]/10 transition-colors">
      {/* Announcement Ribbon */}
      <div className="bg-[#B83A24] text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        <span>Your next delicious discovery starts here.</span>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single element wordmark in editorial serif */}
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#/');
            }}
            className="flex items-center gap-2 text-left group whitespace-nowrap shrink-0 focus-visible:outline-none"
            aria-label="TasteTrails Home - Food Stories and Recipes"
          >
            <div className="w-9 h-9 rounded bg-[#B83A24] flex items-center justify-center text-white shadow-sm">
              <UtensilsCrossed className="w-5 h-5 text-[#FFF6E8]" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#35271F] group-hover:text-[#B83A24] transition-colors">
                TasteTrails
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#35271F]/80">
            {navLinks.map((link) => {
              const isActive =
                link.path === '#/'
                  ? currentPath === '#/' || currentPath === ''
                  : currentPath.startsWith(link.path);
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.path);
                  }}
                  className={`transition-colors py-1 relative whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#B83A24] font-semibold'
                      : 'text-[#35271F]/80 hover:text-[#B83A24]'
                  }`}
                  aria-label={`Go to ${link.label} page`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B83A24] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Search, Bookmarks, Explore Now CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#35271F] hover:text-[#B83A24] hover:bg-[#35271F]/5 rounded-lg transition-colors focus-visible:outline-none flex items-center gap-1.5"
              title="Search articles, recipes, and reviews (Ctrl+K)"
              aria-label="Search articles, recipes, and reviews"
            >
              <Search className="w-5 h-5" />
              <span className="sr-only">Search TasteTrails Articles and Recipes</span>
            </button>

            <a
              href="#/bookmarks"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#/bookmarks');
              }}
              className="relative p-2 text-[#35271F] hover:text-[#B83A24] hover:bg-[#35271F]/5 rounded-lg transition-colors focus-visible:outline-none flex items-center"
              title="Saved Articles and Recipes"
              aria-label="View Saved Bookmarks and Articles"
            >
              <Bookmark className="w-5 h-5" />
              <span className="sr-only">View Saved Articles</span>
              {bookmarkCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#B83A24] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {bookmarkCount}
                </span>
              )}
            </a>

            <a
              href="#/explore"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#/explore');
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#B83A24] hover:bg-[#9d301d] rounded transition-all shadow-sm focus-visible:outline-none whitespace-nowrap shrink-0"
              aria-label="Explore All Food Stories and Guides"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Food Stories</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#35271F] hover:text-[#B83A24] rounded-lg focus-visible:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <span className="sr-only">Toggle Navigation Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#35271F]/10 bg-[#FFF6E8] px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.path);
                }}
                className="text-left px-3 py-2 text-base font-medium text-[#35271F] hover:bg-[#35271F]/5 rounded-md transition-colors"
                aria-label={`Go to ${link.label}`}
              >
                <span>{link.label}</span>
              </a>
            ))}
            <a
              href="#/bookmarks"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#/bookmarks');
              }}
              className="text-left px-3 py-2 text-base font-medium text-[#35271F] hover:bg-[#35271F]/5 rounded-md transition-colors flex items-center justify-between"
              aria-label="View Saved Bookmarks"
            >
              <span>Saved Articles</span>
              {bookmarkCount > 0 && (
                <span className="bg-[#B83A24] text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {bookmarkCount}
                </span>
              )}
            </a>
          </div>
          <div className="pt-2">
            <a
              href="#/explore"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#/explore');
              }}
              className="block w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#B83A24] rounded hover:bg-[#9d301d] transition-colors"
              aria-label="Explore All 12 Food Stories"
            >
              <span>Explore All 12 Food Stories</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
