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
function Headers() {
 // const [buttonReact, setButtonReact] = useState("login");
  const onlineStatus= useStatus()
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
            <li > <Link to="/" style={{color: "black"}}> Home</Link> </li>
        {/* //never use a anchor tag when we want link the headertag with path it refresh our whole page    */}
        {/* in place of it we can use something name:- "link" it is also a react route method for link component*/}
            <li><a href="/about" style={{color: "black"}}>About us</a></li>      
            <li> <Link to= "/blog"  style={{color: "black"}}>Blog</Link></li>
              <li> <Link to="services" style={{color: "black"}}> Services</Link> </li>
             <li> <Link to="contact" style={{color: "black"}}> Contact</Link> </li>
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
             <li >Active Status: {onlineStatus ? "✅ " : "🔴" }</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Headers;
