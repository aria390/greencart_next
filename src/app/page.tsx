import BestSellers from "@/components-main/BestSellers";
import Categories from "@/components-main/Categories";
import FastestDelivery from "@/components-main/FastestDelivery";
import Footer from "@/components-main/Footer";
import Header from "@/components-main/Header";
import NeverMissDeal from "@/components-main/NeverMissDeal";
import ShopNow from "@/components-main/ShopNow";

export default function Home() {
  return (
    <section>
      <Header />
      <ShopNow />
      <Categories />
      <BestSellers />
      <FastestDelivery />
      <NeverMissDeal />
      <Footer/>
    </section>
  );
}
