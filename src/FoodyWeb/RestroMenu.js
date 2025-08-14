// import React, { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
// import "../RestroMenu.css";

// const RestroMenu = () => {
//   const [restroMenu, setRestroMenu] = useState(null);
//   const [openCategory, setOpenCategory] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=150591"
//     );
//     const json = await data.json();
//     setRestroMenu(json.data);
//   };

//   if (!restroMenu) {
//     return <Shimmer />;
//   }

//   const info = restroMenu?.cards?.[2]?.card?.card?.info;
//   if (!info) {
//     return <h2>Menu details not available</h2>;
//   }

//   const { name, cuisines, costForTwoMessage, avgRating, city, locality } = info;

//   const menuCards =
//     restroMenu?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

//   const categories = menuCards
//     .map((c) => c.card?.card)
//     .filter((card) => card["@type"]?.includes("ItemCategory"));

//   const toggleCategory = (title) => {
//     setOpenCategory(openCategory === title ? null : title);
//   };

//   return (
//     <div className="restro-menu">
//       <div className="restro-header">
//         <h1>{name}</h1>
//         <h4>{cuisines?.join(", ")}</h4>
//         <h3>
//           {costForTwoMessage}, ⭐{avgRating}
//         </h3>
//         <h5>
//           {locality}, {city}
//         </h5>
//       </div>

//       {categories.map((category) => (
//         <div key={category.title}>
//           <div
//             className="category-header"
//             onClick={() => toggleCategory(category.title)}
//           >
//             <span>🍽 {category.title}</span>
//             <span>{openCategory === category.title ? "▲" : "▼"}</span>
//           </div>

//           {openCategory === category.title && (
//             <div className="menu-items">
//               {category.itemCards?.map((item) => {
//                 const itemInfo = item.card.info;
//                 const imageUrl = itemInfo.imageId
//                   ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200/${itemInfo.imageId}`
//                   : "https://via.placeholder.com/300x200?text=No+Image";

//                 return (
//                   <div className="menu-card" key={itemInfo.id}>
//                     <img src={imageUrl} alt={itemInfo.name} />
//                     <div className="menu-card-content">
//                       <h4>{itemInfo.name}</h4>
//                       <p>₹{itemInfo.price / 100 || itemInfo.defaultPrice / 100}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RestroMenu;

//second version

//import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import "../RestroMenu.css"
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
import RestroCategory from "./RestroCategory";

const RestroMenu = () => {
  //const [restroMenu, setRestroMenu] = useState(null);
  const{resid}=useParams()
  const restroMenu= useRestroMenu(resid)    //create a custom hook here


//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+resid+"&catalog_qa=undefined&submitAction=ENTER"
//     );
//     const json = await data.json();
//     console.log(json);
//     setRestroMenu(json.data);
//   };

  if (!restroMenu) {
    return <Shimmer />;
  }

  const info = restroMenu?.cards[2]?.card?.card?.info;

  if (!info) {
    return <h2>Menu details not available</h2>;
  }

  const { name, cuisines,  city, locality } = info;

  // ✅ Find groupedCard data
  const menuCards =
    restroMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((section)=>
    section?.card?.card?.title && section?.card?.card?.itemCards) ||[] ;
    // console.log(menuCards)
    // let allItems=[]
    // menuCards.forEach((section)=>{
    //     const items = section?.card?.card?.itemCards || []
    //     allItems=[...allItems, ...items]
    // })
    
    // console.log("All Items:", allItems)


  // ✅ Collect all itemCards from all sections
  //const itemCards = menuCards
   
  //console.log("itemCards:", itemCards);

  return (
    <div >
      <div className="Menu-info">
        <h1><strong> *************  {name}  *************</strong></h1>
      <h4>{cuisines?.join(", ")}</h4>
      {/* <h3>
        {costForTwoMessage}, ⭐{avgRating}
      </h3> */}
      <h5>
        {locality}, {city}
      </h5>


      </div>
      
     
      <ul className="menu-list" > <h2>Menu</h2>
        {menuCards.map((section) => (
          
          <RestroCategory  data={{title: section.card.card.title,
                                  items:section.card.card.itemCards,
                                  
          }}/>
         
         
        ))}
      </ul>
     
      
    </div>
  );
};

export default RestroMenu;

// import React, { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
// import "../RestroMenu.css";
// import { useParams } from "react-router-dom";

// const RestroMenu = () => {
//   const [restroMenu, setRestroMenu] = useState(null);
//   const { resid } = useParams();

//   useEffect(() => {
//     fetchMenu();
//     // eslint-disable-next-line
//   }, [resid]);

//   const fetchMenu = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=" +
//         resid +
//         "&catalog_qa=undefined&submitAction=ENTER"
//     );
//     const json = await data.json();
//     console.log("API DATA:", json.data);
//     setRestroMenu(json.data);
//   };

//   if (!restroMenu) {
//     return <Shimmer />;
//   }

//   // Find info card robustly
//   const infoCard = restroMenu?.cards?.find(
//     (c) => c.card?.card?.info
//   );
//   const info = infoCard?.card?.card?.info;

//   // Find groupedCard robustly
//   const groupedCard = restroMenu?.cards?.find(
//     (c) => c.groupedCard
//   )?.groupedCard;

//   const menuCards =
//     groupedCard?.cardGroupMap?.REGULAR?.cards || [];

//   let allItems = [];
//   menuCards.forEach((section) => {
//     const items = section?.card?.card?.itemCards || [];
//     allItems = [...allItems, ...items];
//   });

//   if (!info) {
//     return <h2>Menu details not available for this restaurant.</h2>;
//   }
//   if (!allItems.length) {
//     return <h2>No menu items found for this restaurant.</h2>;
//   }

//   const { name, cuisines, costForTwoMessage, avgRating, city, locality } = info;

//   return (
//     <div>
//       <h1>
//         <strong>{name}</strong>
//       </h1>
//       <h4>{cuisines?.join(", ")}</h4>
//       <h3>
//         {costForTwoMessage}, ⭐{avgRating}
//       </h3>
//       <h5>
//         {locality}, {city}
//       </h5>

//       <h2>Menu</h2>
//       <ul className="menu-list">
//         {allItems.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} - ₹
//             {item.card.info.price / 100 ||
//               item.card.info.defaultPrice / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestroMenu;