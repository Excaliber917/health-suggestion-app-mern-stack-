import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Toaster } from 'react-hot-toast'
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import PhysicalDetails from "./pages/PhysicalDetails"
import { useAuthContext } from "./context/AuthContext"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {

  const { user } = useAuthContext()

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/physicaldetails" element={<PhysicalDetails />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Toaster />

    </BrowserRouter >

    </>
  )
}

export default App
