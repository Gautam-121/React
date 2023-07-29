import { useState , useEffect } from "react"

const useRestarent = ()=>{

    const [restarant , setRestarent] = useState([])

    useEffect(() => {
        getRestarents()
    }, [])

    async function getRestarents() {

        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type"
        );
        const json = await data.json()
        setRestarent(json?.data?.cards?.[2].card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return restarant

}

export default useRestarent




























