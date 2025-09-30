'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 backdrop-blur-md bg-white/90">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex gap-3 items-center">
              <Image
                src="/logo.svg"
                alt="차렌터카 로고"
                width={40}
                height={40}
                className="transition-transform hover:scale-110"
              />
              <span className="text-2xl font-bold text-blue-600">차렌터카</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-6 lg:space-x-8 md:flex">
            <Link href="/" className="text-gray-700 transition-colors duration-200 hover:text-blue-600">
              홈
            </Link>

            {/* 차량/요금 안내 Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('vehicle')}
                className="flex items-center text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                차량/요금 안내
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'vehicle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full z-50 mt-2 w-48 bg-white rounded-md border border-gray-200 shadow-lg"
                  >
                    <div className="py-1">
                      <a href="/차량안내" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">차량안내</a>
                      <a href="/차량관리" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">차량관리</a>
                      <a href="/이용요금-안내" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">이용요금 안내</a>
                      <a href="/보험안내" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">보험안내</a>
                      <a href="/대여자격" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">대여자격</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 예약/상담 Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('reservation')}
                className="flex items-center text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                예약/상담
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'reservation' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full z-50 mt-2 w-48 bg-white rounded-md border border-gray-200 shadow-lg"
                  >
                    <div className="py-1">
                      <a href="/예약방법" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">예약방법</a>
                      <a href="/카카오톡-안내" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">카카오톡 안내</a>
                      <a href="/위챗-안내" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">위챗 안내</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 서비스 Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('service')}
                className="flex items-center text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                서비스
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'service' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full z-50 mt-2 w-48 bg-white rounded-md border border-gray-200 shadow-lg"
                  >
                    <div className="py-1">
                      <a href="/단기-월렌트" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">단기/월렌트</a>
                      <a href="/기사포함렌트카" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">기사포함렌트카</a>
                      <a href="/사고대차" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">사고대차</a>
                      <a href="/사고대차-안내" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">사고대차 안내</a>
                      <a href="/물품대여-서비스" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">물품대여 서비스</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 공항 서비스 Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('airport')}
                className="flex items-center text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                공항 서비스
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'airport' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full z-50 mt-2 w-48 bg-white rounded-md border border-gray-200 shadow-lg"
                  >
                    <div className="py-1">
                      <a href="/공항-이용안내" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">공항 이용안내</a>
                      <a href="/공항-픽업안내" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">공항 픽업안내</a>
                      <a href="/인천공항-렌트" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">인천공항 렌트</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 고객센터 Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('customer')}
                className="flex items-center text-gray-700 transition-colors duration-200 hover:text-blue-600"
              >
                고객센터
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'customer' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full z-50 mt-2 w-48 bg-white rounded-md border border-gray-200 shadow-lg"
                  >
                    <div className="py-1">
                      <a href="/배차후기" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">배차후기</a>
                      <a href="/사고대차-후기" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">사고대차 후기</a>
                      <a href="/게시판" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">게시판</a>
                      <a href="/이벤트" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">이벤트</a>
                      <a href="/최신소식" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">최신소식</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/찾아오시는길" className="text-gray-700 transition-colors duration-200 hover:text-blue-600">
              오시는 길
            </a>
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden px-6 py-2 text-white bg-blue-600 rounded-lg transition-colors duration-200 md:block hover:bg-blue-700"
          >
            지금 예약하기
          </motion.button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 rounded-md md:hidden hover:text-primary-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <Link href="/" className="block px-3 py-2 text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">
                  홈
                </Link>

                {/* 차량/요금 안내 */}
                <div className="pt-2 border-t">
                  <p className="px-3 py-2 text-sm font-semibold text-gray-900">차량/요금 안내</p>
                  <a href="/차량안내" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">차량안내</a>
                  <a href="/차량관리" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">차량관리</a>
                  <a href="/이용요금-안내" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">이용요금 안내</a>
                  <a href="/보험안내" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">보험안내</a>
                  <a href="/대여자격" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">대여자격</a>
                </div>

                {/* 예약/상담 */}
                <div className="pt-2 border-t">
                  <p className="px-3 py-2 text-sm font-semibold text-gray-900">예약/상담</p>
                  <a href="/예약방법" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">예약방법</a>
                  <a href="/카카오톡-안내" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">카카오톡 안내</a>
                  <a href="/위챗-안내" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">위챗 안내</a>
                </div>

                {/* 서비스 */}
                <div className="pt-2 border-t">
                  <p className="px-3 py-2 text-sm font-semibold text-gray-900">서비스</p>
                  <a href="/단기-월렌트" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">단기/월렌트</a>
                  <a href="/기사포함렌트카" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">기사포함렌트카</a>
                  <a href="/사고대차" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">사고대차</a>
                  <a href="/사고대차-안내" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">사고대차 안내</a>
                  <a href="/물품대여-서비스" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">물품대여 서비스</a>
                </div>

                {/* 공항 서비스 */}
                <div className="pt-2 border-t">
                  <p className="px-3 py-2 text-sm font-semibold text-gray-900">공항 서비스</p>
                  <a href="/공항-이용안내" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">공항 이용안내</a>
                  <a href="/공항-픽업안내" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">공항 픽업안내</a>
                  <a href="/인천공항-렌트" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">인천공항 렌트</a>
                </div>

                {/* 고객센터 */}
                <div className="pt-2 border-t">
                  <p className="px-3 py-2 text-sm font-semibold text-gray-900">고객센터</p>
                  <a href="/배차후기" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">배차후기</a>
                  <a href="/사고대차-후기" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">사고대차 후기</a>
                  <a href="/게시판" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">게시판</a>
                  <a href="/이벤트" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">이벤트</a>
                  <a href="/최신소식" className="block px-6 py-2 text-sm text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50">최신소식</a>
                </div>

                <a href="/찾아오시는길" className="block px-3 py-2 pt-2 text-gray-700 rounded-md border-t hover:text-blue-600 hover:bg-gray-50">
                  오시는 길
                </a>

                <button className="px-3 py-2 mt-4 w-full text-left text-white bg-blue-600 rounded-md transition-colors duration-200 hover:bg-blue-700">
                  지금 예약하기
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;

