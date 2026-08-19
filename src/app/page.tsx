import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoryHighlight from "../components/CategoryHighlight";
import BrandStoryTeaser from "../components/BrandStoryTeaser";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar cartCount={0} />
      <HeroSection />
      <FeaturedProducts />
      <CategoryHighlight />
      <BrandStoryTeaser />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
