// Here i use the api of restromenu for optimize my code
import React,{useEffect, useState} from 'react'

const useRestroMenu = (resid) => {
    const[restroMenu,setRestroMenu]=useState(null)
    useEffect(()=>{
         fetchMenu();
    },[resid])
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+resid+"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    // console.log(json);
    setRestroMenu(json.data);
  };

  return restroMenu;
}

export default useRestroMenu


// import React, { useEffect, useState } from "react";

// const useRestroMenu = (resid) => {
//   const [restroMenu, setRestroMenu] = useState(null);

//   useEffect(() => {
//     if (resid) {
//       fetchMenu();
//     }
//   }, [resid]);

//   const fetchMenu = async () => {
//     try {
//       const proxyUrl = "https://api.allorigins.win/raw?url=";
//       const menuApiUrl =
//         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=" +
//         resid +
//         "&catalog_qa=undefined&submitAction=ENTER";

//       const response = await fetch(proxyUrl + encodeURIComponent(menuApiUrl));
//       const json = await response.json();
//       setRestroMenu(json.data);
//     } catch (error) {
//       console.error("Error fetching menu:", error);
//     }
//   };

//   return restroMenu;
// };

// export default useRestroMenu;
