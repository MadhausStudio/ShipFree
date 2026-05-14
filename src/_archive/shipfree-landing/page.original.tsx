import Navbar from './navbar'
import Hero from './hero'
import Features from './features'
import Pricing from './pricing'
import Testimonials from './testimonials'
import FAQ from './faq'
import CTA from './cta'
import Footer from './footer'
import { GridLayout, SectionDivider } from './grid-layout'

export default function Page() {
  return (
    <GridLayout>
      <Navbar />
      <Hero />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <Pricing />
      <SectionDivider />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </GridLayout>
  )
}
