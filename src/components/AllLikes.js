import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const AllLikes = ({ allLikes }) => {
  return (
    <div className="all-history">
      <h1 className="all-title">Your like history:</h1>
      {allLikes.length >= 1 ? (
        allLikes.map((like) => <img key={like.id} src={like.smallPicture} alt={like.name} />)
      ) : (
        <div className="last-card err-card err-card-all">
          <ErrorOutlineIcon className="err-icon" style={{ fontSize: 120 }} />
          <h3 className="card-title">No likes yet.</h3>
        </div>
      )}
    </div>
  );
};

export default AllLikes;
