'use client'

import React from 'react';
import { MapPin, Phone, Clock, Train, Bus, Car, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LocationPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />



      {/* Main Content */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          {/* 지도 - 맨 위로 이동 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 mb-12 bg-white rounded-2xl shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-bold text-gray-900">오시는 길 지도</h2>

            {/* 네이버맵 영역 */}
            <div className="overflow-hidden relative w-full h-96 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 rounded-xl shadow-inner">
              {/* 지도 패턴 배경 */}
              <div className="absolute inset-0 opacity-80">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="map-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      {/* 도로 패턴 - 선명한 흰색/노란색 */}
                      <line x1="0" y1="50" x2="100" y2="50" stroke="#ffffff" strokeWidth="4" opacity="0.9" />
                      <line x1="50" y1="0" x2="50" y2="100" stroke="#ffffff" strokeWidth="4" opacity="0.9" />
                      {/* 작은 도로들 - 밝은 노란색 */}
                      <line x1="0" y1="25" x2="100" y2="25" stroke="#fbbf24" strokeWidth="3" strokeDasharray="8,4" opacity="0.85" />
                      <line x1="0" y1="75" x2="100" y2="75" stroke="#fbbf24" strokeWidth="3" strokeDasharray="8,4" opacity="0.85" />
                      <line x1="25" y1="0" x2="25" y2="100" stroke="#fbbf24" strokeWidth="3" strokeDasharray="8,4" opacity="0.85" />
                      <line x1="75" y1="0" x2="75" y2="100" stroke="#fbbf24" strokeWidth="3" strokeDasharray="8,4" opacity="0.85" />
                      {/* 추가 도로들 - 시안색 */}
                      <line x1="0" y1="12.5" x2="100" y2="12.5" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4,2" opacity="0.7" />
                      <line x1="0" y1="37.5" x2="100" y2="37.5" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4,2" opacity="0.7" />
                      <line x1="0" y1="62.5" x2="100" y2="62.5" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4,2" opacity="0.7" />
                      <line x1="0" y1="87.5" x2="100" y2="87.5" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4,2" opacity="0.7" />
                      <line x1="12.5" y1="0" x2="12.5" y2="100" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4,2" opacity="0.7" />
                      <line x1="37.5" y1="0" x2="37.5" y2="100" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4,2" opacity="0.7" />
                      <line x1="62.5" y1="0" x2="62.5" y2="100" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4,2" opacity="0.7" />
                      <line x1="87.5" y1="0" x2="87.5" y2="100" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4,2" opacity="0.7" />
                      {/* 랜드마크 점들 - 비비드한 색상 */}
                      <circle cx="30" cy="30" r="5" fill="#ef4444" opacity="0.9" />
                      <circle cx="70" cy="70" r="5" fill="#ef4444" opacity="0.9" />
                      <circle cx="30" cy="70" r="4" fill="#f97316" opacity="0.9" />
                      <circle cx="70" cy="30" r="4" fill="#f97316" opacity="0.9" />
                      <circle cx="50" cy="50" r="6" fill="#dc2626" opacity="0.95" />
                      <circle cx="15" cy="15" r="3" fill="#f59e0b" opacity="0.85" />
                      <circle cx="85" cy="85" r="3" fill="#f59e0b" opacity="0.85" />
                      <circle cx="15" cy="85" r="3" fill="#f59e0b" opacity="0.85" />
                      <circle cx="85" cy="15" r="3" fill="#f59e0b" opacity="0.85" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-pattern)" />
                </svg>
              </div>

              {/* 장식용 위치 마커들 */}
              <div className="flex absolute inset-0 opacity-60">
                <MapPin className="absolute top-10 left-10 w-16 h-16 text-red-500 drop-shadow-lg animate-pulse" style={{ animationDuration: '3s' }} />
                <MapPin className="absolute top-20 right-20 w-12 h-12 text-orange-500 drop-shadow-lg animate-pulse" style={{ animationDuration: '4s' }} />
                <MapPin className="absolute bottom-20 left-1/4 w-14 h-14 text-yellow-500 drop-shadow-lg animate-pulse" style={{ animationDuration: '5s' }} />
                <MapPin className="absolute bottom-10 right-1/4 w-10 h-10 text-pink-500 drop-shadow-lg animate-pulse" style={{ animationDuration: '3.5s' }} />
                <MapPin className="absolute left-20 top-1/3 w-8 h-8 text-cyan-400 drop-shadow-lg animate-pulse" style={{ animationDuration: '4.5s' }} />
              </div>

              <div className="flex absolute inset-0 justify-center items-center backdrop-blur-none bg-white/60">
                <div className="p-8 text-center rounded-2xl shadow-xl backdrop-blur-sm bg-white/90">
                  <MapPin className="mx-auto mb-4 w-16 h-16 text-blue-600 drop-shadow-lg" />
                  <p className="mb-6 font-medium text-gray-700">
                    인천광역시 연수구 경원대로534번길 11
                  </p>
                  <div className="flex flex-col gap-3 w-full md:flex-row md:justify-center">
                    <a
                      href="https://map.naver.com/p/search/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EA%B2%BD%EC%9B%90%EB%8C%80%EB%A1%9C534%EB%B2%88%EA%B8%B8%2011"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex gap-2 justify-center items-center px-6 py-3 font-semibold text-white bg-green-600 rounded-lg shadow-md transition-colors hover:bg-green-700"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      네이버에서 보기
                    </a>
                    <a
                      href="https://map.kakao.com/?q=인천광역시 연수구 경원대로534번길 11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex gap-2 justify-center items-center px-6 py-3 font-semibold text-gray-900 bg-yellow-500 rounded-lg shadow-md transition-colors hover:bg-yellow-600"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      카카오에서 보기
                    </a>
                  </div>
                </div>
              </div>
              {/* 실제 지도 임베드 코드는 여기에 추가 가능 */}
            </div>



            {/* 모바일 길찾기 버튼 */}
            <div className="mt-6 md:hidden">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">빠른 길찾기</h3>
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => {
                    // 정확한 주소로 길찾기
                    window.open(
                      'https://map.naver.com/p/directions/-/-/transit?c=15.00,0,0,0,dh&destination=%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EA%B2%BD%EC%9B%90%EB%8C%80%EB%A1%9C534%EB%B2%88%EA%B8%B8%2011',
                      '_blank'
                    );
                  }}
                  className="flex gap-2 justify-center items-center px-4 py-3 font-medium text-white bg-green-600 rounded-lg shadow-sm transition-colors hover:bg-green-700 active:bg-green-800"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  네이버지도로 길찾기
                </button>
                <button
                  onClick={() => {
                    // 티맵 길찾기 - 주소로 검색
                    const address = '인천광역시 연수구 경원대로534번길 11';
                    const tmapUrl = `tmap://search?name=${encodeURIComponent(address)}`;
                    window.location.href = tmapUrl;
                  }}
                  className="flex gap-2 justify-center items-center px-4 py-3 font-medium text-white bg-red-600 rounded-lg shadow-sm transition-colors hover:bg-red-700 active:bg-red-800"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  티맵으로 길찾기
                </button>
                <button
                  onClick={() => {
                    // 카카오맵 길찾기 - 주소로 검색
                    const address = '인천광역시 연수구 경원대로534번길 11';
                    window.open(
                      `https://map.kakao.com/?q=${encodeURIComponent(address)}`,
                      '_blank'
                    );
                  }}
                  className="flex gap-2 justify-center items-center px-4 py-3 font-medium text-gray-900 bg-yellow-500 rounded-lg shadow-sm transition-colors hover:bg-yellow-600 active:bg-yellow-700"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  카카오맵으로 길찾기
                </button>
              </div>
            </div>

            {/* 주차 안내버튼 */}
            <div className="p-4 mt-6 bg-blue-50 rounded-lg">
              <h3 className="mb-2 font-semibold text-blue-900">주차 안내</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 건물 정면 회사 주차장 이용 가능</li>
                <li>• 차량 인수/반납 시 건물 1층 정면 주차</li>
                <li>• 대형 승합차 인수시 자가 주차가능</li>
              </ul>
            </div>
          </motion.div>

          <div className="grid gap-8 mb-12 md:grid-cols-2">
            {/* 기본 정보 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white rounded-2xl shadow-lg"
            >
              <h2 className="flex gap-2 items-center mb-6 text-2xl font-bold text-gray-900">
                <MapPin className="text-blue-600" />
                기본 정보
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="flex gap-2 items-center mb-2 font-semibold text-gray-900">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    주소
                  </h3>
                  <p className="ml-7 text-gray-700">
                    인천광역시 연수구 경원대로534번길 11
                  </p>
                  <p className="mt-1 ml-7 text-sm text-gray-500">
                    차렌터카
                  </p>
                </div>

                <div>
                  <h3 className="flex gap-2 items-center mb-2 font-semibold text-gray-900">
                    <Phone className="w-5 h-5 text-blue-600" />
                    연락처
                  </h3>
                  <p className="ml-7 text-gray-700">
                    <a href="tel:032-427-5500" className="transition-colors hover:text-blue-600">
                      032-427-5500
                    </a>
                  </p>
                  <p className="mt-1 ml-7 text-sm text-gray-500">
                    카카오톡: @차렌터카
                  </p>
                </div>

                <div>
                  <h3 className="flex gap-2 items-center mb-2 font-semibold text-gray-900">
                    <Clock className="w-5 h-5 text-blue-600" />
                    영업시간
                  </h3>
                  <div className="ml-7 space-y-1">
                    <p className="text-gray-700">평일: 09:00 - 19:00</p>
                    <p className="text-gray-700">토요일: 09:00 - 18:00</p>
                    <p className="text-gray-700">일요일: 휴무</p>
                    <p className="flex flex-col mt-2 text-sm font-semibold text-blue-600">
                      <span>✨ 24시간 차량 인수/반납 가능</span>
                      <span>✨ 비대면 계약서 서비스 제공</span>
                      <span>✨ 공항 픽업 서비스 제공</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 교통편 안내 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white rounded-2xl shadow-lg"
            >
              <h2 className="flex gap-2 items-center mb-6 text-2xl font-bold text-gray-900">
                <Navigation className="text-blue-600" />
                교통편 안내
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="flex gap-2 items-center mb-3 font-semibold text-gray-900">
                    <Train className="w-5 h-5 text-blue-600" />
                    지하철
                  </h3>
                  <div className="ml-7 space-y-2">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-blue-900">인천1호선 선학역</p>
                      <p className="mt-1 text-sm text-gray-600">1번 출구 도보 5분</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-semibold text-blue-900">인천1호선 문학경기장역</p>
                      <p className="mt-1 text-sm text-gray-600">3번 출구 도보 12분</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="flex gap-2 items-center mb-3 font-semibold text-gray-900">
                    <Bus className="w-5 h-5 text-blue-600" />
                    버스
                  </h3>
                  <div className="ml-7 space-y-2">
                    <div>
                      <p className="text-sm font-semibold text-gray-700">간선버스</p>
                      <p className="text-gray-600">6, 24, 45, 65번</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">지선버스</p>
                      <p className="text-gray-600">15, 16-1, 42번</p>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      * 선학동 정류장 하차
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="flex gap-2 items-center mb-3 font-semibold text-gray-900">
                    <Car className="w-5 h-5 text-blue-600" />
                    자가용
                  </h3>
                  <div className="ml-7 space-y-2">
                    <p className="text-gray-700">인천IC에서 10분</p>
                    <p className="text-gray-700">남인천IC에서 5분</p>
                    <p className="text-gray-700">소래IC에서 8분</p>
                    <p className="mt-2 text-sm text-blue-600">
                      ✨ 무료 주차장 완비
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LocationPage;

