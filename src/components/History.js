import React from 'react'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const History = ({ liked, disliked }) => {
    return (
        <div className="history-page">
            <h1 className="history-title">
                Your last actions:
            </h1>
            <div className="last-action">
                <div className="last-card-container">                    
                    <h3 className="last-title">Your recent like:</h3>
                    {!liked ? 
                    <div className="last-card err-card">
                        <ErrorOutlineIcon className="err-icon" style={{ fontSize: 120}}/>
                        <h3 className="card-title">No likes yet.</h3>
                    </div> : 
                    <div className="last-card last-liked" style={{backgroundImage: `url(${liked.picture})`}}>
                        <p className="card-title">
                            {liked.name}
                        </p>
                    </div>}
                </div>
                <div className="last-card-container">
                    <h3 className="last-title">Your recent dislike:</h3>
                    {!disliked ? 
                    <div className="last-card err-card">
                        <ErrorOutlineIcon className="err-icon" style={{ fontSize: 120}} />
                        <h3 className="card-title">No dislikes yet.</h3>
                    </div> : 
                    <div className="last-card last-disliked" style={{backgroundImage: `url(${disliked.picture})`}}>
                        <p className="card-title">
                            {disliked.name}
                        </p>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default History

