export async function sendData(user , methods , url) {

    const data = await fetch(`http://localhost:4000/api/v1/${url}`, {
        method:  methods,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
    
    const json = await data.json()

    return json
}

