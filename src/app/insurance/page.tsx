'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield, AlertCircle, Ban, Info } from 'lucide-react'

export default function InsurancePage() {
  return (
    <main>
      <Header />
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* 헤더 섹션 */}
          <div className="mb-12 text-center">
            <div className="flex justify-center mb-4">
              <Shield className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">보험안내</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <strong>(주) 차렌터카</strong>는 대여 고객의 사고 발생 시 보험 및 보상 범위안에서<br />
              고객 보호를 위해 최선을 다할 것을 약속드립니다.
            </p>
          </div>

          {/* 종합보험 보장 안내 */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">종합보험 보장 안내</h2>
            </div>

            <div className="mb-8 p-6 bg-blue-50 rounded-xl">
              <p className="text-gray-700 leading-relaxed">
                차렌터카는 <strong>전 차량은 자동차 종합보험(대인, 대물, 자손)에 가입</strong>되어있으며,
                추가로 등록한 제2운전자까지 보험/보상에 포함됩니다.<br />
                <span className="text-red-600 font-semibold">단, 계약서상 등록되지 않은 운전자의 경우, 종합보험 및 자차자손해면책제도의 보험혜택을 받으실 수 없습니다.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white shadow-md">
                <h3 className="text-lg font-semibold mb-2">대인</h3>
                <p className="text-3xl font-bold">무한</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white shadow-md">
                <h3 className="text-lg font-semibold mb-2">대물</h3>
                <p className="text-3xl font-bold">3천만원</p>
                <p className="text-sm opacity-90">최대</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl text-white shadow-md">
                <h3 className="text-lg font-semibold mb-2">자손</h3>
                <p className="text-3xl font-bold">1천5백만원</p>
                <p className="text-sm opacity-90">최대</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl text-white shadow-md">
                <h3 className="text-lg font-semibold mb-2">자차</h3>
                <p className="text-3xl font-bold">1천만원</p>
                <p className="text-sm opacity-90">최대</p>
              </div>
            </div>
          </section>

          {/* 보험 처리 시 면책금 안내 */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">보험 처리 시 면책금 안내</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg text-center border-2 border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">대인</h3>
                <p className="text-2xl font-bold text-gray-900">50만원</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center border-2 border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">대물</h3>
                <p className="text-2xl font-bold text-gray-900">50만원</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center border-2 border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">자손</h3>
                <p className="text-2xl font-bold text-gray-900">50만원</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center border-2 border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">자차</h3>
                <p className="text-2xl font-bold text-gray-900">50만원</p>
              </div>
            </div>

            <div className="p-6 bg-green-50 rounded-xl border-l-4 border-green-500">
              <p className="text-gray-700 font-medium">
                차량 사고 발생 시 <strong className="text-green-700">면책금만 내시면</strong> 수리비, 치료비 상관없이 보장범위 내에서 처리를 받을 수 있습니다.
              </p>
            </div>
          </section>

          {/* 휴차보상료 */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl font-bold text-gray-900">휴차보상료</h2>
            </div>

            <div className="p-6 bg-orange-50 rounded-xl border-l-4 border-orange-500">
              <p className="text-gray-700 text-lg">
                차량 사고로 인해 수리기간 동안 차량이 휴차할 경우 <strong className="text-orange-700">정상 요금의 50%</strong>가 청구됩니다.
              </p>
            </div>
          </section>

          {/* 면책제도 적용 불가사항 */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Ban className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl font-bold text-gray-900">면책제도 적용 불가사항 (보험 면책 사항)</h2>
            </div>

            <div className="p-6 bg-red-50 rounded-xl mb-6">
              <p className="text-red-800 font-semibold mb-4">다음의 경우 보험 혜택을 받으실 수 없습니다:</p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">①</span>
                  <span className="text-gray-700 pt-0.5">임차인 고의로 인한 손해</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">②</span>
                  <span className="text-gray-700 pt-0.5">음주운전 및 약물 중독으로 인한 사고</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">③</span>
                  <span className="text-gray-700 pt-0.5">임차인(계약자)외 운전중 사고</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">④</span>
                  <span className="text-gray-700 pt-0.5">무면허 / 면허의 효력정지 기간 중 사고</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">⑤</span>
                  <span className="text-gray-700 pt-0.5">천재지변에 의한 손해 및 사고</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">⑥</span>
                  <span className="text-gray-700 pt-0.5">자동차를 시험용/경기용 으로 사용하던중 발생한 사고</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">⑦</span>
                  <span className="text-gray-700 pt-0.5">범죄를 목적으로 차량 사용 중 발생한 사고</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">⑧</span>
                  <span className="text-gray-700 pt-0.5">임차인 부주의로 인한 차량도난 중 발생한 사고</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">⑨</span>
                  <span className="text-gray-700 pt-0.5">사전 승인 없이 운행을 했거나 대여료 체납이후 발생한 사고</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">⑩</span>
                  <span className="text-gray-700 pt-0.5">그외 계약 위반으로 발생한 사고</span>
                </li>
              </ul>
            </div>

            {/* 유의사항 */}
            <div className="space-y-3 p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">유의사항</h3>
              <p className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>고객의 귀책으로 인한 사고 발생 시 차량상태에 따라 계약이 해지될 수 있습니다.</span>
              </p>
              <p className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>면책적용은 1회에 한합니다.</span>
              </p>
              <p className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>천재지변(태풍 혹은 폭설등)발생 시 체인, 견인, 차량회수/반납등의 출동요청은 안전상 불가할 수 있습니다.</span>
              </p>
            </div>
          </section>

          {/* CTA 섹션 */}
          <div className="mt-12 text-center">
            <div className="p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">보험 관련 문의사항이 있으신가요?</h3>
              <p className="mb-6 text-blue-100">전문 상담사가 친절하게 안내해드립니다.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:032-876-8282"
                  className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  📞 전화 상담하기
                </a>
                <a
                  href="#"
                  className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors border-2 border-white"
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

