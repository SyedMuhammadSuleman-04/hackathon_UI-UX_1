import Fonts from "@/components/Fonts";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Products from "./Products/page";
import Top_sell from "./Products/sell";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <HeroSection />
      <Fonts />
      <Products />
      <Top_sell />
    </div>
  );
}
