'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Megaphone, X } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  period: string;
  detailDescription?: string;
}

const EventPromotion: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: '도장 이벤트',
      description: '차렌터카 도장 이벤트 진행중!',
      image: '/event_bnr/도장이벤트 상단.png',
      period: '이벤트 진행중',
      detailDescription: `
        <h3 class="mb-4 text-2xl font-bold">🎯 도장 이벤트 상세 안내</h3>
        <p class="mb-4">차렌터카를 이용하시면 도장을 적립해드립니다!</p>
        
        <h4 class="mb-2 text-lg font-bold">혜택 내용</h4>
        <ul class="mb-4 space-y-2 list-disc list-inside">
          <li>렌트 1회당 도장 1개 적립</li>
          <li>도장 5개 모으면 다음 렌트 시 할인 혜택</li>
          <li>도장 10개 모으면 무료 1일 렌트권 증정</li>
        </ul>
        
        <h4 class="mb-2 text-lg font-bold">참여 방법</h4>
        <p class="mb-2">1. 차량 대여 시 도장카드 요청</p>
        <p class="mb-2">2. 반납 시 직원에게 도장카드 제시</p>
        <p class="mb-4">3. 도장 적립 및 혜택 사용</p>
        
        <p class="mt-6 text-sm text-gray-600">※ 본 이벤트는 상시 진행되며, 회사 사정에 따라 변경될 수 있습니다.</p>
      `
    },
    {
      id: 2,
      title: '소비쿠폰 이벤트',
      description: '렌트하고 소비쿠폰 혜택 받아가세요!',
      image: '/event_bnr/소비쿠폰배너.jpeg',
      period: '이벤트 진행중',
      detailDescription: `
        <h3 class="mb-4 text-2xl font-bold">💰 소비쿠폰 이벤트 상세 안내</h3>
        <p class="mb-4">차량 렌트 시 다양한 소비쿠폰을 드립니다!</p>
        
        <h4 class="mb-2 text-lg font-bold">혜택 내용</h4>
        <ul class="mb-4 space-y-2 list-disc list-inside">
          <li>단기 렌트(1~3일): 편의점 쿠폰 5,000원</li>
          <li>주간 렌트(4~7일): 주유쿠폰 10,000원</li>
          <li>월 렌트: 세차쿠폰 30,000원</li>
        </ul>
        
        <h4 class="mb-2 text-lg font-bold">사용 안내</h4>
        <p class="mb-2">• 차량 인수 시 쿠폰 제공</p>
        <p class="mb-2">• 제휴 매장에서 사용 가능</p>
        <p class="mb-4">• 현금 교환 불가, 유효기간 3개월</p>
        
        <p class="mt-6 text-sm text-gray-600">※ 재고 소진 시 조기 종료될 수 있습니다.</p>
      `
    },
    {
      id: 3,
      title: '카카오 커피 이벤트',
      description: '차량 대여 시 카카오 커피 증정!',
      image: '/event_bnr/kakao_coffe_event.png',
      period: '이벤트 진행중',
      detailDescription: `
        <h3 class="mb-4 text-2xl font-bold">☕ 카카오 커피 증정 이벤트</h3>
        <p class="mb-4">차렌터카와 함께 따뜻한 커피 한 잔 어떠세요?</p>
        
        <h4 class="mb-2 text-lg font-bold">혜택 내용</h4>
        <ul class="mb-4 space-y-2 list-disc list-inside">
          <li>차량 대여 고객 전원 카카오톡 커피쿠폰 증정</li>
          <li>전국 카페베네, 이디야커피, 투썸플레이스 사용 가능</li>
          <li>1인 1매 제공 (동승자 포함 최대 2매)</li>
        </ul>
        
        <h4 class="mb-2 text-lg font-bold">수령 방법</h4>
        <p class="mb-2">1. 차량 인수 시 카카오톡 친구 추가</p>
        <p class="mb-2">2. 카카오톡으로 커피쿠폰 발송</p>
        <p class="mb-4">3. 제휴 카페에서 쿠폰 사용</p>
        
        <div class="p-4 mt-4 bg-yellow-50 rounded-lg">
          <p class="text-sm font-bold">💡 TIP</p>
          <p class="text-sm">여행 중 휴게소나 도심 카페에서 편하게 사용하세요!</p>
        </div>
        
        <p class="mt-6 text-sm text-gray-600">※ 본 이벤트는 예고 없이 종료될 수 있습니다.</p>
      `
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-red-600 bg-red-50 rounded-full">
            <Megaphone className="w-5 h-5" />
            <span className="font-bold">렌트하고 혜택받자! 지금 이벤트 中!</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            진행중인 이벤트
          </h2>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
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
              <div className="relative w-full aspect-[16/9] bg-gray-100">
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
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

