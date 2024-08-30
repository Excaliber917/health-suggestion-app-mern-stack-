import axios from "axios"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

function useLogout() {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {user, setUser } = useAuthContext()
    const logout = async () => {
        setLoading(true)
        if(!user)
            return
        try {
            await axios.post('https://fithealth-aea5.onrender.com/api/auth/logout')
            localStorage.removeItem("Healthuser")
            setUser(null)
            navigate("/")

            toast.success("Logged out")


        } catch (error) {
            toast.error(error)

        }
        finally {
            setLoading(false)
        }
    }

    return { loading, logout }
}

export default useLogout
