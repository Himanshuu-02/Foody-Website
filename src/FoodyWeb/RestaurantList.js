import React, { useEffect, useState } from "react";
import axios from "axios";
import Body from "./Body";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
//import Shimmer from "./Shimmer";
import useStatus from "../utils/useStatus";

function RestaurantList() {
  const [allRestaurants, setAllRestaurants] = useState([]); // ✅ Store original data
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
      )
      .then((response) => {
        const cards = response.data?.data?.cards || [];
        let extracted = [];
        console.log(cards);

        cards.forEach((c) => {
          const arr = c.card?.card?.gridElements?.infoWithStyle?.restaurants;
          console.log(arr);
          if (Array.isArray(arr)) extracted = [...extracted, ...arr];
        });
        console.log("Extracted Restaurants:", extracted);

        setAllRestaurants(extracted); // ✅ save original data
        setRestaurants(extracted); // ✅ also set UI list initially
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  //added filter Search
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim() === "") {
      setRestaurants(allRestaurants);
    } else {
      const filterSearch = allRestaurants.filter((res) =>
        res.info?.name?.toLowerCase().includes(term.toLowerCase())
      );
      setRestaurants(filterSearch);
    }
  };

  //added price filter

  const handlePriceFilter = (value) => {
    setPriceFilter(value);
    if (value === "") {
      setRestaurants(allRestaurants);
    } else {
      const filtered = allRestaurants.filter((res) => {
        const costText =
          res.info?.costForTwoString || res.info?.costForTwo || "";
        const costValue = parseInt(costText.replace(/\D/g, "")) || 0;
        if (value === "low") return costValue < 200;
        if (value === "medium") return costValue >= 150 && costValue <= 250;
        if (value === "high") return costValue > 250;
        if (value === "all") setRestaurants(restaurants);
        return true;
      });

      setRestaurants(filtered);
    }
  };
  const onlineStatus= useStatus()
  if(onlineStatus===false){
    return (<h1 style={{textAlign:"center"}}>You are offline :)...Please check your internet connection</h1>
    
    )
  }

  return (
    <div className="whole-container">
      {/* searchhandleradded */}
      <SearchBar onSearch={handleSearch} />

      <span className="container-filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = allRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setRestaurants(filterdList);
          }}
        >
          High Rated Restaurant
        </button>

        {/* ✅ Dropdown for Price Filter */}

        <label className="price" style={{ marginRight: "10px"}}>
          Filter by Price:
        </label>
        <select
          className="select"
          value={priceFilter}
          onChange={(e) => handlePriceFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="low">Under ₹200</option>
          <option value="medium">₹150 - ₹250</option>
          <option value="high">Above ₹250</option>
        </select>
        {/* <PriceFilter restaurants={restaurants} setRestaurants={setRestaurants} /> */}
      </span>

      <div className="boxes">
        {restaurants.map((item) => {
          const cardindex = item.info.id;
          console.log(cardindex)
          const info = item.info || {};
          const img = info.cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${info.cloudinaryImageId}`
            : "https://via.placeholder.com/300x200?text=No+Image";

          // ✅ Ensure all fields have a safe value

          const name = info.name || "Restaurant";
          const cuisines =
            info.cuisines?.join(", ") || "Cuisines not available";
          const rating = info.avgRating || "N/A";
          const cost =
            info.costForTwo || info.costForTwoString || "₹ — for two";
          const deleivery = info?.sla?.slaString || "N/A";
          const lacality = info?.locality || "N/A";
          const nearBy = info?.areaName || "N/A";

          return (
            <Link
              key={cardindex} // <-- Move key here!
              style={{ textDecoration: "none" }}
              to={"/restaurant/" + cardindex}
            >
              <Body
                // key={cardindex}
                //  links={link}
                resName={name}
                cusine={cuisines}
                cardRate={rating}
                cardDetail={cost}
                imgUrl={img}
                time={deleivery}
                place={lacality}
                near={nearBy}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantList;

// api:- https://swiggy-api-4c740.web.app/swiggy-api.json
