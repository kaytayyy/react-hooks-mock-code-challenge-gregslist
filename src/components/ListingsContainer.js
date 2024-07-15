import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            price={listing.price}
            image={listing.image}
            description={listing.description}
            location={listing.location}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
