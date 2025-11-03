'use client'

import { useState, Suspense } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import EventBanner from '@/components/EventBanner'
import VehicleGallery from '@/components/VehicleGallery'
import EventPromotion from '@/components/EventPromotion'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import About from '@/components/About'
import PromotionPopup from '@/components/PromotionPopup'

export default function Home() {
  const [showRoulette, setShowRoulette] = useState(false);

  return (
    <main>
      <Header />
      <Suspense fallback={<div className="text-center py-8">로딩 중...</div>}>
        <Hero />
      </Suspense>
      <EventBanner />
      <Suspense fallback={<div className="text-center py-8">차량 로딩 중...</div>}>
        <VehicleGallery />
      </Suspense>
      <EventPromotion showRoulette={showRoulette} setShowRoulette={setShowRoulette} />
      {/* <Features /> */}
      {/* <About /> */}
      <Footer />

      {/* 프로모션 팝업 */}
      <PromotionPopup onOpenRoulette={() => setShowRoulette(true)} />
    </main>
  )
}

