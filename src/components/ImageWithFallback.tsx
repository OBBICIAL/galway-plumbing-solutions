"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Image as ImageIcon } from "lucide-react";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string;
}

export default function ImageWithFallback({
  src,
  fallbackSrc = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
  alt,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-slate-300" />
        </div>
      )}
      <Image
        src={error ? fallbackSrc : src}
        alt={alt || "Image"}
        onError={() => setError(true)}
        onLoad={() => setIsLoading(false)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        {...props}
      />
    </div>
  );
}
