import React from 'react'

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({title}) => {
    return (
        <header>
            <h1 className="app-title"> {title} </h1>
            <a href="/"> <FontAwesomeIcon icon={faHeart} size="2x" style={{ color: 'white' }}  /> </a>
        </header>
    )
}

export default Header
