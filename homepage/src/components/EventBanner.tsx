'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const EventBanner: React.FC = () => {
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState({ src: '', alt: '' });
  // 이벤트 대상 차량 데이터 (이미지와 동일하게)
  const eventVehicles = [
    {
      id: 'carnival_2026',
      name: '2026 더 뉴 카니발 9인승',
      category: '승합차',
      description: '패밀리 프리미엄 MPV',
      image: '/main_cars/2026_carnival.png'
    },
    {
      id: 'sportage_hybrid',
      name: '더 뉴 쏘렌토',
      category: 'SUV',
      description: '럭셔리 스포츠 SUV',
      image: '/main_cars/2026_sorento.png'
    },
    {
      id: 'sonata_edge',
      name: '2026 쏘나타 The Edge',
      category: '중형',
      description: '최신형 럭셔리 세단',
      image: '/main_cars/sonata_edge_2026_fullsize.png'
    }
  ];

  return (
    <section className="overflow-hidden relative py-8 mb-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 md:py-12 md:mb-12">
      {/* 배경 장식 요소들 */}
      <div className="overflow-hidden absolute inset-0">
        {/* 다이아몬드 모양 장식들 */}
        <div className="absolute top-20 left-1/4 w-8 h-8 bg-yellow-400 opacity-70 transform rotate-45"></div>
        <div className="absolute top-32 right-1/3 w-6 h-6 bg-yellow-300 opacity-50 transform rotate-45"></div>
        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-gray-300 opacity-60 transform rotate-45"></div>
        <div className="absolute top-40 right-1/4 w-5 h-5 bg-gray-400 opacity-40 transform rotate-45"></div>
        <div className="absolute top-60 w-3 h-3 bg-yellow-200 opacity-60 transform rotate-45 left-1/5"></div>
        <div className="absolute bottom-40 w-4 h-4 bg-gray-200 opacity-50 transform rotate-45 right-1/5"></div>

        {/* 광선 효과 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-50 transform -skew-x-12 via-white/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-30 transform skew-x-12 via-white/20"></div>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 items-center lg:flex-row">

          {/* 왼쪽 - 메인 이벤트 콘텐츠 */}
          <div className="flex-1 lg:max-w-2xl">
            {/* PROMOTION 배지 */}
            <div className="inline-block px-6 py-2 mb-6 text-lg font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg">
              PROMOTION
            </div>

            {/* 메인 타이틀 */}
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">
              <span className="text-cyan-500">2026</span> <span className="text-gray-900">신차 OPEN</span>
            </h1>

            {/* 서브 타이틀 */}
            <p className="mb-8 text-xl text-gray-700 md:text-2xl">
              최신차량 누구보다 먼저 만나보세요.
            </p>

            {/* 메인 차량 이미지 (원형 플랫폼 위의 카니발) */}
            <div className="relative mb-8">
              <div className="relative mx-auto w-full max-w-lg">
                {/* 원형 플랫폼 */}
                <div className="relative">
                  <div className="mx-auto w-80 h-80">
                    {/* 플랫폼 그림자 */}
                    <div className="absolute inset-0 from-gray-800 to-gray-600 rounded-full opacity-30 transform scale-110 bg-gradient-radial"></div>
                    {/* 메인 플랫폼 */}
                    <div className="absolute inset-0 from-gray-500 to-gray-700 rounded-full bg-gradient-radial"></div>
                    {/* 상단 플랫폼 */}
                    <div className="absolute inset-4 from-gray-400 to-gray-600 rounded-full bg-gradient-radial"></div>

                    {/* 차량 이미지 */}
                    <div
                      className="flex absolute inset-0 justify-center items-center cursor-pointer group"
                      onClick={() => {
                        setFullscreenImage({ src: '/main_cars/2026_carnival.png', alt: '2026 카니발' });
                        setIsImageFullscreen(true);
                      }}
                    >
                      <Image
                        src="/main_cars/2026_carnival.png"
                        alt="2026 카니발"
                        width={350}
                        height={220}
                        className="object-contain z-10 transition-transform drop-shadow-2xl group-hover:scale-110"
                        priority
                      />
                      <div className="flex absolute inset-0 justify-center items-center bg-black/0 transition-all group-hover:bg-black/10">
                        <div className="px-3 py-1.5 text-xs font-bold text-white bg-black/60 rounded-lg opacity-0 transition-opacity group-hover:opacity-100">
                          클릭하여 크게 보기
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽 - 차량 카드들 */}
          <div className="flex-shrink-0 w-full lg:w-80">
            <div className="space-y-4">
              {eventVehicles.map((vehicle, index) => (
                <div
                  key={vehicle.id}
                  className="flex gap-4 items-center p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl border transition-all duration-300 cursor-pointer hover:shadow-lg border-blue-200/50 group"
                  onClick={() => {
                    setFullscreenImage({ src: vehicle.image, alt: vehicle.name });
                    setIsImageFullscreen(true);
                  }}
                >
                  {/* 차량 이미지 */}
                  <div className="flex flex-shrink-0 justify-center items-center w-20 h-16 bg-white rounded-lg shadow-sm">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      width={80}
                      height={60}
                      className="object-contain transition-transform group-hover:scale-110"
                    />
                  </div>

                  {/* 차량 정보 */}
                  <div className="flex-1">
                    <div className="mb-1 text-xs font-medium text-blue-600">
                      {vehicle.category}
                    </div>
                    <h3 className="text-sm font-bold leading-tight text-gray-900 transition-colors group-hover:text-blue-600">
                      {vehicle.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600">
                      {vehicle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {isImageFullscreen && (
        <div
          className="flex fixed inset-0 z-[60] justify-center items-center p-4 bg-black/95"
          onClick={() => setIsImageFullscreen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsImageFullscreen(false)}
            className="absolute top-4 right-4 z-10 p-3 text-white bg-white/10 rounded-full backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Fullscreen Image */}
          <div className="relative w-full h-full max-w-7xl max-h-full">
            <Image
              src={fullscreenImage.src}
              alt={fullscreenImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-1/2 px-6 py-3 text-white bg-black/60 rounded-full backdrop-blur-sm transition-transform transform -translate-x-1/2">
            <p className="text-sm font-medium md:text-base">{fullscreenImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventBanner;