'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Megaphone, X } from 'lucide-react';
import LuckyRoulette from './LuckyRoulette';

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  period: string;
  detailDescription?: string;
  isRoulette?: boolean;
}

const EventPromotion: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const [showRoulette, setShowRoulette] = useState(false);

  const events: Event[] = [
    {
      id: 0,
      title: '행운의 룰렛 이벤트',
      description: '룰렛을 돌려 다양한 혜택을 받아가세요!',
      image: '/event_bnr/룰렛이미지.png',
      period: '이벤트 진행중',
      isRoulette: true,
    },
    {
      id: 1,
      title: '도장 이벤트',
      description: '차렌터카 도장 이벤트 진행중!',
      image: '/event_bnr/도장이벤트 상단.png',
      period: '이벤트 진행중',
      detailDescription: `
        <h3 class="mb-4 text-2xl font-bold">🎯 도장 이벤트 상세 안내</h3>
        <p class="mb-4">차렌터카를 이용하시면 렌트 일수만큼 도장을 적립해드립니다!</p>
        
        <h4 class="mb-2 text-lg font-bold">혜택 내용</h4>
        <ul class="mb-4 space-y-2 list-disc list-inside">
          <li>렌트 1일당 도장 1개 적립</li>
          <li>도장 10개 모으면 경차 하루 가격(7만원) 할인</li>
          <li>도장 1개당 7,000원 가치 (10개 = 70,000원 할인)</li>
        </ul>
        
        <h4 class="mb-2 text-lg font-bold">참여 방법</h4>
        <p class="mb-2">1. 차량 대여 시 도장카드 요청</p>
        <p class="mb-2">2. 반납 시 직원에게 도장카드 제시 (렌트 일수만큼 적립)</p>
        <p class="mb-4">3. 도장 10개 달성 시 다음 렌트 시 7만원 할인</p>
        
        <div class="p-4 mt-4 bg-yellow-50 rounded-lg">
          <p class="text-sm font-bold">💡 예시</p>
          <p class="text-sm">3일 렌트 = 도장 3개 적립</p>
          <p class="text-sm">7일 렌트 = 도장 7개 적립</p>
          <p class="text-sm">10일 누적 = 7만원 할인 혜택!</p>
        </div>
        
        <p class="mt-6 text-sm text-gray-600">※ 본 이벤트는 상시 진행되며, 회사 사정에 따라 변경될 수 있습니다.</p>
      `
    },
    {
      id: 2,
      title: '민생회복지원금 사용가능',
      description: '차렌터카에서 민생회복지원금 사용하세요!',
      image: '/event_bnr/소비쿠폰배너.jpeg',
      period: '상시 진행중',
      detailDescription: `
        <h3 class="mb-4 text-2xl font-bold">💰 민생회복지원금 사용 안내</h3>
        <p class="mb-4">차렌터카에서 민생회복지원금을 사용하실 수 있습니다!</p>
        
        <h4 class="mb-2 text-lg font-bold">사용 가능 대상</h4>
        <ul class="mb-4 space-y-2 list-disc list-inside"></ul>
          <li>민생회복지원금을 받으신 모든 고객님</li>
          <li>단기 렌트, 월렌트 모두 사용 가능</li>
          <li>렌트 요금 결제 시 사용</li>
        </ul>
        
        <h4 class="mb-2 text-lg font-bold">사용 방법</h4>
        <p class="mb-2">1. 예약 시 민생회복지원금 사용 의사를 미리 알려주세요</p>
        <p class="mb-2">2. 차량 인수 시 민생회복지원금 카드로 결제</p>
        <p class="mb-4">3. 잔액 확인 후 차액은 다른 결제수단 이용 가능</p>
        
        <div class="p-4 mt-4 bg-blue-50 rounded-lg">
          <p class="text-sm font-bold">💡 문의사항</p>
          <p class="text-sm">민생회복지원금 사용에 대한 자세한 문의는 고객센터로 연락 주세요.</p>
          <p class="mt-2 text-sm font-bold">📞 032-427-5500</p>
        </div>
        
        <p class="mt-6 text-sm text-gray-600">※ 민생회복지원금 사용 조건 및 방법은 정부 정책에 따라 변경될 수 있습니다.</p>
      `
    },
    {
      id: 3,
      title: '리뷰 작성 이벤트',
      description: '리뷰 작성하고 스타벅스 커피 받아가세요!',
      image: '/event_bnr/kakao_coffe_event.png',
      period: '이벤트 진행중',
      detailDescription: `
        <h3 class="mb-4 text-2xl font-bold">☕ 리뷰 작성 이벤트</h3>
        <p class="mb-4">차렌터카 이용 후 리뷰를 남겨주시면 스타벅스 커피쿠폰을 드립니다!</p>
        
        <h4 class="mb-2 text-lg font-bold">혜택 내용</h4>
        <ul class="mb-4 space-y-2 list-disc list-inside">
          <li>리뷰 작성 완료 시 스타벅스 커피쿠폰 증정</li>
          <li>1회 이용당 1매 제공</li>
          <li>카카오톡으로 즉시 발송</li>
        </ul>
        
        <h4 class="mb-2 text-lg font-bold">참여 방법</h4>
        <p class="mb-2">1. 차렌터카 카카오채널 친구 추가</p>
        <p class="mb-2">2. 차량 이용 완료 후 리뷰 작성 (카카오맵 또는 네이버지도)</p>
        <p class="mb-2">3. 리뷰 작성 완료 화면 캡처</p>
        <p class="mb-4">4. 카카오채널로 캡처 이미지 전송 → 커피쿠폰 발송</p>
        
        <div class="p-4 mt-4 bg-green-50 rounded-lg">
          <p class="text-sm font-bold">💡 리뷰 작성 팁</p>
          <p class="text-sm">• 카카오맵 또는 네이버지도 중 편한 곳에 작성하세요</p>
          <p class="text-sm">• 이용하신 차량과 서비스에 대한 솔직한 후기를 남겨주세요</p>
          <p class="text-sm">• 사진을 함께 올려주시면 더욱 좋습니다!</p>
        </div>
        
        <p class="mt-6 text-sm text-gray-600">※ 본 이벤트는 예고 없이 종료될 수 있습니다.</p>
      `
    }
  ];

  return (
    <section className="py-8 mb-8 bg-gradient-to-b from-gray-50 to-white md:py-12 md:mb-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            진행중인 이벤트
          </h2>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => {
                if (event.isRoulette) {
                  setShowRoulette(true);
                } else {
                  setSelectedEvent(event);
                }
              }}
              className="overflow-hidden relative bg-white rounded-2xl shadow-xl transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-1"
            >
              {/* 이벤트 이미지 */}
              <div className="relative w-full aspect-[16/9] bg-gray-100">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* 카드 내용 */}
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="mb-2 text-sm font-bold text-gray-900 sm:mb-3 sm:text-base md:text-xl line-clamp-2">
                  {event.title}
                </h3>

                <p className="mb-2 text-xs leading-relaxed text-gray-600 sm:mb-3 sm:text-sm line-clamp-2">
                  {event.description}
                </p>

                <div className="inline-block px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium bg-blue-50 text-blue-700">
                  {event.period}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedEvent && (
          <div
            className="flex fixed inset-0 z-50 justify-center items-start p-0 backdrop-blur-sm md:items-center md:p-4 bg-black/70"
            onClick={() => setSelectedEvent(null)}
          >
            <div
              className="relative w-full md:max-w-4xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto bg-white md:rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-lg transition-colors md:top-4 md:right-4 hover:bg-gray-100"
              >
                <X className="w-5 h-5 text-gray-600 md:w-6 md:h-6" />
              </button>

              {/* Event Image */}
              <div
                className="relative w-full aspect-[16/9] bg-gray-100 cursor-pointer group"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsImageFullscreen(true);
                }}
              >
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                  sizes="100vw"
                  priority
                />
                <div className="flex absolute inset-0 justify-center items-center transition-all bg-black/0 group-hover:bg-black/20">
                  <div className="px-4 py-2 text-sm font-bold text-white rounded-lg opacity-0 transition-opacity bg-black/60 group-hover:opacity-100">
                    클릭하여 크게 보기
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-4 sm:p-6 md:p-8">
                <div
                  className="max-w-none prose prose-sm sm:prose-base md:prose-lg"
                  dangerouslySetInnerHTML={{ __html: selectedEvent.detailDescription || '' }}
                />

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 mt-6 sm:flex-row sm:gap-4 sm:mt-8">
                  <a
                    href="tel:032-427-5500"
                    className="flex-1 px-4 py-3 font-bold text-center text-white bg-blue-600 rounded-xl shadow-lg transition-all sm:px-6 hover:bg-blue-700 hover:shadow-xl"
                  >
                    📞 전화 문의
                  </a>
                  <button
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).ChannelIO) {
                        (window as any).ChannelIO('showMessenger');
                      }
                      setSelectedEvent(null);
                    }}
                    className="flex-1 px-4 py-3 font-bold text-center text-white bg-green-600 rounded-xl shadow-lg transition-all sm:px-6 hover:bg-green-700 hover:shadow-xl"
                  >
                    💬 채팅 문의
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fullscreen Image Viewer */}
        {isImageFullscreen && selectedEvent && (
          <div
            className="flex fixed inset-0 z-[60] justify-center items-center p-4 bg-black/95"
            onClick={() => setIsImageFullscreen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsImageFullscreen(false)}
              className="absolute top-4 right-4 z-10 p-3 text-white rounded-full backdrop-blur-sm transition-colors bg-white/10 hover:bg-white/20"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Fullscreen Image */}
            <div className="relative w-full max-w-7xl h-full max-h-full">
              <Image
                src={selectedEvent.image}
                alt={selectedEvent.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 px-6 py-3 text-white rounded-full backdrop-blur-sm transition-transform transform -translate-x-1/2 bg-black/60">
              <p className="text-sm font-medium md:text-base">{selectedEvent.title}</p>
            </div>
          </div>
        )}

        {/* Roulette Modal */}
        {showRoulette && (
          <div className="flex fixed inset-0 z-50 justify-center items-center p-4 backdrop-blur-sm bg-black/60 animate-fadeIn">
            <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
              {/* 닫기 버튼 */}
              <button
                onClick={() => setShowRoulette(false)}
                className="absolute top-4 right-4 z-50 p-2 text-gray-400 rounded-full transition-colors hover:bg-gray-100 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>

              {/* 룰렛 컴포넌트 */}
              <LuckyRoulette />
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            더 많은 혜택이 궁금하신가요?
          </p>
          <a
            href="tel:032-427-5500"
            className="inline-flex gap-2 items-center px-8 py-4 font-bold text-white bg-blue-600 rounded-xl shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl hover:scale-105"
          >
            <span>📞</span>
            <span>032-427-5500</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventPromotion;

