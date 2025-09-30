'use client'

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Company Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">차렌터카 소개</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            차렌터카는 고객의 편안하고 안전한 여행을 위해 최선을 다하는
            인천 지역 최고의 렌터카 전문업체입니다.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-bold mb-2 text-blue-600">7인승 카니발</h3>
            <p className="text-gray-600">넓은 공간의 프리미엄 차량</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold mb-2 text-blue-600">24시간 운영</h3>
            <p className="text-gray-600">연중무휴 언제든 이용 가능</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-2 text-blue-600">정찰제 운영</h3>
            <p className="text-gray-600">투명하고 합리적인 요금</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-bold mb-2 text-blue-600">무료 서비스</h3>
            <p className="text-gray-600">유모차, 카시트 무료 제공</p>
          </div>
        </div>

        {/* Service Types */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">제공 서비스</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <h4 className="font-bold text-blue-600 mb-2">단기 렌트</h4>
              <p className="text-sm text-gray-600">당일부터 단기간 이용</p>
            </div>

            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <h4 className="font-bold text-blue-600 mb-2">월 렌트</h4>
              <p className="text-sm text-gray-600">장기간 경제적 이용</p>
            </div>

            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <h4 className="font-bold text-blue-600 mb-2">사고 대차</h4>
              <p className="text-sm text-gray-600">사고 시 대체 차량</p>
            </div>

            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <h4 className="font-bold text-blue-600 mb-2">공항 픽업</h4>
              <p className="text-sm text-gray-600">공항 픽업 서비스</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

