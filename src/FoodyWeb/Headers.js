// import React, { useState } from "react";
// function Headers({ onNavigate }) {
//   const [buttonReact, setButtonReact] = useState("login");
//   return (
//     <div>
//       <div className="header">
//         <div className="logo">
//           <img
//             src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"
//             alt="logo"
//           />
//         </div>
//         <div className="navbar">
//           <ul>
//             <li onClick={() => onNavigate("home")}>Home</li>
//             <li onClick={() => onNavigate("about")}>About</li>
//             <li onClick={() => onNavigate("blog")}>Blog</li>
//             <li onClick={() => onNavigate("services")}>Services</li>
//             <li onClick={() => onNavigate("contact")}>Contact</li>
//             <button
//               onClick={() => {
//                 buttonReact === "login"
//                   ? setButtonReact("logout")
//                   : setButtonReact("login");
//               }}
//               className="login"
//             >
//               {buttonReact}
//             </button>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Headers;

//new feature
//import React, { useState } from "react";
import {Link} from "react-router-dom"
import useStatus from "../utils/useStatus";
import { useContext } from "react";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

function Headers() {
 // const [buttonReact, setButtonReact] = useState("login");
  const onlineStatus= useStatus()
  const {loggedinUser}= useContext(UserContext)
   console.log(loggedinUser)
//subscribing to the store using the selector
const cartItems= useSelector((store)=>store.cart.items)
console.log(cartItems)
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img 
            src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"
            alt="logo"
          />
        </div>
        <div className="navbar">
          <ul>
              <li style={{marginTop:"-5px"}}>Active Status: {onlineStatus ? "✅ " : "🔴" }</li>
            <li > <Link to="/" style={{color: "black"}}> Home</Link> </li>
        {/* //never use a anchor tag when we want link the headertag with path it refresh our whole page    */}
        {/* in place of it we can use something name:- "link" it is also a react route method for link component*/}
            <li><a href="/about" style={{color: "black"}}>About us</a></li>      
            <li> <Link to= "/blog"  style={{color: "black"}}>Blog</Link></li>
              <li> <Link to="services" style={{color: "black"}}> Services</Link> </li>
             <li> <Link to="contact" style={{color: "black"}}> Contact</Link> </li>
             <li> <Link to="cart" style={{color: "black",fontWeight: "bolder"}}>🛒 ({cartItems.length} items)</Link> </li>
            {/* <button
              onClick={() => {
                buttonReact === "login"
                  ? setButtonReact("logout")
                  : setButtonReact("login");
              }}
              className="login"
            >
              {buttonReact}
            </button> */}
           
             <li style={{fontWeight: "bolder", marginRight:"-100px", marginTop:"-5px"}
             
             }>{loggedinUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Headers;
