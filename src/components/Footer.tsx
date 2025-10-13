'use client'

import React from 'react';
import { Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Customer Service Section */}
        <div className="text-center mb-12">
          <div className="bg-white bg-opacity-10 rounded-lg p-6 max-w-md mx-auto">
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
        </div>

        {/* Company Information */}
        <div className="border-t border-blue-500 pt-8">
          <div className="text-center space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-100">
              <div className="space-y-2">
                <p><strong>상호:</strong> (주)차렌터카</p>
                <p><strong>대표:</strong> 차승훈</p>
                <p><strong>개인정보관리책임자:</strong> 차승훈</p>
                <p><strong>전화:</strong> 032-427-5500</p>
                <p><strong>이메일:</strong> charentcar@naver.com</p>
              </div>
              <div className="space-y-2">
                <p><strong>주소:</strong> 인천광역시 연수구 경원대로534번길 11(선학동)</p>
                <p><strong>사업자등록번호:</strong> 8888101709</p>
                <p><strong>통신판매:</strong> 제 2021-인천연수구-0492</p>
                <p><strong>호스팅제공자:</strong> VERCEL</p>
                <p><strong>이용약관</strong></p>
              </div>
            </div>
            <p className="text-blue-100 pt-4 border-t border-blue-500">
              © {currentYear} 차렌터카. 여행의 시작과 끝, 차렌터카와 함께하세요.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

