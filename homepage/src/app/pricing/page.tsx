'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Car, Calendar, Shield, CheckCircle } from 'lucide-react'

export default function PricingPage() {
  return (
    <main>
      <Header />
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* 헤더 섹션 */}
          <div className="mb-12 text-center">
            <div className="flex justify-center mb-4">
              <Car className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">이용 요금안내</h1>
            <p className="mb-2 text-xl text-gray-600">
              <strong>합리적인 가격</strong>으로 <strong>새차처럼 디테일링 된 차량</strong>을 받아보세요.
            </p>
            <p className="text-lg text-gray-500">(7일이상 가격문의)</p>
          </div>

          {/* 정찰제 안내 배너 */}
          <div className="p-8 mb-12 text-center text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl">
            <div className="flex justify-center mb-4">
              <Car className="w-12 h-12" />
            </div>
            <h2 className="mb-4 text-2xl font-bold">🚘 차렌터카 정찰제 요금 안내</h2>
            <p className="mb-2 text-lg">
              차렌터카는 <strong>주중 · 주말 · 성수기 · 비수기 구분 없이,</strong>
            </p>
            <p className="mb-4 text-lg">
              <strong>항상 동일한 요금</strong>으로 차량을 제공합니다.
            </p>
            <p className="text-blue-100">
              믿고 이용할 수 있는 차렌터카의 합리적인 렌트 시스템을 경험해보세요!
            </p>
          </div>

          {/* 경차 */}
          <section className="mb-12">
            <h2 className="flex gap-3 items-center mb-6 text-3xl font-bold text-gray-900">
              <span className="w-2 h-8 bg-blue-600 rounded"></span>
              경차
            </h2>
            <div className="overflow-hidden bg-white rounded-xl shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="text-white bg-blue-600">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-left">차량명</th>
                      <th className="px-6 py-4 font-semibold text-center">1~2일</th>
                      <th className="px-6 py-4 font-semibold text-center">3~4일</th>
                      <th className="px-6 py-4 font-semibold text-center">5일 이상</th>
                      <th className="px-6 py-4 font-semibold text-center">월 렌트</th>
                      <th className="px-6 py-4 font-semibold text-center">보증금</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">모닝</td>
                      <td className="px-6 py-4 text-center">70,000</td>
                      <td className="px-6 py-4 text-center">65,000</td>
                      <td className="px-6 py-4 text-center">60,000</td>
                      <td rowSpan={3} className="px-6 py-4 text-center bg-gray-50">550,000</td>
                      <td rowSpan={3} className="px-6 py-4 text-center bg-gray-50">300,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">스파크</td>
                      <td className="px-6 py-4 text-center">70,000</td>
                      <td className="px-6 py-4 text-center">65,000</td>
                      <td className="px-6 py-4 text-center">60,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">레이</td>
                      <td className="px-6 py-4 text-center">70,000</td>
                      <td className="px-6 py-4 text-center">65,000</td>
                      <td className="px-6 py-4 text-center">60,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 준중형 */}
          <section className="mb-12">
            <h2 className="flex gap-3 items-center mb-6 text-3xl font-bold text-gray-900">
              <span className="w-2 h-8 bg-green-600 rounded"></span>
              준중형
            </h2>
            <div className="overflow-hidden bg-white rounded-xl shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="text-white bg-green-600">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-left">차량명</th>
                      <th className="px-6 py-4 font-semibold text-center">1~2일</th>
                      <th className="px-6 py-4 font-semibold text-center">3~4일</th>
                      <th className="px-6 py-4 font-semibold text-center">5일 이상</th>
                      <th className="px-6 py-4 font-semibold text-center">월 렌트</th>
                      <th className="px-6 py-4 font-semibold text-center">보증금</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">베뉴</td>
                      <td className="px-6 py-4 text-center">80,000</td>
                      <td className="px-6 py-4 text-center">75,000</td>
                      <td className="px-6 py-4 text-center">70,000</td>
                      <td rowSpan={3} className="px-6 py-4 text-center bg-gray-50">650,000</td>
                      <td rowSpan={3} className="px-6 py-4 text-center bg-gray-50">500,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">K3</td>
                      <td className="px-6 py-4 text-center">80,000</td>
                      <td className="px-6 py-4 text-center">75,000</td>
                      <td className="px-6 py-4 text-center">70,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">아반떼 AD</td>
                      <td className="px-6 py-4 text-center">80,000</td>
                      <td className="px-6 py-4 text-center">75,000</td>
                      <td className="px-6 py-4 text-center">70,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">아반떼 CN7</td>
                      <td className="px-6 py-4 text-center">90,000</td>
                      <td className="px-6 py-4 text-center">85,000</td>
                      <td className="px-6 py-4 text-center">80,000</td>
                      <td className="px-6 py-4 text-center">700,000</td>
                      <td className="px-6 py-4 text-center">500,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 중형 */}
          <section className="mb-12">
            <h2 className="flex gap-3 items-center mb-6 text-3xl font-bold text-gray-900">
              <span className="w-2 h-8 bg-purple-600 rounded"></span>
              중형
            </h2>
            <div className="overflow-hidden bg-white rounded-xl shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="text-white bg-purple-600">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-left">차량명</th>
                      <th className="px-6 py-4 font-semibold text-center">1~2일</th>
                      <th className="px-6 py-4 font-semibold text-center">3~4일</th>
                      <th className="px-6 py-4 font-semibold text-center">5일 이상</th>
                      <th className="px-6 py-4 font-semibold text-center">월 렌트</th>
                      <th className="px-6 py-4 font-semibold text-center">보증금</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">소나타 뉴라이즈</td>
                      <td className="px-6 py-4 text-center">90,000</td>
                      <td className="px-6 py-4 text-center">80,000</td>
                      <td className="px-6 py-4 text-center">70,000</td>
                      <td rowSpan={3} className="px-6 py-4 text-center bg-gray-50">700,000</td>
                      <td rowSpan={3} className="px-6 py-4 text-center bg-gray-50">500,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">K5 2세대</td>
                      <td className="px-6 py-4 text-center">90,000</td>
                      <td className="px-6 py-4 text-center">80,000</td>
                      <td className="px-6 py-4 text-center">70,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">SM6</td>
                      <td className="px-6 py-4 text-center">90,000</td>
                      <td className="px-6 py-4 text-center">80,000</td>
                      <td className="px-6 py-4 text-center">70,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">소나타 DN8</td>
                      <td className="px-6 py-4 text-center">100,000</td>
                      <td className="px-6 py-4 text-center">90,000</td>
                      <td className="px-6 py-4 text-center">80,000</td>
                      <td rowSpan={2} className="px-6 py-4 text-center bg-gray-50">800,000</td>
                      <td rowSpan={2} className="px-6 py-4 text-center bg-gray-50">500,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">K5 DL3</td>
                      <td className="px-6 py-4 text-center">100,000</td>
                      <td className="px-6 py-4 text-center">90,000</td>
                      <td className="px-6 py-4 text-center">80,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">THE 2026 K5 DL3</td>
                      <td className="px-6 py-4 text-center">110,000</td>
                      <td className="px-6 py-4 text-center">100,000</td>
                      <td className="px-6 py-4 text-center">90,000</td>
                      <td rowSpan={2} className="px-6 py-4 text-center bg-gray-50">900,000</td>
                      <td rowSpan={2} className="px-6 py-4 text-center bg-gray-50">500,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">2026 소나타 The Edge</td>
                      <td className="px-6 py-4 text-center">110,000</td>
                      <td className="px-6 py-4 text-center">100,000</td>
                      <td className="px-6 py-4 text-center">90,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 준대형 */}
          <section className="mb-12">
            <h2 className="flex gap-3 items-center mb-6 text-3xl font-bold text-gray-900">
              <span className="w-2 h-8 bg-orange-600 rounded"></span>
              준대형
            </h2>
            <div className="overflow-hidden bg-white rounded-xl shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="text-white bg-orange-600">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-left">차량명</th>
                      <th className="px-6 py-4 font-semibold text-center">1~2일</th>
                      <th className="px-6 py-4 font-semibold text-center">3~4일</th>
                      <th className="px-6 py-4 font-semibold text-center">5일 이상</th>
                      <th className="px-6 py-4 font-semibold text-center">월 렌트</th>
                      <th className="px-6 py-4 font-semibold text-center">보증금</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">그랜저 IG</td>
                      <td className="px-6 py-4 text-center">110,000</td>
                      <td className="px-6 py-4 text-center">100,000</td>
                      <td className="px-6 py-4 text-center">90,000</td>
                      <td className="px-6 py-4 text-center">900,000</td>
                      <td className="px-6 py-4 text-center">500,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">더 뉴 그랜저 IG</td>
                      <td className="px-6 py-4 text-center">120,000</td>
                      <td className="px-6 py-4 text-center">110,000</td>
                      <td className="px-6 py-4 text-center">100,000</td>
                      <td className="px-6 py-4 text-center">1,200,000</td>
                      <td className="px-6 py-4 text-center">500,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">GN7</td>
                      <td className="px-6 py-4 text-center">150,000</td>
                      <td className="px-6 py-4 text-center">140,000</td>
                      <td className="px-6 py-4 text-center">130,000</td>
                      <td className="px-6 py-4 text-center">1,500,000</td>
                      <td className="px-6 py-4 text-center">500,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SUV */}
          <section className="mb-12">
            <h2 className="flex gap-3 items-center mb-6 text-3xl font-bold text-gray-900">
              <span className="w-2 h-8 bg-red-600 rounded"></span>
              SUV
            </h2>
            <div className="overflow-hidden bg-white rounded-xl shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="text-white bg-red-600">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-left">차량명</th>
                      <th className="px-6 py-4 font-semibold text-center">1~2일</th>
                      <th className="px-6 py-4 font-semibold text-center">3~4일</th>
                      <th className="px-6 py-4 font-semibold text-center">5일 이상</th>
                      <th className="px-6 py-4 font-semibold text-center">월 렌트</th>
                      <th className="px-6 py-4 font-semibold text-center">보증금</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">QM6</td>
                      <td className="px-6 py-4 text-center">110,000</td>
                      <td className="px-6 py-4 text-center">100,000</td>
                      <td className="px-6 py-4 text-center">90,000</td>
                      <td rowSpan={3} className="px-6 py-4 text-center bg-gray-50">1,000,000</td>
                      <td rowSpan={3} className="px-6 py-4 text-center bg-gray-50">500,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">더 뉴 쏘렌토</td>
                      <td className="px-6 py-4 text-center">120,000</td>
                      <td className="px-6 py-4 text-center">110,000</td>
                      <td className="px-6 py-4 text-center">100,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">싼타페 TM</td>
                      <td className="px-6 py-4 text-center">120,000</td>
                      <td className="px-6 py-4 text-center">110,000</td>
                      <td className="px-6 py-4 text-center">100,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">싼타페 TM(풀옵션)</td>
                      <td className="px-6 py-4 text-center">130,000</td>
                      <td className="px-6 py-4 text-center">120,000</td>
                      <td className="px-6 py-4 text-center">110,000</td>
                      <td rowSpan={2} className="px-6 py-4 text-center bg-gray-50">1,300,000</td>
                      <td rowSpan={2} className="px-6 py-4 text-center bg-gray-50">500,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">스포티지</td>
                      <td className="px-6 py-4 text-center">130,000</td>
                      <td className="px-6 py-4 text-center">120,000</td>
                      <td className="px-6 py-4 text-center">110,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">2026 더 뉴 쏘렌토</td>
                      <td className="px-6 py-4 text-center">150,000</td>
                      <td className="px-6 py-4 text-center">140,000</td>
                      <td className="px-6 py-4 text-center">130,000</td>
                      <td rowSpan={5} className="px-6 py-4 text-center bg-gray-50">1,500,000</td>
                      <td rowSpan={5} className="px-6 py-4 text-center bg-gray-50">500,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">MX 싼타페</td>
                      <td className="px-6 py-4 text-center">150,000</td>
                      <td className="px-6 py-4 text-center">140,000</td>
                      <td className="px-6 py-4 text-center">130,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">펠리세이드</td>
                      <td className="px-6 py-4 text-center">150,000</td>
                      <td className="px-6 py-4 text-center">140,000</td>
                      <td className="px-6 py-4 text-center">130,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">2026 팰리세이드</td>
                      <td className="px-6 py-4 text-center">170,000</td>
                      <td className="px-6 py-4 text-center">160,000</td>
                      <td className="px-6 py-4 text-center">150,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">모하비 더 마스터</td>
                      <td className="px-6 py-4 text-center">150,000</td>
                      <td className="px-6 py-4 text-center">140,000</td>
                      <td className="px-6 py-4 text-center">130,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">GV80</td>
                      <td className="px-6 py-4 text-center">250,000</td>
                      <td className="px-6 py-4 text-center">240,000</td>
                      <td className="px-6 py-4 text-center">230,000</td>
                      <td className="px-6 py-4 text-center">2,500,000</td>
                      <td className="px-6 py-4 text-center">1,000,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 대형 */}
          <section className="mb-12">
            <h2 className="flex gap-3 items-center mb-6 text-3xl font-bold text-gray-900">
              <span className="w-2 h-8 bg-indigo-600 rounded"></span>
              대형
            </h2>
            <div className="overflow-hidden bg-white rounded-xl shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="text-white bg-indigo-600">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-left">차량명</th>
                      <th className="px-6 py-4 font-semibold text-center">1~2일</th>
                      <th className="px-6 py-4 font-semibold text-center">3~4일</th>
                      <th className="px-6 py-4 font-semibold text-center">5일 이상</th>
                      <th className="px-6 py-4 font-semibold text-center">월 렌트</th>
                      <th className="px-6 py-4 font-semibold text-center">보증금</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">G80</td>
                      <td className="px-6 py-4 text-center">200,000</td>
                      <td className="px-6 py-4 text-center">190,000</td>
                      <td className="px-6 py-4 text-center">180,000</td>
                      <td rowSpan={2} className="px-6 py-4 text-center bg-gray-50">2,500,000</td>
                      <td rowSpan={2} className="px-6 py-4 text-center bg-gray-50">1,000,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">E250</td>
                      <td className="px-6 py-4 text-center">250,000</td>
                      <td className="px-6 py-4 text-center">240,000</td>
                      <td className="px-6 py-4 text-center">230,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">G90</td>
                      <td className="px-6 py-4 text-center">250,000</td>
                      <td className="px-6 py-4 text-center">240,000</td>
                      <td className="px-6 py-4 text-center">230,000</td>
                      <td className="px-6 py-4 text-center">3,000,000</td>
                      <td className="px-6 py-4 text-center">1,000,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">S350</td>
                      <td className="px-6 py-4 text-center">500,000</td>
                      <td className="px-6 py-4 text-center">490,000</td>
                      <td className="px-6 py-4 text-center">480,000</td>
                      <td className="px-6 py-4 text-center">6,000,000</td>
                      <td className="px-6 py-4 text-center">2,000,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 승합차 */}
          <section className="mb-12">
            <h2 className="flex gap-3 items-center mb-6 text-3xl font-bold text-gray-900">
              <span className="w-2 h-8 bg-teal-600 rounded"></span>
              승합차
            </h2>
            <div className="overflow-hidden bg-white rounded-xl shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="text-white bg-teal-600">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-left">차량명</th>
                      <th className="px-6 py-4 font-semibold text-center">1~2일</th>
                      <th className="px-6 py-4 font-semibold text-center">3~4일</th>
                      <th className="px-6 py-4 font-semibold text-center">5일 이상</th>
                      <th className="px-6 py-4 font-semibold text-center">월 렌트</th>
                      <th className="px-6 py-4 font-semibold text-center">보증금</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">더 뉴 카니발</td>
                      <td className="px-6 py-4 text-center">130,000</td>
                      <td className="px-6 py-4 text-center">120,000</td>
                      <td className="px-6 py-4 text-center">110,000</td>
                      <td rowSpan={2} className="px-6 py-4 text-center bg-gray-50">1,300,000</td>
                      <td rowSpan={2} className="px-6 py-4 text-center bg-gray-50">500,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">스타렉스 12인</td>
                      <td className="px-6 py-4 text-center">130,000</td>
                      <td className="px-6 py-4 text-center">120,000</td>
                      <td className="px-6 py-4 text-center">110,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">2025 카니발</td>
                      <td className="px-6 py-4 text-center">150,000</td>
                      <td className="px-6 py-4 text-center">140,000</td>
                      <td className="px-6 py-4 text-center">130,000</td>
                      <td className="px-6 py-4 text-center">1,400,000</td>
                      <td className="px-6 py-4 text-center">500,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">2026 THE NEW 카니발</td>
                      <td className="px-6 py-4 text-center">170,000</td>
                      <td className="px-6 py-4 text-center">160,000</td>
                      <td className="px-6 py-4 text-center">150,000</td>
                      <td rowSpan={2} className="px-6 py-4 text-center bg-gray-50">1,500,000</td>
                      <td rowSpan={2} className="px-6 py-4 text-center bg-gray-50">500,000</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">스타리아 11인</td>
                      <td className="px-6 py-4 text-center">170,000</td>
                      <td className="px-6 py-4 text-center">160,000</td>
                      <td className="px-6 py-4 text-center">150,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">쏠라티 15인승</td>
                      <td className="px-6 py-4 text-center">1일 30만원</td>
                      <td className="px-6 py-4 text-center">2일 55만원</td>
                      <td className="px-6 py-4 text-center">3일 75만원</td>
                      <td className="px-6 py-4 font-semibold text-center text-red-600">월 렌트 불가능</td>
                      <td className="px-6 py-4 text-center text-gray-400">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 문의 CTA */}
          <div className="mt-16 text-center">
            <div className="p-8 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl">
              <Calendar className="mx-auto mb-4 w-12 h-12" />
              <h3 className="mb-4 text-2xl font-bold">7일 이상 장기 렌트 문의</h3>
              <p className="mb-6 text-blue-100">장기 렌트 시 더욱 합리적인 가격으로 이용하실 수 있습니다.</p>
              <div className="flex flex-col gap-4 justify-center sm:flex-row">
                <a
                  href="tel:032-876-8282"
                  className="px-8 py-3 font-semibold text-blue-600 bg-white rounded-lg transition-colors hover:bg-gray-100"
                >
                  📞 032-876-8282
                </a>
                <a
                  href="#"
                  className="px-8 py-3 font-semibold text-white bg-blue-500 rounded-lg border-2 border-white transition-colors hover:bg-blue-400"
                >
                  💬 카카오톡 상담
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
