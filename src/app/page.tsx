import Header from "@/components/header/header";
import Main from "@/components/main-body/main";
import Advert from "@/components/advert/advert";
import About from "@/components/about/about";
export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Advert />
      <About />
    </main>
  );
}
