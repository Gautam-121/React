import { useState , useEffect } from "react"

const useRestarentDetail = (resId)=>{
    
    const [restarent , setRestarent] = useState(null)

    // Get data from Api
    useEffect(() => {
        getRestarantInfo()
    }, [])

    async function getRestarantInfo(){
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=${resId}&submitAction=ENTER`
        )
        const json = await data.json()
        console.log(json)
        console.log("Gautam" , json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        setRestarent(json)
    }
    //Return restarent Data
    return restarent
}

export default useRestarentDetail