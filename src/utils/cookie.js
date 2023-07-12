
export const setCookie =  (cookieName , cookieValue)=>{
    document.cookie = `${cookieName}=${cookieValue}; expires=${new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)}; path=/`;
}

export const getCookie = ()=>{
    console.log(document.cookie)
}

export const removeCookie = (cookieName)=>{
    document.cookie = `${cookieName}=${null}; expires=${new Date(Date.now() - 1*24*60*60*1000)} path  :"/`
}



export default setCookie