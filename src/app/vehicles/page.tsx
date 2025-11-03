import { Suspense } from 'react'
import Header from '@/components/Header'
import VehicleGallery from '@/components/VehicleGallery'
import Footer from '@/components/Footer'

export default function VehiclesPage() {
  return (
    <main>
      <Header />
      <div className="pt-16"> {/* Header 높이만큼 padding 추가 */}
        <Suspense fallback={<div className="text-center py-8">로딩 중...</div>}>
          <VehicleGallery />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}

