export const validation = (value) => {

    const error = {}

    const email_pattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/

    const password_pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&])[a-zA-Z0-9@#$%&]{8,15}$/

    if(value?.name?.length == 0){
        error.name = "Name shuld not empty"
    }
    else{
        error.name = ""
    }

    if(value?.email?.length == 0){
        error.email = "Email shuld not empty"
    }
    else if(!email_pattern?.test(value?.email)){
        error.email = "Please Enter Valid Email"
    }
    else{
        error.email = ""
    }

    if(value?.password?.length == 0){
        error.password = "password shuld not empty"
    }
    else if(!password_pattern?.test(value?.password)){
        error.password = "Pasword is not match"
    }
    else{
        error.password = ""
    }

    return error
}

export function filterData(restarents, searchInput) {
    const filterResList = restarents.filter(restarent => (
        restarent?.data?.name?.toLocaleLowerCase().includes(searchInput?.toLocaleLowerCase())
    ))
    return filterResList
}

export function getReatingTopToBottom([...restarents]) {
    restarents.sort((a, b) => {
        return b?.data?.avgRating - a?.data?.avgRating
    })
    return restarents
}

export function getTopRatedRestarent(restarents) {
    const getTopRatedRestarent = restarents.filter(restarent => (
        restarent?.data?.avgRating >= 4
    ))
    return getTopRatedRestarent
}

export function lowToHighDeliveryTime([...restarents]) {
    restarents.sort((a, b) => {
        return a?.data?.deliveryTime - b?.data?.deliveryTime
    })
    return restarents
}

export function costLowToHigh([...restarents]) {
    restarents.sort((a, b) => {

        if (a?.data?.costForTwo == b?.data?.costForTwo) {
            return a?.data?.deliveryTime - b?.data?.deliveryTime
        }
        else {
            return a?.data?.costForTwo - b?.data?.costForTwo
        }
    })
    return restarents
}

export function costHighToLow([...restarents]) {
    restarents.sort((a, b) => {

        if (a?.data?.costForTwo == b?.data?.costForTwo) {
            return a?.data?.deliveryTime - b?.data?.deliveryTime
        }
        else {
            return b?.data?.costForTwo - a?.data?.costForTwo
        }
    })
    return restarents
}