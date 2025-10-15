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

      {/* Hero Section */}
      <section className="px-4 pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl font-bold text-white md:text-5xl"
          >
            찾아오시는 길
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100"
          >
            차렌터카로 오시는 방법을 안내해드립니다
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 mb-12 md:grid-cols-2">
            {/* 기본 정보 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
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
                    <p className="text-gray-700">평일: 08:00 - 20:00</p>
                    <p className="text-gray-700">주말: 09:00 - 18:00</p>
                    <p className="mt-2 text-sm font-semibold text-blue-600">
                      ✨ 24시간 차량 인수/반납 가능
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 교통편 안내 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
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

                {/* 길찾기 버튼 - 모바일 전용 */}
                <div className="pt-4 border-t border-gray-200 md:hidden">
                  <h3 className="flex gap-2 items-center mb-3 font-semibold text-gray-900">
                    <Navigation className="w-5 h-5 text-blue-600" />
                    길찾기
                  </h3>
                  <div className="grid grid-cols-1 gap-2 ml-7">
                    <button
                      onClick={() => {
                        if (navigator.geolocation) {
                          navigator.geolocation.getCurrentPosition(
                            (position) => {
                              const { latitude, longitude } = position.coords;
                              window.open(
                                `https://map.naver.com/p/directions/${longitude},${latitude},%EB%82%B4%EC%9C%84%EC%B9%98/126.6451078,37.3943216,%EC%9D%B8%EC%B2%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EA%B2%BD%EC%9B%90%EB%8C%80%EB%A1%9C534%EB%B2%88%EA%B8%B8%2011/-/car?c=15.00,0,0,0,dh`,
                                '_blank'
                              );
                            },
                            () => {
                              window.open(
                                'https://map.naver.com/p/search/%EC%9D%B8%EC%B2%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EA%B2%BD%EC%9B%90%EB%8C%80%EB%A1%9C534%EB%B2%88%EA%B8%B8%2011',
                                '_blank'
                              );
                            }
                          );
                        } else {
                          window.open(
                            'https://map.naver.com/p/search/%EC%9D%B8%EC%B2%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EA%B2%BD%EC%9B%90%EB%8C%80%EB%A1%9C534%EB%B2%88%EA%B8%B8%2011',
                            '_blank'
                          );
                        }
                      }}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 active:bg-green-800 transition-colors shadow-sm"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      네이버지도로 길찾기
                    </button>
                    <button
                      onClick={() => {
                        const tmapUrl = 'tmap://route?rGoName=인천 연수구 경원대로534번길 11&rGoX=126.6451078&rGoY=37.3943216';
                        const tmapWebUrl = 'https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx6b64a0f5cb4a4d7c9b5e7f1e8d9c0f3a&name=%EC%9D%B8%EC%B2%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EA%B2%BD%EC%9B%90%EB%8C%80%EB%A1%9C534%EB%B2%88%EA%B8%B8%2011&lon=126.6451078&lat=37.3943216';
                        window.location.href = tmapUrl;
                        setTimeout(() => {
                          window.open(tmapWebUrl, '_blank');
                        }, 500);
                      }}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 active:bg-red-800 transition-colors shadow-sm"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      티맵으로 길찾기
                    </button>
                    <button
                      onClick={() => {
                        if (navigator.geolocation) {
                          navigator.geolocation.getCurrentPosition(
                            (position) => {
                              const { latitude, longitude } = position.coords;
                              window.open(
                                `https://map.kakao.com/link/from/내위치,${latitude},${longitude}/to/인천 연수구 경원대로534번길 11,37.3943216,126.6451078`,
                                '_blank'
                              );
                            },
                            () => {
                              window.open(
                                'https://map.kakao.com/link/to/인천 연수구 경원대로534번길 11,37.3943216,126.6451078',
                                '_blank'
                              );
                            }
                          );
                        } else {
                          window.open(
                            'https://map.kakao.com/link/to/인천 연수구 경원대로534번길 11,37.3943216,126.6451078',
                            '_blank'
                          );
                        }
                      }}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-yellow-500 text-gray-900 font-medium rounded-lg hover:bg-yellow-600 active:bg-yellow-700 transition-colors shadow-sm"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      카카오맵으로 길찾기
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 지도 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-white rounded-2xl shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-bold text-gray-900">오시는 길 지도</h2>

            {/* 네이버맵 영역 */}
            <div className="overflow-hidden relative w-full h-96 bg-gray-100 rounded-xl">
              <div className="flex absolute inset-0 justify-center items-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 w-16 h-16 text-blue-600" />
                  <p className="mb-6 text-gray-600">
                    인천광역시 연수구 경원대로534번길 11
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a
                      href="https://map.naver.com/p/search/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%EA%B2%BD%EC%9B%90%EB%8C%80%EB%A1%9C534%EB%B2%88%EA%B8%B8%2011"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex gap-2 items-center px-6 py-3 font-semibold text-white bg-green-600 rounded-lg shadow-md transition-colors hover:bg-green-700"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      네이버지도에서 보기
                    </a>
                    <a
                      href="https://map.kakao.com/?q=인천광역시 연수구 경원대로534번길 11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex gap-2 items-center px-6 py-3 font-semibold text-gray-900 bg-yellow-500 rounded-lg shadow-md transition-colors hover:bg-yellow-600"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      카카오맵에서 보기
                    </a>
                  </div>
                </div>
              </div>
              {/* 실제 지도 임베드 코드는 여기에 추가 가능 */}
            </div>

            <div className="p-4 mt-6 bg-blue-50 rounded-lg">
              <h3 className="mb-2 font-semibold text-blue-900">주차 안내</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 건물 지하 1층~2층 무료 주차장 이용 가능</li>
                <li>• 차량 인수/반납 시 건물 1층 정면 주차</li>
                <li>• 장애인 주차구역 완비</li>
              </ul>
            </div>
          </motion.div>

          {/* 공항 픽업 서비스 안내 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 mt-8 text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg"
          >
            <h2 className="mb-4 text-2xl font-bold">🚗 공항 픽업 서비스</h2>
            <p className="mb-6 text-blue-100">
              인천공항/김포공항에서 바로 차량을 인수하실 수 있습니다.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg backdrop-blur-sm bg-white/10">
                <h3 className="mb-2 font-semibold">인천국제공항</h3>
                <p className="text-sm text-blue-100">
                  1터미널 / 2터미널 모두 가능<br />
                  도착 30분 전 연락 주시면 대기
                </p>
              </div>
              <div className="p-4 rounded-lg backdrop-blur-sm bg-white/10">
                <h3 className="mb-2 font-semibold">김포국제공항</h3>
                <p className="text-sm text-blue-100">
                  국내선 / 국제선 모두 가능<br />
                  도착 후 연락 주시면 즉시 이동
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href="tel:032-427-5500"
                className="inline-block px-8 py-3 font-semibold text-blue-600 bg-white rounded-lg transition-colors hover:bg-blue-50"
              >
                공항 픽업 예약하기
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LocationPage;

