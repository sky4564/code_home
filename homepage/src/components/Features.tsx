'use client'

import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contact Information */}
        <div className="text-center mb-16">
          <div className="bg-blue-600 text-white p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-4">카카오톡 ID: charent4275500</h2>
            <h2 className="text-3xl font-bold">위챗 ID: charentcar</h2>
          </div>
        </div>

        {/* Transportation Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

          {/* Bus Guide */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">🚌</div>
              <h3 className="text-xl font-bold">버스 노선 안내 (선학체육관 정류장 기준)</h3>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-blue-600 mb-2">🔵 간선버스</h4>
              <p className="text-gray-700">🚍 6번 / 55번 / 63번 / 303번</p>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-green-600 mb-2">🟢 지선버스</h4>
              <p className="text-gray-700">🚍 522번 / 523번</p>
            </div>

            <div className="mb-4">
              <h4 className="font-bold mb-2">📍 정류장 정보</h4>
              <p className="text-gray-700">🏟️ 정류장명: 선학체육관 (하키경기장)</p>
            </div>

            <div className="text-sm text-gray-600">
              <p>1. 🚌 하차 후 → SK엔크린 주유소 방향 50m 직진 ⬆️</p>
              <p>2. 우측 골목으로 50m 이동 ↗️</p>
              <p>3. 🎯 도착! ✨</p>
              <p className="mt-2 font-bold">💡 총 도보시간: 약 2-3분</p>
            </div>
          </div>

          {/* Station Guide 1 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">🚇</div>
              <h3 className="text-xl font-bold">문학경기장역에서 차렌터카 가는 길</h3>
            </div>

            <div className="mb-4">
              <h4 className="font-bold mb-2">🏁 출발지: 인천 1호선 문학경기장역 1번 출구</h4>
            </div>

            <div className="text-sm text-gray-600 space-y-2">
              <p>1️⃣ 🚪 1번 출구로 나와 67m 전진 👣</p>
              <p>2️⃣ ⛽ S-OIL 창조신화 주유소 방향 🚦 횡단보도 건너기</p>
              <p>3️⃣ ➡️ 오른쪽 방향으로 약 272m 직진 이동 🚶‍♂️</p>
              <p>4️⃣ ⛽ SK엔크린 서해에너지 주유소 앞 👈 왼쪽골목길 진입 후 50m 이동</p>
              <p>5️⃣ 🎯 도착! ✨</p>
            </div>

            <div className="mt-4 font-bold text-blue-600">
              <p>📍 총 거리: 약 389m (도보 5분 소요)</p>
              <p>🕐 소요시간: 약 5-7분</p>
            </div>
          </div>

          {/* Station Guide 2 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">🚇</div>
              <h3 className="text-xl font-bold">선학역에서 차렌터카 가는 길</h3>
            </div>

            <div className="mb-4">
              <h4 className="font-bold mb-2">🏁 출발지: 인천 1호선 선학역 1번 출구</h4>
            </div>

            <div className="text-sm text-gray-600 space-y-2">
              <p>1️⃣ 🚪 1번 출구에서 ⚽ 선학축구장 방면으로 530m 이동 👣</p>
              <p>2️⃣ ⛽ SK엔크린 서해에너지 주유소 앞 도착 📍</p>
              <p>3️⃣ ➡️ 우측 골목길로 진입 후 50m 이동 🚶‍♂️</p>
              <p>4️⃣ 🎯 도착! ✨</p>
            </div>

            <div className="mt-4 font-bold text-blue-600">
              <p>📍 총 거리: 약 580m (도보 7분 소요)</p>
              <p>🕐 소요시간: 약 7-9분</p>
            </div>
          </div>
        </div>

        {/* Facility Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* Parking Info */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🚗 차렌터카 주차 안내 - 편리한 주차 + 렌터카 서비스</h3>

            <p className="text-gray-700 mb-4">
              차렌터카는 고객님의 편의를 위해<br />
              사무실 앞 넓은 전용 주차 공간을 무료로 제공하고 있습니다.<br />
              작은 차량으로 방문하셔서 대형 렌터카로 간편하게 교체하세요!
            </p>

            <div className="mb-4">
              <h4 className="font-bold text-green-600 mb-2">✅ 이용 방법</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p>1. 본인 차량을 차렌터카 전용 주차장에 안전하게 주차</p>
                <p>2. 예약하신 쏠라티, 스타렉스 등 대형차량 인수</p>
                <p>3. 용무 후, 다시 본인 차량으로 교체하여 귀가</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-blue-600 mb-2">💡 차렌터카만의 장점</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p>• 넉넉한 주차 공간 완비 🅿️</p>
                <p>• 소형차 ➡️ 대형차 간편교체 시스템</p>
                <p>• 사무실 바로 앞, 뛰어난 접근성 📍</p>
                <p>• 주차 걱정 없는 스마트한 렌트 환경 제공</p>
              </div>
            </div>

            <p className="font-bold text-blue-800">&ldquo;작은 차로 와서 큰 차로 가세요!&rdquo;</p>
          </div>

          {/* Facilities Info */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🚻 차렌터카 고객 편의시설 안내</h3>

            <p className="text-gray-700 mb-4">
              차렌터카는 단순한 렌트 서비스가 아닌,<br />
              고객의 편안함까지 생각하는 토탈 서비스를 제공합니다.
            </p>

            <div className="mb-4">
              <h4 className="font-bold text-blue-600 mb-2">✅ 깨끗한 남녀 전용 화장실 완비</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p>• 🚹 남성 전용 화장실 - 위생적이고 쾌적한 공간</p>
                <p>• 🚺 여성 전용 화장실 - 안전하고 청결하게 유지</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-green-600 mb-2">💡 이런 분들께 유용합니다.</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p>• 🛣️ 장거리 운전 전, 마지막 정비 및 휴식이 필요할 때</p>
                <p>• 🚗 차량 반납 후 개인 차량으로 이동 전 잠깐의 여유</p>
                <p>• 👨‍👩‍👧‍👦 가족 단위 고객님의 위생 • 편의가 중요한 경우</p>
              </div>
            </div>

            <p className="font-bold text-green-800">&ldquo;렌터카 + 편의시설 = 완벽한 서비스&rdquo;</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-gray-800 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">고객센터</h3>
          <h2 className="text-4xl font-bold text-blue-400 mb-4">032-427-5500</h2>
          <p className="text-lg">평일 09:00 ~ 19:00</p>
          <p className="text-lg">사고처리 문의는 24시간 가능</p>
        </div>

      </div>
    </section>
  );
};

export default Features;
