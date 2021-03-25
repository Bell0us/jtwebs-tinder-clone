import React from 'react'
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';

const Header = ({title}) => {
    return (
        <header>
            <IconButton  size='medium'>
                <PersonIcon style={{ fontSize: 35}}/>
            </IconButton>
            <h1 className="app-title"> {title} </h1>
            <IconButton  size='medium'>
                <FavoriteIcon style={{ fontSize: 30}}/>
            </IconButton>
        </header>
    )
}

export default Header
