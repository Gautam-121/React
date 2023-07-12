import { useRouteError } from "react-router-dom"
import "./error.css"

const Error = () => {

    const err = useRouteError();
    console.log(err)
    return (

        <div className="error-container">
            <h1 className="error-code">{err.status}</h1>
            <p className="error-message">{err.statusText}</p>
            <button className="back-button">
                <a href="/">Go Back</a>
            </button>
        </div>
    )
}

export default Error