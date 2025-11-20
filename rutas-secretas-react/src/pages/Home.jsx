import Navbar from "..components/Navbar";
import Hero from "..components/Hero";
import FeaturedCards from "..components/FeaturedCards";
import Nosotros from "..components/Nosotros";
import BlogHome from "..components/BlogHome";
import Footer from "..components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCards />
      <Nosotros />
      <BlogHome />
      <Footer />
    </>
  );
}