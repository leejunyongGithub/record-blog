"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaStopCircle, FaPlayCircle, FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

interface CarouselProps {
  images: unknown[];
  autoSlideInterval?: number;
}

export default function Carousel({ images, autoSlideInterval = 5000 }: CarouselProps) {
  // 실제 표시할 이미지 배열 (원본 + 앞뒤 복제)
  const [currentIndex, setCurrentIndex] = useState(1); // 1부터 시작 (첫 번째 실제 이미지)
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  // 트랜지션 완료 후 위치 조정
  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      if (currentIndex === 0) {
        setIsTransitioning(true);
        setCurrentIndex(images.length);
      } else if (currentIndex === images.length - 1) {
        setIsTransitioning(true);
        setCurrentIndex(1);
      }
    };

    const sliderElement = document.querySelector(".carousel-slider");
    sliderElement?.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      sliderElement?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex, images.length]);

  const startSlide = () => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    setIsPlaying(true);
  };

  const stopSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    startSlide();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDisplayIndex = () => {
    if (currentIndex === 0) return images.length - 1;
    if (currentIndex === images.length - 1) return 0;
    return currentIndex - 1;
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden flex flex-col gap-2">
      <div className="w-full flex justify-end gap-1">
        <button onClick={prevSlide}>
          <FaChevronCircleLeft size={24} />
        </button>
        {isPlaying ? (
          <button onClick={stopSlide}>
            <FaStopCircle size={24} />
          </button>
        ) : (
          <button onClick={startSlide}>
            <FaPlayCircle size={24} />
          </button>
        )}
        <button onClick={nextSlide}>
          <FaChevronCircleRight size={24} />
        </button>
      </div>
      <div className="flex gap-2 justify-end">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + 1)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              getDisplayIndex() === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
      <div
        className="carousel-slider relative flex transition-transform duration-500 ease-out h-full rounded-xl overflow-hidden bg-gray-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "none" : "transform 500ms ease-out",
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <Image
              src={image as string}
              alt={`Slide ${index}`}
              fill
              sizes="100vw"
              priority={index === currentIndex}
              className="object-cover"
              onError={(e) => {
                console.error(`Error loading image: ${image}`, e);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
