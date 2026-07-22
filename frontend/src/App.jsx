import React from 'react'
import Hero from './components/Hero'
import Calculator from './components/Calculator'
import WhyChooseUs from './components/WhyChooseUs'
import SavingTips from './components/SavingTips'
import HowToUse from './components/HowToUse'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Hero />
      <Calculator />
      <WhyChooseUs />
      <SavingTips />
      <HowToUse />
      <Faq />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App