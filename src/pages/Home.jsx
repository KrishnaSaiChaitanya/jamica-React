import Services from "../components/home/services";
import InfoBox from "../components/home/infoBox";
import Choose from "../components/home/choose";
import Blog from "../components/home/blog";
import AboutBox from "../components/home/aboutBox";
import Hero from "../components/home/hero";
import Fleet2 from "../components/home/fleet2";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Fleet2 />
      <InfoBox />
      <AboutBox />
      <Choose />
      <Blog />
    </div>
  );
}
