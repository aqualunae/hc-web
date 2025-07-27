import React from 'react'
import { Link } from 'react-router'

const Header = () => {
    return (
        <nav id="header">
            <img id="logo" src="/assets/icon-large.png" />
            <Link to="/"><h1 id="header-title">Hallowed Crossing</h1></Link>
            <div id="hamburger">
                <img id="hamburger-symbol" src="null" />
            </div>
        </nav>
    )
}

export default Header