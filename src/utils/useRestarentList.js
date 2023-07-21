import { useState , useEffect } from "react"

const useRestarent = ()=>{

    const [restarant , setRestarent] = useState([])

    useEffect(() => {
        getRestarents()
    }, [])

    async function getRestarents() {

        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1737143&lng=79.13068659999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json()
        setRestarent(json?.data?.cards?.[2].data?.data?.cards)
    }

    return restarant

}

export default useRestarent