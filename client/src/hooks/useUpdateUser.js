import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"
import axios from "axios"


export const useUpdateUser = () => {
    const [loading, setLoading] = useState(false)
    const { user, setUser } = useAuthContext()


    const updateUser = async ({ name, username, password, email, gender }) => {


        const success = UseVerifyInputs({user, name, username, password, email, gender })
        if (!success)
            return
        try {
            setLoading(true)
            const res = await axios.put(`api/user/updateuser/${user._id}`, {
                name,
                username,
                password,
                email,
                gender
            })
            localStorage.setItem("Healthuser", JSON.stringify(res.data))
            toast.success("updated successfully")
            setUser(res.data)
        } catch (error) {
            toast.error(error)

        }finally{
            setLoading(false)
        }

    }

    return { loading, updateUser }
}

function UseVerifyInputs({user, name, username, password, email, gender }) {


    if (user.name === name && user.username === username && user.password === password && user.email === email && user.gender === gender) {
        return false
    }
    return true

}