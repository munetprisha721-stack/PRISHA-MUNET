import React, { useState } from 'react';
import { VlogVideo } from '../types';
import { X, Video, Link as LinkIcon, AlertCircle } from 'lucide-react';

interface VideoModalProps {
  video: VlogVideo | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const [customUrl, setCustomUrl] = useState('');
  const [activeEmbedId, setActiveEmbedId] = useState<string | null>(null);
  const [urlError, setUrlError] = useState('');

  if (!video) return null;

  const currentId = activeEmbedId || video.youtubeId;

  const extractYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handleApplyCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrl.trim()) return;
    const extracted = extractYouTubeId(customUrl.trim());
    if (extracted) {
      setActiveEmbedId(extracted);
      setUrlError('');
    } else {
      setUrlError('Please enter a valid YouTube video URL (e.g., https://youtube.com/watch?v=...)');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video Player"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#35271F] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#281d17]">
          <div>
            <span className="text-[11px] uppercase font-bold tracking-wider text-[#F4A62A]">
              {video.category}
            </span>
            <h3 className="text-white font-serif text-lg font-bold truncate max-w-xl">
              {video.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video bg-black w-full">
          {currentId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${currentId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-[#FFF6E8]/70 space-y-3">
              <Video className="w-12 h-12 text-[#F4A62A]" />
              <h4 className="font-serif text-xl font-bold text-white">Video Coming Soon</h4>
              <p className="text-sm max-w-md text-[#FFF6E8]/70 leading-relaxed">
                This food vlog is currently in production. You can preview this food story or paste your own YouTube video URL below.
              </p>
            </div>
          )}
        </div>

        {/* Video Details & Custom URL Support */}
        <div className="p-6 bg-[#281d17] text-[#FFF6E8] space-y-4 overflow-y-auto">
          <p className="text-sm text-[#FFF6E8]/80 leading-relaxed">
            {video.description}
          </p>

          {/* Add custom YouTube URL tool */}
          <div className="pt-4 border-t border-white/10">
            <form onSubmit={handleApplyCustomUrl} className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#F4A62A] flex items-center gap-1.5">
                <LinkIcon className="w-3.5 h-3.5" />
                <span>Play Custom YouTube Video URL</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customUrl}
                  onChange={(e) => {
                    setCustomUrl(e.target.value);
                    if (urlError) setUrlError('');
                  }}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="flex-1 px-3 py-2 bg-black/40 border border-white/15 rounded-lg text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#F4A62A]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#B83A24] hover:bg-[#9d301d] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap"
                >
                  Load Video
                </button>
              </div>
              {urlError && (
                <div className="flex items-center gap-1.5 text-xs text-red-400">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{urlError}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
