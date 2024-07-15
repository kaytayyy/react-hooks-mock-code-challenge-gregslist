import React, { useState } from "react";

function ListingCard({ image, description, location }) {
  const [isFavorited, setIsFavorited] = useState(false);

  function handleFavoriteClick() {
    setIsFavorited(!isFavorited)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
          <button 
          className={`emoji-button favorite ${isFavorited} ? "active" : ""}`}
          onClick={handleFavoriteClick}
          >
            {isFavorited ? "★" : "☆"}
            </button>
        <strong>{description}</strong>
        <span> · { nlocation}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
