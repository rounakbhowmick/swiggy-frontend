import React, { useEffect, useState } from "react";
import RestaurantCard from "./ResturantCard";
import { RestaurantList, filterData } from "../constant";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const getRestaurants = async () => {
    //32mins
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Parse the JSON from the response
      console.log(
        "data",
        data?.data.cards[4].card.card.gridElements?.infoWithStyle?.restaurants
      );
      setRestaurants(
        data?.data.cards[4].card.card.gridElements?.infoWithStyle?.restaurants
      );
      return data; // Return the data for further processing or state updating
    } catch (error) {
      console.error("Fetch error: ", error.message);
    }
  };
  useEffect(() => {
    getRestaurants();
    console.log("resturants", restaurants);
  }, []);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
            // // update the state of restaurants list
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants?.map((restaurant) => {
          return restaurant?.info ? (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          ) : null;
        })}
      </div>
    </>
  );
};

export default Body;
