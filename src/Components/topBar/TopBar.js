import React from 'react'
import  { Link } from "react-router-dom"

const TopBar = () => {
    return (
        <div className="navbar">
            <Link className="Icon"></Link>
            <h1>
                <span>I</span>greja <span>B</span>atista <span>C</span>aminho das
                <span>Á</span>rvores
            </h1>
        </div>
    )
}

export default TopBar
