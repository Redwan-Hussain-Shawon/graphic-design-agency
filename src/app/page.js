import Image from "next/image";
import Hero from "./_components/Hero";
import TopSearch from "./_components/TopSearch";
import ServiceCategory from "./_components/ServiceCategory";
import ProductShow from "./_components/ProductShow";

export default function Home() {
  return (
    <>  
    <TopSearch />
      <Hero />
      <ServiceCategory />
      <ProductShow />
    </>

  );
}
