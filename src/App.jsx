import React from 'react'
import { useState } from 'react'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Features from './Components/Feature/Features'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Components/Shop/Shop'
import Posts from './Components/Blogs/Blog'
import Products from './Components/Products/Products'

import SingleBlog from './Components/Blogs/SingleBlog';
import SingleProduct from './Components/Products/SingleProduct'

const App = () => {
  let HeroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ]

  const [HeroCount, SetHeroCount]=useState(2);
  const [PlayStatus, SetPlayStatus]=useState(false);
  
  return (
    <div>
        <Background PlayStatus={PlayStatus} HeroCount={HeroCount} />
        <Router>
            <Navbar />
            <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Hero 
                    SetPlayStatus={SetPlayStatus}
                    HeroData={HeroData[HeroCount]}
                    HeroCount={HeroCount}
                    SetHeroCount={SetHeroCount}
                    PlayStatus={PlayStatus}
                  />
                  <Features />
                  <Testimonials />
                  <Posts />
                  <Contact />
                </>
              } 
            />

              <Route path="/feature" element={<Features />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/blog" element={<Posts />} />

              <Route path="/blog/:id" element={<SingleBlog />} />
              <Route path="/product" element={<Products />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              
            </Routes>
        </Router>
        <Footer />
    </div>
  )
}

export default App
