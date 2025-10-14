'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface PromotionPopupProps {
  onOpenRoulette: () => void;
}

const PromotionPopup: React.FC<PromotionPopupProps> = ({ onOpenRoulette }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dontShowToday, setDontShowToday] = useState(false);

  useEffect(() => {
    // 오늘 하루 보지 않기 체크 확인
    const hideUntil = localStorage.getItem('promotionPopupHideUntil');
    const now = new Date().getTime();

    if (hideUntil && now < parseInt(hideUntil)) {
      // 아직 숨김 기간이면 팝업 표시 안 함
      return;
    }

    // 1초 후에 팝업 표시
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    if (dontShowToday) {
      // 오늘 하루 동안 숨기기 (자정까지)
      const tomorrow = new Date();
      tomorrow.setHours(24, 0, 0, 0);
      localStorage.setItem('promotionPopupHideUntil', tomorrow.getTime().toString());
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="flex fixed inset-0 z-[9999] justify-center items-center p-4 backdrop-blur-sm bg-black/60 animate-fadeIn">
      <div className="relative w-full max-w-md max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl">
        {/* 닫기 버튼 */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 p-2 text-white bg-black/50 rounded-full transition-colors hover:bg-black/70"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 이미지 영역 */}
        <div className="relative w-full aspect-[3/4]">
          <Image
            src="/promotion_popup/luckyRouletteImg.png"
            alt="프로모션"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 하단 액션 영역 */}
        <div className="p-4 bg-white border-t border-gray-200">
          {/* 바로가기 버튼 */}
          <button
            onClick={() => {
              onOpenRoulette();
              handleClose();
            }}
            className="w-full px-6 py-4 mb-3 text-base font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg transition-all hover:from-yellow-500 hover:to-orange-600 hover:shadow-xl hover:scale-[1.02]"
          >
            🎰 룰렛 돌리러 가기
          </button>

          <div className="flex gap-3 items-center justify-between">
            {/* 오늘 하루 보지 않기 체크박스 */}
            <label className="flex gap-2 items-center text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={dontShowToday}
                onChange={(e) => setDontShowToday(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <span>오늘 하루 보지 않기</span>
            </label>

            {/* 닫기 버튼 */}
            <button
              onClick={handleClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg transition-colors hover:bg-gray-200"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionPopup;

