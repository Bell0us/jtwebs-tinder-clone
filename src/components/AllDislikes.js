import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const AllDislikes = ({ allDislikes }) => {
  return (
    <div className="all-history">
      <h1 className="all-title">Your dislike history:</h1>
      {allDislikes.length >= 1 ? (
        allDislikes.map((dislike) => (
          <img key={dislike.id} src={dislike.smallPicture} alt={dislike.name} />
        ))
      ) : (
        <div className="last-card err-card err-card-all">
          <ErrorOutlineIcon className="err-icon" style={{ fontSize: 120 }} />
          <h3 className="card-title">No dislikes yet.</h3>
        </div>
      )}
    </div>
  );
};

export default AllDislikes;
