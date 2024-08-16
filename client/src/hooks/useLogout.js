import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

function useLogout() {

    const [loading, setLoading] = useState(false)
    const { setUser } = useAuthContext()
    const logout = async () => {
        setLoading(true)
        try {
            await axios.post('api/auth/logout')
            localStorage.removeItem("Healthuser")
            setUser(null)
            toast.success("Loged out")


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