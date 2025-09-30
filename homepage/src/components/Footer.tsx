'use client'

import React from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Main Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-8">오시는 길</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left Side - Contact Information */}
            <div className="space-y-8">

              {/* Main Phone */}
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6" />
                  고객센터
                </h3>
                <h2 className="text-5xl font-bold mb-4">032-427-5500</h2>
                <div className="space-y-2">
                  <p className="text-lg">평일 09:00 ~ 19:00</p>
                  <p className="text-lg">사고처리 문의는 24시간 가능</p>
                </div>
              </div>

              {/* Additional Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 bg-white bg-opacity-10 rounded-lg p-4">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-lg">카카오톡 ID: charent4275500</span>
                </div>

                <div className="flex items-center justify-center gap-3 bg-white bg-opacity-10 rounded-lg p-4">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-lg">위챗 ID: charentcar</span>
                </div>

                <div className="flex items-center justify-center gap-3 bg-white bg-opacity-10 rounded-lg p-4">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">인천 연수구 (선학역, 문학경기장역 인근)</span>
                </div>
              </div>
            </div>

            {/* Right Side - Location Details */}
            <div className="space-y-6">

              {/* Transportation */}
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">🚇 지하철 이용시</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">선학역</p>
                    <p>1번 출구 → 도보 7-9분 (580m)</p>
                  </div>
                  <div>
                    <p className="font-semibold">문학경기장역</p>
                    <p>1번 출구 → 도보 5-7분 (389m)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">🚌 버스 이용시</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">선학체육관 정류장 하차</p>
                    <p>간선: 6번, 55번, 63번, 303번</p>
                    <p>지선: 522번, 523번</p>
                  </div>
                  <p>→ SK엔크린 주유소 방향 → 우측 골목 50m</p>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">🚗 주차안내</h4>
                <p className="text-sm">사무실 앞 전용 주차공간 무료 제공</p>
                <p className="text-sm mt-2">&ldquo;작은 차로 와서 큰 차로 가세요!&rdquo;</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500 pt-8 text-center">
          <p className="text-blue-100">
            © {currentYear} 차렌터카. 여행의 시작과 끝, 차렌터카와 함께하세요.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

