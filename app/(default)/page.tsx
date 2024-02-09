export const metadata = {
  title: 'Emilio-Design App',
  description: 'Diseño y desarrollo EC',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import { ContactoFlotante } from '@/components/whatsapp'

export default function Home() {
  return (
    <>
      <Hero />
     
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
