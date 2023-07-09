import LatestProducts from "./latestProducts";
import MobileShowcase from "./mobilShowCase";
import BestSellerProducts from "./bestSellerProducts";
import FeaturedProducts from "./featuredProducts";
import CtaSearch from "./ctaSearch";
import Features from "./features";
import Hero from "./hero";
import ProductsContainer from "./../../components/products-container/index";

const MainPage = () => {
  return (
    <>
      <Hero />
      <MobileShowcase />
      <ProductsContainer />
      <LatestProducts />
      <BestSellerProducts />
      <FeaturedProducts />
      <CtaSearch />
      <Features />
    </>
  );
};

export default MainPage;
