"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductCarouselProps {
  images: string[];
  name: string;
}

export default function ProductCarousel({
  images,
  name,
}: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex h-56 w-full items-center justify-center bg-light text-sm text-foreground/40">
        Photo coming soon
      </div>
    );
  }

  const nextImage = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex(
      (current) => (current - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className="
        relative h-56 w-full
        overflow-hidden
        bg-light
        transition-all duration-300 ease-out
        group-hover:z-50
        group-hover:scale-[1.35]
        group-hover:shadow-2xl
        group-hover:rounded-2xl
      "
    >
      <Image
        src={images[currentIndex]}
        alt={`${name} - image ${currentIndex + 1}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover object-center transition-opacity duration-300"
      />

      {images.length > 1 && (
        <>
          {/* Previous */}
          <button
            type="button"
            onClick={previousImage}
            aria-label={`Previous ${name} image`}
            className="
              absolute left-3 top-1/2
              flex h-7 w-7
              -translate-y-1/2
              items-center justify-center
              rounded-full
              bg-white/75
              text-sm text-foreground/70
              backdrop-blur-sm
              transition
              hover:bg-white
              hover:text-foreground
            "
          >
            ‹
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={nextImage}
            aria-label={`Next ${name} image`}
            className="
              absolute right-3 top-1/2
              flex h-7 w-7
              -translate-y-1/2
              items-center justify-center
              rounded-full
              bg-white/75
              text-sm text-foreground/70
              backdrop-blur-sm
              transition
              hover:bg-white
              hover:text-foreground
            "
          >
            ›
          </button>

          {/* Image indicators */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`View image ${index + 1} of ${name}`}
                className={`h-1 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-4 bg-white"
                    : "w-1 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}