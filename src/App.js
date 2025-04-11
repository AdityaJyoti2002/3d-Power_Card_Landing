import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import Quote from "./sections/Quote";
import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import ProcessorSection from "./sections/ProcessorSection";
import BatterySection from "./sections/BatterySection";
import PricingSection from "./sections/PricingSection";
import { ColorContextProvider } from "./context/ColorContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreOrderForm from "./pages/PreorderForm/Form";
import Dashboard from "./pages/AdminDashboard/Dashboard";
import Signup from "./pages/Registration/Signup";
import Login from "./pages/Registration/Login";
import CameraSection1 from "./sections/CameraSection1";
import Footer from "./components/Footer/footer";
import "./index.css"
import Narbar from "./components/Navbar/narbar";

function App() {



  return (
    <Router>
      <GlobalStyle />
      
      <Routes>
        <Route
          path="/"
          element={ (
            <>
            <Narbar/>
              <Quote />
              <PhoneModel />
              <HeroSection />
              <DesignSection />
              <DisplaySection />
              <ProcessorSection />
              <BatterySection />
              <ColorContextProvider>
                {/* <CameraSection /> */}
                <CameraSection1/>
                <PricingSection />
              </ColorContextProvider>
              <Footer/>
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
