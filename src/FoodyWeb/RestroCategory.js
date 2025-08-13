import React,{useState} from "react";
import ItemList from "./ItemList";

const RestroCategory = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
//   console.log(data);
  const HandleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="category">
      <div onClick={HandleClick} className="category-container"> 
        <span>
          {data.title} ({data.items.length})
        </span>
        <span>⬇️</span>
      </div>
      <div className="category-content">
        {isOpen && <ItemList list={data.items} />}
      </div>
    </div>
  );
};

export default RestroCategory;
