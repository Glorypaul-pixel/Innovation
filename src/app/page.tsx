import Header from "@/components/header/header";
import Main from "@/components/main-body/main";
import Advert from "@/components/advert/advert";
import About from "@/components/about/about";
import Service from "@/components/service/service";
import Testimonial from "@/components/testimonial/testimonial";
import Deal from "@/components/deal/deal";
export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Advert />
      <About />
      <Service />
      <Testimonial />
      <Deal />
    </main>
  );
}
