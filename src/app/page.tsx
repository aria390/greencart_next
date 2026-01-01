import BestSellers from "@/components-main/BestSellers";
import Categories from "@/components-main/Categories";
import FastestDelivery from "@/components-main/FastestDelivery";

import NeverMissDeal from "@/components-main/NeverMissDeal";
import ShopNow from "@/components-main/ShopNow";

export default function Home() {
  return (
    <section>
      <ShopNow />
      <Categories />
      <BestSellers />
      <FastestDelivery />
      <NeverMissDeal />
    </section>
  );
}
