import React from 'react';

function CardProfile() {
  return (
    <div className="d-flex justify-content-around align-items-center">
      <div className="d-flex align-items-center">
        <img
          src="/images/avatar1.png"
          alt=""
          className="img-profile"
        />
        <div className="ps-5">
          <h1>Sherlin Tzu</h1>
          <h5
            style={{
              color: '#3BACB6',
            }}>
            sherlintzu@gmail.com
          </h5>
        </div>
      </div>
      <div className="d-flex gap-3">
        <div className="edit btn border-0">
          <img src="/icons/user-edit.svg" alt="img" />
        </div>
        <button className="tracking btn border-0">
          <img src="/icons/user-tracking.svg" alt="img" />
        </button>
      </div>
    </div>
  );
}

export default CardProfile;
