import React, { useState } from 'react';
import { VlogVideo } from '../types';
import { Play, Clock, MapPin, Video } from 'lucide-react';

interface VideoCardProps {
  video: VlogVideo;
  onPlay: (video: VlogVideo) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={() => onPlay(video)}
      className="group cursor-pointer bg-white/70 hover:bg-white rounded-xl border border-[#35271F]/10 hover:border-[#F4A62A]/50 overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col"
    >
      {/* Video Thumbnail with Play Button overlay */}
      <div className="relative aspect-video overflow-hidden bg-[#35271F]">
        {!imgError ? (
          <img
            src={video.thumbnail}
            alt={`${video.title} - ${video.category} food video`}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 opacity-90 group-hover:opacity-100 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#35271F]/80">
            <Video className="w-10 h-10 text-white/40" />
          </div>
        )}

        {/* Play Icon Circle */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/10 transition-colors">
          <div className="w-12 h-12 rounded-full bg-[#B83A24] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#9d301d] transition-all">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>
        </div>

        {/* Duration badge */}
        {video.duration && (
          <div className="absolute bottom-2.5 right-2.5 bg-black/80 text-white text-[10px] font-medium px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
            <Clock className="w-3 h-3 text-white/70" />
            <span>{video.duration}</span>
          </div>
        )}

        {/* Category tag */}
        <div className="absolute top-2.5 left-2.5 bg-[#F4A62A] text-[#35271F] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded shadow-xs">
          {video.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
        <div className="space-y-1.5">
          <h3 className="font-serif text-base font-bold text-[#35271F] group-hover:text-[#B83A24] transition-colors leading-snug line-clamp-2">
            {video.title}
          </h3>
          <p className="text-xs text-[#78685D] leading-relaxed line-clamp-2">
            {video.description}
          </p>
        </div>

        {video.location && (
          <div className="pt-2 border-t border-[#35271F]/10 flex items-center gap-1.5 text-[11px] text-[#78685D]">
            <MapPin className="w-3 h-3 text-[#B83A24]" />
            <span>{video.location}</span>
          </div>
        )}
      </div>
    </div>
  );
};
