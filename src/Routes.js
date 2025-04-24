import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import UserPage from "./components/UserPages/UserPage";
import Home from "./components/LandingPage/Home";
import AboutUs from "./components/AboutUs/AboutUs";

import HomeNav from "./components/LandingPage/HomeNav";
import Footer from "./components/LandingPage/Footer";
import { useEffect, useState } from "react";
import ContactUs from "./components/ContactUs/ContactUs";

export const Routes = () => {
  const [loading, setLoading] = useState(false);



  // useEffect(() => {
  //   window?.addEventListener("load", setLoading(false));
  //   return window?.removeEventListener("load", setLoading(false));
  // }, []);

  return (
    <Router>
      {loading ? (
        <div className=" absolute w-screen h-screen flex flex-row items-center justify-center text-burntsienna bg-champagnepink " >
          <div className=" animate-pulse text-4xl lg:text-8xl font-adamina " >Vaagmiee</div>
        </div>
      ) : (
        <>
          <HomeNav />
          <div className=" pt-[89px] lg:pt-[114px] 2xl:h-[134px] " />
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/me" element={<UserPage />} />
          </Switch>
          <Footer />
        </>
      )}
    </Router>
  );
};
