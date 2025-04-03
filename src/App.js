import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import Quote from "./sections/Quote";
import React, { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import ProcessorSection from "./sections/ProcessorSection";
import BatterySection from "./sections/BatterySection";
import CameraSection from "./sections/CameraSection";
import PricingSection from "./sections/PricingSection";
import { ColorContextProvider } from "./context/ColorContext";
import ScrollSection from "./sections/ScrollSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreOrderForm from "./pages/PreorderForm/Form";
import Dashboard from "./pages/AdminDashboard/Dashboard";
import Signup from "./pages/Registration/Signup";
import Login from "./pages/Registration/Login";

function App() {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleScroll = () => {
    console.log("Scroll detected, showing full content");
    setShowFullContent(true);
  };
  console.log("Current showFullContent:", showFullContent);


  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={!showFullContent ? (
            <ScrollSection onArrowClick={handleScroll} />
          ) : (
            <>
              <Quote />
              <PhoneModel />
              <HeroSection />
              <DesignSection />
              <DisplaySection />
              <ProcessorSection />
              <BatterySection />
              <ColorContextProvider>
                <CameraSection />
                <PricingSection />
              </ColorContextProvider>
            </>
          )}
        />
        <Route path="/form" element={<PreOrderForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
