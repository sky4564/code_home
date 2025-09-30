'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Car } from 'lucide-react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "여행의 시작과 끝,",
      subtitle: "차렌터카와 함께하세요.",
      description: "지금 바로 예약하기",
      backgroundImage: "/bg1.jpeg",
      buttons: {
        primary: "차렌터카 본사",
        secondary: "빠른 전화상담",
        tertiary: "차량안내"
      }
    },
    {
      id: 2,
      title: "7인승 카니발",
      subtitle: "넓고 편안한 프리미엄 렌터카",
      description: "가족 여행의 완벽한 선택",
      backgroundImage: "/bg2.jpeg",
      buttons: {
        primary: "차렌터카 본사",
        secondary: "빠른 전화상담",
        tertiary: "차량안내"
      }
    },
    {
      id: 3,
      title: "24시간 운영",
      subtitle: "언제든지 이용 가능한 렌터카 서비스",
      description: "새벽, 심야 언제든 OK",
      backgroundImage: "/bg3.jpeg",
      buttons: {
        primary: "차렌터카 본사",
        secondary: "빠른 전화상담",
        tertiary: "차량안내"
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="bg-white">
      {/* Slider Banner Section */}
      <div className="relative overflow-hidden">
        <div className="relative h-[700px] md:h-[600px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.backgroundImage}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl">
                    {/* Text Content - Left Aligned */}
                    <div className="text-white mb-8">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        {slide.title}
                      </h1>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-medium">
                        {slide.subtitle}
                      </h2>
                      <p className="text-xl md:text-2xl mb-8 opacity-90">
                        {slide.description}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                        <span className="flex items-center gap-2">
                          {slide.buttons.primary}
                        </span>
                      </button>

                      <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg">
                        <span className="flex items-center gap-2">
                          <Phone className="w-5 h-5" />
                          {slide.buttons.secondary}
                        </span>
                      </button>

                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
                        <span className="flex items-center gap-2">
                          <Car className="w-5 h-5" />
                          {slide.buttons.tertiary}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all ${index === currentSlide
                ? 'bg-white w-12'
                : 'bg-white/50 hover:bg-white/75 w-3'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Event Banner */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg">
              🔊 렌트하고 혜택받자! 지금 이벤트 중!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;