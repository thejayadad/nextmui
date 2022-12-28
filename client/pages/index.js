import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import BottomFooter from '../components/BottomFooter'

const Home = () => {
  return (
   <div>
    <Navbar />
    <HeroBanner />
    <Main />
    <Contact />
    <Footer />
    <BottomFooter />
   </div>
  )
}

export default Home