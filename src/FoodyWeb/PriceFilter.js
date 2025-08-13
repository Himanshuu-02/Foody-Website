// That is the code optimization of price filtering i have not calling it yet but we can do it as like also
import React,{useState} from 'react'

const PriceFilter = ({restaurants,setRestaurants}) => {
   // const [restaurants, setRestaurants] = useState([]);
    const[priceFilter,setPriceFilter]= useState("")

      const handlePriceFilter=(value)=>{
    setPriceFilter(value);
    if(value== ""){
        setRestaurants(restaurants)
    }else{
         const filtered = restaurants.filter((res) => {
        const costText = res.info?.costForTwoString || res.info?.costForTwo || "";
        const costValue = parseInt(costText.replace(/\D/g, "")) || 0;
        if (value === "low") return costValue < 200;
        if (value === "medium") return costValue >= 150 && costValue <= 250;
        if (value === "high") return costValue > 250;
        if(value==="all") setRestaurants(restaurants)
        return true;
      });
      setRestaurants(filtered);
    }
  };
  return (
    <div className="container-filter">
        <label className="price" style={{ marginRight: "10px" }}>Filter by Price:</label>
      <select className="select" value={priceFilter} onChange={(e) => handlePriceFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="low">Under ₹200</option>
        <option value="medium">₹150 - ₹250</option>
        <option value="high">Above ₹250</option>
      </select>
    </div>
  )
}

export default PriceFilter