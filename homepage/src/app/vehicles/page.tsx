import Header from '@/components/Header'
import VehicleGallery from '@/components/VehicleGallery'
import Footer from '@/components/Footer'

export default function VehiclesPage() {
  return (
    <main>
      <Header />
      <div className="pt-16"> {/* Header 높이만큼 padding 추가 */}
        <VehicleGallery />
      </div>
      <Footer />
    </main>
  )
}

