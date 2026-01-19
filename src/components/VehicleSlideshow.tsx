import { useState, useEffect } from 'react';

interface VehicleSlideshowProps {
  images: string[];
  name: string;
}

export default function VehicleSlideshow({ images, name }: VehicleSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 600);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      {images.map((image, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
            idx === currentIndex
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
          style={{
            filter: isTransitioning && idx === currentIndex ? 'blur(2px)' : 'blur(0px)',
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out"
            style={{
              backgroundImage: `url('${image}')`,
              transform: idx === currentIndex ? 'scale(1.1)' : 'scale(1)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      <div className="absolute bottom-6 left-6 right-6 z-10">
        <div className="flex gap-2 justify-center">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(idx);
                  setIsTransitioning(false);
                }, 600);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex
                  ? 'w-12 bg-white'
                  : 'w-8 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Zeige Bild ${idx + 1} von ${name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
