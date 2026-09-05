import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import MainLayout from "./layouts/MainLayout";
import Services from "./Services";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Privacy from "./Privacy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy" element={<Privacy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
