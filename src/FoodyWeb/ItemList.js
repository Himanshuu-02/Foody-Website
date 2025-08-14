import React from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({ list }) => {
    const dispatch= useDispatch();
    const handleAddItem=((list)=>{
        //dispatch an action
        dispatch(addItem(list))
    })
  const IMG_CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

  return (
    <div className="list-container">
      {list.map((list) => (
        <div key={list.card.info.id} className="all-menu">
          {/* Left: Dish details */}
          <div className="menu-text">
            <span className="content">
              {list.card.info.name} - ₹
              {list.card.info.price / 100 || list.card.info.defaultPrice / 100}
            </span>
            <p className="description">{list.card.info.description}</p>
          </div>

          {/* Right: Dish image */}
          <div className="imageadd">
            {list.card.info.imageId && (
            <img
              src={IMG_CDN_URL + list.card.info.imageId}
              alt={list.card.info.name}
            />
          )}
          <div className="add-btn">
            <button onClick={()=>handleAddItem(list)}>Add+</button>
          </div>
                
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default ItemList;
