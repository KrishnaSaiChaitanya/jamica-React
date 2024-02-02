import Services from "./components/home/services";
import InfoBox from "./components/home/infoBox";
import Choose from "./components/home/choose";
import Blog from "./components/home/blog";
import AboutBox from "./components/home/aboutBox";
import Hero from "./components/home/hero";
import Fleet2 from "./components/home/fleet2";

import Navbar from "./components/navbarJamaica";
import Footer from "./components/footer";
import Loader from "./components/loader";
import PickupDate from "./components/booking/pickupDate";
import PickupTime from "./components/booking/pickupTime";

function App() {
  return (
    <div className="layout-theme">
      <Loader />
      <PickupDate />
      <PickupTime />
      <Navbar />
      <Hero />
      <Services />
      <Fleet2 />
      <InfoBox />
      <AboutBox />
      <Choose />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
