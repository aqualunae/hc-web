import React from 'react'
import { Link } from 'react-router'

const Header = () => {
    return (
        <nav id="header">
            <img id="logo" src="/assets/icon-large.png" />
            <Link to="/" id="header-title"><h1>Hallowed Crossing</h1></Link>
            {/* <div id="hamburger">
                <img id="hamburger-symbol" src="/assets/hamburger-menu.png" />
            </div> */}
        </nav>
    )
}

export default Header