import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"


import SideNavMen from "./assets/components/SideNavMen";
import SideNav from "./assets/components/SideNav";
// import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root")

ReactDOM.createRoot(root).render(

 <>
 <SideNav />
 <SideNavMen />
 </>
)