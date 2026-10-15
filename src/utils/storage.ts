const BOOKMARKS_STORAGE_KEY = 'tastetrails_bookmarked_slugs';

export function getBookmarkedSlugs(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn('Failed to read bookmarks from localStorage:', err);
    return [];
  }
}

export function isArticleBookmarked(slug: string): boolean {
  const bookmarks = getBookmarkedSlugs();
  return bookmarks.includes(slug);
}

export function toggleArticleBookmark(slug: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const bookmarks = getBookmarkedSlugs();
    const exists = bookmarks.includes(slug);
    const updated = exists
      ? bookmarks.filter((s) => s !== slug)
      : [...bookmarks, slug];

    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(updated));
    // Dispatch custom event for reactive updates across components
    window.dispatchEvent(new Event('tastetrails_bookmarks_updated'));
    return !exists;
  } catch (err) {
    console.warn('Failed to update bookmarks in localStorage:', err);
    return false;
  }
}
