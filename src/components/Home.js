import React from 'react'
import TopHeader from './TopHeader'
import Navigation from './Navigation'
import Header from './Header'
import About from './About'
import Gallery from './Gallery'
import Pricing from './Pricing'
import Getintouh from './Getintouh'
import Faq from './Faq'
import Footer from './Footer' 

function Home() {
  return (
          <>
              <TopHeader/>
              <Navigation/>
              <Header/>
              <About/>
              <Gallery/>
              <Pricing/>
              <Getintouh/> 
              <Faq/>
              <Footer/>
          </>
  )
}

export default Home