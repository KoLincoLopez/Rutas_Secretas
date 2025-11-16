import React from 'react';
import HeroSlider from '../components/HeroSlider';
import FeaturedTours from '../components/FeaturedTours';
import Nosotros from './Nosotros'; 
import BlogPreview from './Blogs';
import '../styles/Index.css';


function Home() {
    return (
        <>
            {/* Slider principal */}
            <HeroSlider />

            {/* Paquetes destacados */}
            <FeaturedTours />

            {/* Sección Nosotros */}
            <Nosotros />

            {/* Vista previa de blogs */}
            <BlogPreview />
        </>
    );
}

export default Home;
