import { useEffect, useState } from "react";

export const useFetch = (url) =>{

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((data)=>setData(data))
            .finally(()=> setLoading(false))
    }, [])
    return data

}