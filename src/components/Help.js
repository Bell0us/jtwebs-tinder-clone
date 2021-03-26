import React from 'react'
import TouchAppIcon from '@material-ui/icons/TouchApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import HistoryIcon from '@material-ui/icons/History';

const Help = () => {
    return (
        <div className="help">
            <div className="help-header">
                <h2 className="help-heading">Informations</h2>
                <h6 className="help-subheading">Tinder clone app made by JTwebs</h6>
            </div>
            <div className="tiles">
                <dl className="swipe help-tile">
                    <dt className="help-title">
                        <TouchAppIcon />  Gestures
                    </dt>
                    <dd className="help-content">
                        <ChevronLeftIcon className='move-down lighten' />  Swipe left on card to mark as liked <br/>
                        <ChevronRightIcon className='move-down lighten'/>  Swipe right on card to mark as disliked
                    </dd>
                </dl>
                <dl className="brightness help-tile">
                    <dt className="help-title">
                        <BrightnessMediumIcon className='move-down'/>  Dark / Ligh mode
                    </dt>
                    <dd className="help-content">
                        <WbSunnyIcon className='move-down lighten pad'/>  Via this button on header you can change to light mode <br/>
                        <Brightness3Icon className='move-down lighten pad'/>  Via this button on header you can change to dark mode
                    </dd>
                </dl>
                <dl className="action-history help-tile">
                    <dt className="help-title">
                        <HistoryIcon className='move-down'/>  Action history
                    </dt>
                    <dd className="help-content">
                        <FavoriteIcon className='move-down lighten pad'/>  Via this button on home page u can view your history
                    </dd>
                </dl>
            </div>
        </div>
    )
}

export default Help
