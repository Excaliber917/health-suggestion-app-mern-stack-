import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Profile from "./components/Profile"
import Home from "./components/Home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
