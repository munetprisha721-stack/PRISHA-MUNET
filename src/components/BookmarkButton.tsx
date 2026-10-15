import React, { useState, useEffect } from 'react';
import { Bookmark } from 'lucide-react';
import { isArticleBookmarked, toggleArticleBookmark } from '../utils/storage';

interface BookmarkButtonProps {
  slug: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const BookmarkButton: React.FC<BookmarkButtonProps> = ({
  slug,
  size = 'md',
  showLabel = false,
}) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setBookmarked(isArticleBookmarked(slug));
    const handleStorageUpdate = () => {
      setBookmarked(isArticleBookmarked(slug));
    };
    window.addEventListener('tastetrails_bookmarks_updated', handleStorageUpdate);
    return () => {
      window.removeEventListener('tastetrails_bookmarks_updated', handleStorageUpdate);
    };
  }, [slug]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const updated = toggleArticleBookmark(slug);
    setBookmarked(updated);
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <button
      onClick={handleToggle}
      className={`inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none ${
        bookmarked
          ? 'text-[#B83A24] fill-[#B83A24]'
          : 'text-[#35271F]/50 hover:text-[#B83A24]'
      }`}
      aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
      title={bookmarked ? 'Remove bookmark' : 'Save article'}
    >
      <Bookmark
        className={`${iconSizes[size]} ${
          bookmarked ? 'fill-[#B83A24]' : ''
        } transition-transform active:scale-90`}
      />
      {showLabel && (
        <span className="text-xs font-medium">
          {bookmarked ? 'Saved' : 'Save Story'}
        </span>
      )}
    </button>
  );
};
