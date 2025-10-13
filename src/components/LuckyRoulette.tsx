'use client'

import React, { useState } from 'react';
import { Gift, X } from 'lucide-react';

interface Prize {
  id: number;
  name: string;
  color: string;
  probability: number; // 0-100
  emoji: string;
}

const LuckyRoulette: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [wonPrize, setWonPrize] = useState<Prize | null>(null);

  // 경품 목록 (확률 합계 = 100)
  const prizes: Prize[] = [
    { id: 1, name: '꽝! 다음 기회에!', color: '#9CA3AF', probability: 40, emoji: '😅' },
    { id: 2, name: '스타벅스 커피쿠폰', color: '#10B981', probability: 25, emoji: '☕' },
    { id: 3, name: '3,000원 할인', color: '#3B82F6', probability: 15, emoji: '💰' },
    { id: 4, name: '5,000원 할인', color: '#8B5CF6', probability: 10, emoji: '💵' },
    { id: 5, name: '세차권', color: '#F59E0B', probability: 7, emoji: '🚗' },
    { id: 6, name: '10,000원 할인', color: '#EF4444', probability: 3, emoji: '🎉' },
  ];

  // 확률에 따라 당첨 결정
  const selectPrize = (): Prize => {
    const random = Math.random() * 100;
    let cumulative = 0;
    
    for (const prize of prizes) {
      cumulative += prize.probability;
      if (random <= cumulative) {
        return prize;
      }
    }
    return prizes[0]; // 기본값
  };

  const spinRoulette = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setShowResult(false);

    // 당첨 경품 선택
    const prize = selectPrize();
    setWonPrize(prize);

    // 룰렛 돌리기 (최소 3바퀴 + 당첨 위치)
    const prizeIndex = prizes.findIndex(p => p.id === prize.id);
    const degreePerPrize = 360 / prizes.length;
    const randomSpins = 3 + Math.floor(Math.random() * 3); // 3~5바퀴
    const targetRotation = randomSpins * 360 + (prizeIndex * degreePerPrize) + (degreePerPrize / 2);
    
    setRotation(prev => prev + targetRotation);

    // 3초 후 결과 표시
    setTimeout(() => {
      setIsSpinning(false);
      setShowResult(true);
    }, 3000);
  };

  return (
    <div className="relative py-12 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-yellow-700 bg-yellow-100 rounded-full border-2 border-yellow-300">
            <Gift className="w-5 h-5" />
            <span className="font-bold">행운의 룰렛 이벤트</span>
          </div>
          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
            🎰 돌려돌려 룰렛!
          </h2>
          <p className="text-gray-600">
            룰렛을 돌려 다양한 혜택을 받아가세요!
          </p>
        </div>

        {/* Roulette Wheel */}
        <div className="relative mx-auto mb-8 w-80 h-80 sm:w-96 sm:h-96">
          
          {/* 포인터 (위쪽 화살표) */}
          <div className="absolute -top-4 left-1/2 z-20 w-0 h-0 border-8 border-transparent transform -translate-x-1/2 border-t-red-600 drop-shadow-lg">
            <div className="absolute -top-3 left-1/2 w-4 h-8 bg-red-600 rounded-full transform -translate-x-1/2"></div>
          </div>

          {/* 룰렛 원판 */}
          <div 
            className="relative w-full h-full rounded-full shadow-2xl"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: isSpinning ? 'transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
            }}
          >
            {/* 경품 섹션들 */}
            {prizes.map((prize, index) => {
              const degreePerPrize = 360 / prizes.length;
              const startAngle = index * degreePerPrize;
              
              return (
                <div
                  key={prize.id}
                  className="absolute inset-0"
                  style={{
                    transform: `rotate(${startAngle}deg)`,
                    clipPath: `polygon(50% 50%, 50% 0%, ${50 + Math.tan((degreePerPrize * Math.PI) / 360) * 50}% 0%)`,
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{ backgroundColor: prize.color }}
                  >
                    <div
                      className="absolute top-8 left-1/2 text-center text-white transform -translate-x-1/2"
                      style={{ 
                        transform: `translateX(-50%) rotate(${degreePerPrize / 2}deg)`,
                        width: '80px',
                      }}
                    >
                      <div className="text-2xl mb-1">{prize.emoji}</div>
                      <div className="text-[10px] font-bold leading-tight">{prize.name}</div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* 중앙 버튼 */}
            <div className="absolute inset-0 flex justify-center items-center">
              <button
                onClick={spinRoulette}
                disabled={isSpinning}
                className={`
                  w-24 h-24 rounded-full font-bold text-white shadow-xl transform transition-all
                  ${isSpinning 
                    ? 'bg-gray-400 cursor-not-allowed scale-95' 
                    : 'bg-gradient-to-br from-yellow-400 to-orange-500 hover:scale-110 hover:shadow-2xl'
                  }
                `}
              >
                {isSpinning ? '돌아가는중...' : 'START!'}
              </button>
            </div>
          </div>

          {/* 외곽 테두리 */}
          <div className="absolute inset-0 border-8 border-yellow-400 rounded-full pointer-events-none"></div>
        </div>

        {/* 결과 팝업 */}
        {showResult && wonPrize && (
          <div className="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="relative p-8 w-full max-w-md bg-white rounded-2xl shadow-2xl animate-bounce">
              
              {/* 닫기 버튼 */}
              <button
                onClick={() => setShowResult(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 rounded-full transition-colors hover:bg-gray-100 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>

              {/* 당첨 내용 */}
              <div className="text-center">
                <div className="mb-4 text-6xl">{wonPrize.emoji}</div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  {wonPrize.id === 1 ? '아쉽네요!' : '축하합니다! 🎉'}
                </h3>
                <p className="mb-6 text-3xl font-bold" style={{ color: wonPrize.color }}>
                  {wonPrize.name}
                </p>
                
                {wonPrize.id !== 1 && (
                  <div className="p-4 mb-6 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      📞 전화 예약 시 "룰렛 이벤트 당첨"이라고 말씀해주세요!
                    </p>
                    <p className="mt-2 text-lg font-bold text-blue-600">
                      032-427-5500
                    </p>
                  </div>
                )}

                <button
                  onClick={() => {
                    setShowResult(false);
                    // 다시 돌리기 (1일 1회 제한은 localStorage로 구현 가능)
                  }}
                  className="px-6 py-3 font-bold text-white bg-blue-600 rounded-xl transition-all hover:bg-blue-700"
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 이벤트 안내 */}
        <div className="p-6 text-center bg-white rounded-xl shadow-md">
          <h4 className="mb-3 text-lg font-bold text-gray-900">🎁 이벤트 안내</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 차량 예약 고객님께 1일 1회 참여 기회 제공</li>
            <li>• 당첨된 혜택은 예약 시 말씀해주시면 적용됩니다</li>
            <li>• 전화 예약: 032-427-5500</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default LuckyRoulette;

