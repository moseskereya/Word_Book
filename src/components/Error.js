import React from 'react'
import Svg from "./images/icon.svg"
import {Link} from "react-router-dom"
const Error = () => {
    return (
        <div className="error_page">
            <img className="svg" src={Svg} alt="Svg"/>
            <h1>404</h1>
            <p>Sorry, The Page you are lookig for is not Working</p>
            <Link to="/" className="btn_error">Back Home</Link>
        </div>
    )
}

export default Error
