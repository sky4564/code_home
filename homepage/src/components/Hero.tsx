'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageCircle, Car } from 'lucide-react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "여행의 시작과 끝,",
      subtitle: "차렌터카와 함께하세요.",
      description: "지금 바로 예약하기",
      backgroundImage: "/background/bg1.jpeg"
    },
    {
      id: 2,
      title: "7인승 카니발",
      subtitle: "넓고 편안한 프리미엄 렌터카",
      description: "가족 여행의 완벽한 선택",
      backgroundImage: "/background/bg2.jpeg"
    },
    {
      id: 3,
      title: "24시간 운영",
      subtitle: "언제든지 이용 가능한 렌터카 서비스",
      description: "새벽, 심야 언제든 OK",
      backgroundImage: "/background/bg3.jpeg"
    }
  ];

  const openChannelTalk = () => {
    if (typeof window !== 'undefined' && (window as any).ChannelIO) {
      (window as any).ChannelIO('showMessenger');
    }
  };

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
      <div className="overflow-hidden relative">
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
                <div className="absolute inset-0 bg-gradient-to-r to-transparent from-black/70 via-black/40"></div>
              </div>

              {/* Content */}
              <div className="flex relative items-center h-full">
                <div className="px-4 mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
                  <div className="max-w-2xl">
                    {/* Text Content - Left Aligned */}
                    <div className="mb-8 text-white">
                      <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        {slide.title}
                      </h1>
                      <h2 className="mb-4 text-2xl font-medium md:text-3xl lg:text-4xl">
                        {slide.subtitle}
                      </h2>
                      <p className="mb-8 text-xl opacity-90 md:text-2xl">
                        {slide.description}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 max-w-sm">
                      <a
                        href="tel:032-427-5500"
                        className="w-full px-6 py-4 font-semibold text-gray-900 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl transition-all hover:bg-white hover:shadow-2xl hover:translate-x-2 border-l-4 border-green-600"
                      >
                        <span className="flex gap-3 items-center justify-start">
                          <div className="p-2 bg-green-50 rounded-lg">
                            <Phone className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="text-left">
                            <div className="text-sm text-gray-600">빠른 전화상담</div>
                            <div className="text-lg font-bold">032-427-5500</div>
                          </div>
                        </span>
                      </a>

                      <button
                        onClick={openChannelTalk}
                        className="w-full px-6 py-4 font-semibold text-gray-900 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl transition-all hover:bg-white hover:shadow-2xl hover:translate-x-2 border-l-4 border-blue-600"
                      >
                        <span className="flex gap-3 items-center justify-start">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            <MessageCircle className="w-5 h-5 text-blue-600" />
                          </div>
                          <span className="text-left">채팅으로 문의</span>
                        </span>
                      </button>

                      <a
                        href="/vehicles"
                        className="w-full px-6 py-4 font-semibold text-gray-900 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl transition-all hover:bg-white hover:shadow-2xl hover:translate-x-2 border-l-4 border-purple-600"
                      >
                        <span className="flex gap-3 items-center justify-start">
                          <div className="p-2 bg-purple-50 rounded-lg">
                            <Car className="w-5 h-5 text-purple-600" />
                          </div>
                          <span className="text-left">차량안내</span>
                        </span>
                      </a>
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
          className="absolute left-4 top-1/2 p-3 text-white rounded-full backdrop-blur-sm transition-all transform -translate-y-1/2 bg-white/20 hover:bg-white/30 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 transition-transform group-hover:scale-110" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 p-3 text-white rounded-full backdrop-blur-sm transition-all transform -translate-y-1/2 bg-white/20 hover:bg-white/30 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 transition-transform group-hover:scale-110" />
        </button>

        {/* Dots Indicator */}
        <div className="flex absolute bottom-8 left-1/2 gap-3 transform -translate-x-1/2">
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-6 py-3 text-lg font-bold text-black bg-yellow-400 rounded-lg">
              🔊 렌트하고 혜택받자! 지금 이벤트 중!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;