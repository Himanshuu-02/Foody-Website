import React, { lazy,Suspense } from "react";
import { createBrowserRouter, Outlet} from "react-router-dom";
import Headers from "./FoodyWeb/Headers";
import "./App.css";
import RestaurantList from "./FoodyWeb/RestaurantList";
import About from "./FoodyWeb/About";
import Eroor from "./FoodyWeb/Eroor";
import Blog from "./FoodyWeb/Blog";
//import Services from "./FoodyWeb/Services";
import Footer from "./FoodyWeb/Footer";
import RestroMenu from "./FoodyWeb/RestroMenu";
import Shimmer from "./FoodyWeb/Shimmer";
import "./index.css"
// function App() {
//   const[activeSection,setActiveSection]= useState('home')
//   const handleNavigation=(section)=>{
//     setActiveSection(section)
//   }
//   return (
//     <div className="App">
//        <Headers onNavigate={handleNavigation}/>
//        {/* <SearchBar/>  */}
//       {activeSection=== "home" && <RestaurantList/>}
//       {activeSection==="about" && <About/>}
//     </div>
//   );
// }

//new feature
const Services= lazy(()=>import("./FoodyWeb/Services"))
function App() {
  
  return (
    <div className="App">
      <Headers />
      <Outlet/>
      {/* <SearchBar/>  */}
      {/*<RestaurantList />*/}
    </div>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [                 //now these become children of 
      {
        path:"/",
        element: <RestaurantList/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/services",
        element:  <Suspense fallback={<Shimmer/>}><Services/></Suspense>,
      },
      {
        path: "/contact",
        element: <Footer />,
      },
      {
        path: "/restaurant/:resid",
        element: <RestroMenu />,
      },
    ],
    errorElement: <Eroor />,
  
  },
  {
        path: "/contact",
        element: <Footer />,
      
  }
]);


export default App;
