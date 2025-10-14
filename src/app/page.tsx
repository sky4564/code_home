import Header from '@/components/Header'
import Hero from '@/components/Hero'
import EventBanner from '@/components/EventBanner'
import VehicleGallery from '@/components/VehicleGallery'
import EventPromotion from '@/components/EventPromotion'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import About from '@/components/About'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <EventBanner />
      <VehicleGallery />
      <EventPromotion />
      {/* <Features /> */}
      {/* <About /> */}
      <Footer />
    </main>
  )
}

