import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidAPI";

export const AUthContext = createContext();

export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [value, setValue] = useState("New")


    useEffect(() => {
        fetchAllData(value)
    }, [value])

    const fetchAllData = (query) => {
        setLoading(true)
        fetchData(`search/?q=${query}`).then(({contents}) => {
            setData(contents)
            setLoading(false)
        })
    }
    return (
        <AUthContext.Provider value={{ loading, data,value, setValue }}>
            {children}
        </AUthContext.Provider>
    )
}

export const useAuth = () => useContext(AUthContext)