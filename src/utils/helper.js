export function filterData(restarents, searchInput) {
    const filterResList = restarents.filter(restarent => (
        restarent?.data?.name?.toLocaleLowerCase().includes(searchInput?.toLocaleLowerCase())
    ))
    return filterResList
}

export function filterResdata( name , setSearchRestarent , restarents , itemSelect , setItemSelect ){

    itemSelect.forEach(element => {
        
        if(element.name === name){
            element.active = true
        }
        else{
            element.active = false
        }
    })

    let updateRes = [...restarents]

    itemSelect.forEach(element => {

        if(element.active && element.name === "Rating4+"){
            updateRes = updateRes.filter(restarent => (
                restarent?.data?.avgRating >= 4
            ))
        }

        if(element.active && element.name === "Rating : High To Low"){
            updateRes.sort((a, b) => {
                return b?.data?.avgRating - a?.data?.avgRating
            })
        }

        if(element.active && element.name === "Delivery Time"){
            updateRes.sort((a, b) => {
                return a?.data?.deliveryTime - b?.data?.deliveryTime
            })
        }

        if(element.active && element.name === "Cost: Low To High"){
            updateRes.sort((a, b) => {

                if (a?.data?.costForTwo == b?.data?.costForTwo) {
                    return a?.data?.deliveryTime - b?.data?.deliveryTime
                }
                else {
                    return a?.data?.costForTwo - b?.data?.costForTwo
                }
            })
        }

        if(element.active && element.name === "Cost: High To Low"){
            updateRes.sort((a, b) => {

                if (a?.data?.costForTwo == b?.data?.costForTwo) {
                    return a?.data?.deliveryTime - b?.data?.deliveryTime
                }
                else {
                    return b?.data?.costForTwo - a?.data?.costForTwo
                }
            })
        }
    })

    setSearchRestarent(updateRes)
    setItemSelect(itemSelect)

    // itemSelect.forEach(element => {
    //     if(element.name === name) element.active = !element.active
    // });


    // itemSelect.forEach(element => {

    //     if(element.active && element.name === "Rating4+"){
    //         updateRes = updateRes.filter(restarent => (
    //             restarent?.data?.avgRating >= 4
    //         ))
    //     }

    //     if(element.active && element.name === "Rating : High To Low"){
    //         updateRes.sort((a, b) => {
    //             return b?.data?.avgRating - a?.data?.avgRating
    //         })
    //     }

    //     if(element.active && element.name === "Delivery Time"){
    //         updateRes.sort((a, b) => {
    //             return a?.data?.deliveryTime - b?.data?.deliveryTime
    //         })
    //     }

    //     if(element.active && element.name === "Cost: Low To High"){
    //         updateRes.sort((a, b) => {

    //             if (a?.data?.costForTwo == b?.data?.costForTwo) {
    //                 return a?.data?.deliveryTime - b?.data?.deliveryTime
    //             }
    //             else {
    //                 return a?.data?.costForTwo - b?.data?.costForTwo
    //             }
    //         })
    //     }

    //     if(element.active && element.name === "Cost: High To Low"){
    //         updateRes.sort((a, b) => {

    //             if (a?.data?.costForTwo == b?.data?.costForTwo) {
    //                 return a?.data?.deliveryTime - b?.data?.deliveryTime
    //             }
    //             else {
    //                 return b?.data?.costForTwo - a?.data?.costForTwo
    //             }
    //         })
    //     }
    // })

    


    // if(name === "Rating4+"){
        
    //     if( !filtOption.active ){
    //         updateRes = updateRes.filter(restarent => (
    //             restarent?.data?.avgRating >= 4
    //         ))
    //         filtOption.active = !filtOption.active 
    //     }
    //     filtOption.active = !filtOption.active
    //     // setSearchRestarent(getTopRatedRestarent)
    // }

    // if(name === "Rating : High To Low"){
        
    //     if(!filtOption.active){
    //         updateRes.sort((a, b) => {
    //             return b?.data?.avgRating - a?.data?.avgRating
    //         })
    //     }
    //     filtOption.active = !filtOption.active
    //     // setSearchRestarent(rest)
    // }

    // if(name === "Delivery Time"){

    //     if(!filtOption.active){
    //         updateRes.sort((a, b) => {
    //             return a?.data?.deliveryTime - b?.data?.deliveryTime
    //         })
    //     }
    //     filtOption.active = !filtOption.active

    //     // const rest = [...restarents]
    //     // updateRes.sort((a, b) => {
    //     //     return a?.data?.deliveryTime - b?.data?.deliveryTime
    //     // })
    //     // setSearchRestarent(rest)
    // }

    // if(name === "Cost: Low To High"){
        
    //     if(!filtOption.active){
    //         updateRes.sort((a, b) => {

    //             if (a?.data?.costForTwo == b?.data?.costForTwo) {
    //                 return a?.data?.deliveryTime - b?.data?.deliveryTime
    //             }
    //             else {
    //                 return a?.data?.costForTwo - b?.data?.costForTwo
    //             }
    //         })
    //     }
    //     filtOption.active = !filtOption.active

    //     // setSearchRestarent(rest)
    // }

    // if(name === "Cost: High To Low"){
        
    //     if(!filtOption.active){
    //         updateRes.sort((a, b) => {

    //             if (a?.data?.costForTwo == b?.data?.costForTwo) {
    //                 return a?.data?.deliveryTime - b?.data?.deliveryTime
    //             }
    //             else {
    //                 return b?.data?.costForTwo - a?.data?.costForTwo
    //             }
    //         })
    //     }
    //     filtOption.active = !filtOption.active
    //     // setSearchRestarent(rest)
    // }

}

