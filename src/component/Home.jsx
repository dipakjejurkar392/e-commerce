import React from 'react'
import Slider from './Slider'
import Product from './Product'
import Navbar from './Navbar'
import Footer from './Footer'
import HeroSection from './HeroSection'
import BrandSlider from './BradSlider'
import TrendzSection from './TrendzSection'
import CategoryIcons from './CategoryIcons'

const Home = () => {
    return (
        <div>
            <br /><br /><br />
            <Navbar />
            <Slider />
            <br />
            <CategoryIcons/>
            <Product />
            <HeroSection/>
            <BrandSlider/>
            <TrendzSection/>
            <Footer/>
        </div>
    )
}

export default Home
