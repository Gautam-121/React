export function filterData(restarents, searchInput) {
    const filterResList = restarents.filter(restarent => (
        restarent?.info?.name?.toLocaleLowerCase().includes(searchInput?.toLocaleLowerCase())
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
                restarent?.info?.avgRating >= 4
            ))
        }

        if(element.active && element.name === "Rating : High To Low"){
            updateRes.sort((a, b) => {
                return b?.info?.avgRating - a?.info?.avgRating
            })
        }

        if(element.active && element.name === "Delivery Time"){
            updateRes.sort((a, b) => {
                return a?.info?.deliveryTime - b?.info?.deliveryTime
            })
        }



        if(element.active && element.name === "Cost: Low To High"){
            updateRes.sort((a, b) => {

                if (Number(a?.info?.costForTwo.slice(1 ,4)) == Number(b?.info?.costForTwo.slice(1 ,4))) { 
                    return a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime
                }
                else {
                    return Number(a?.info?.costForTwo.slice(1 ,4)) - Number(b?.info?.costForTwo.slice(1 ,4))
                }
            })
        }

        if(element.active && element.name === "Cost: High To Low"){
            updateRes.sort((a, b) => {

                if (Number(a?.info?.costForTwo.slice(1 ,4)) == Number(b?.info?.costForTwo.slice(1 ,4))) {
                    return a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime
                }
                else {
                    return Number(b?.info?.costForTwo.slice(1 ,4)) - Number(a?.info?.costForTwo.slice(1 ,4))
                }
            })
        }
    })

    setSearchRestarent(updateRes)
    setItemSelect(itemSelect)
}

