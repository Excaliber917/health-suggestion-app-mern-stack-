import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import {Toaster} from 'react-hot-toast'
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import PhysicalDetails from "./pages/PhysicalDetails"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/physicaldetails" element={<PhysicalDetails />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Toaster/>

      </BrowserRouter>

    </>
  )
}

export default App
