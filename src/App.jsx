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
import { Route, Router, Routes } from "react-router";
import Home from "./pages/Home";

import Custom404 from "./pages/not-found";
import SingleFeet from "./pages/fleet/[id]/page";
import Fleet from "./pages/fleet/page";
import SingleBlog from "./pages/blog/[id]/page";
import Blogs from "./pages/jamaica/blog/page";
import Service from "./pages/services/page";
import About from "./pages/jamaica/about/page";
import HelpCenter from "./pages/jamaica/help-center/page";
import Destinations from "./pages/jamaica/destinations/page";
import Terms from "./pages/jamaica/terms/page";
import ContactSection from "./pages/jamaica/contact-us/page";
import Login from "./pages/booking/login/page";
import CarClass from "./pages/booking/car-class/page";
import CarOptions from "./pages/booking/car-options/page";
import Extras from "./pages/booking/extras/page";
import PassengerInfo from "./pages/booking/passenger-info/page";
import CheckoutConfirm from "./pages/booking/checkout-confirm/page";
import Checkout from "./pages/booking/checkout/page";
import TourHome from "./pages/jamaica/home/page";
import ToursList from "./pages/jamaica/tours-list/page";
import SingleTour from "./pages/jamaica/tours-list/[id]/page";
import TourMap from "./pages/jamaica/tour-map/page";
import CheckoutTours from "./pages/booking/checkout-tours/page";

function App() {
  return (
    <div className="layout-theme">
      <Loader />
      <PickupDate />
      <PickupTime />
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/fleet" element={<Fleet />}></Route>
        <Route
          exact
          path="/fleet/single-fleet"
          element={<SingleFeet />}
        ></Route>
        <Route exact path="/blog" element={<Blogs />}></Route>
        <Route exact path="/blog/:id" element={<SingleBlog />}></Route>
        <Route exact path="/services" element={<Service />}></Route>
        <Route exact path="/jamaica/contact" element={<Service />}></Route>
        <Route
          exact
          path="/jamaica/help-center"
          element={<HelpCenter />}
        ></Route>
        <Route
          exact
          path="/jamaica/destinations"
          element={<Destinations />}
        ></Route>
        <Route exact path="/jamaica/about" element={<About />}></Route>
        <Route
          exact
          path="/jamaica/contact-us"
          element={<ContactSection />}
        ></Route>
        <Route exact path="/jamaica/terms" element={<Terms />}></Route>
        <Route exact path="/booking/login" element={<Login />}></Route>
        <Route exact path="/booking/car-class" element={<CarClass />}></Route>
        <Route
          exact
          path="/booking/car-options"
          element={<CarOptions />}
        ></Route>
        <Route exact path="/booking/login" element={<Login />}></Route>
        <Route exact path="/booking/extras" element={<Extras />}></Route>

        <Route
          exact
          path="/booking/passenger-info"
          element={<PassengerInfo />}
        ></Route>
        <Route
          exact
          path="/booking/checkout-confirm"
          element={<CheckoutConfirm />}
        ></Route>
        <Route exact path="/booking/checkout" element={<Checkout />}></Route>
        <Route exact path="/jamaica/home" element={<TourHome />}></Route>
        <Route exact path="/jamaica/tour-list" element={<ToursList />}></Route>
        <Route
          exact
          path="/jamaica/tour-detail"
          element={<SingleTour />}
        ></Route>
        <Route exact path="/jamaica/tour-map" element={<TourMap />}></Route>
        <Route
          exact
          path="/jamaica/checkout-tours"
          element={<CheckoutTours />}
        ></Route>
        {/* <Route exact path="/blogs" element={<Blog />}></Route>
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route exact path="expertise" element={<Services />}></Route>
        <Route exact path="expertise/data-ai" element={<DataAi />}></Route>
        <Route exact path="/expertise/devxops" element={<DevxOps />}></Route> */}

        <Route exact path="*" element={<Custom404 />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
