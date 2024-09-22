import { Link } from "react-router-dom";
import { useState } from "react";
import SideNavMen from "./SideNavMen";


 function SideNav(){


    const[isOpen,setIsOpen] = useState(false)



    const handleIsOPen =()=> {
        setIsOpen(true)
    }

    const handleIsClose = () =>{
        setIsOpen(false)
    }

    return <>

    <div className={`bg-blue-500 w-[18%] h-screen relative transition duration-1000 ${isOpen === true ? "w-[5%]" : "w-[]"}`}>
    <i onClick={handleIsOPen} class={`fa-solid fa-bars text-4xl text-white absolute right-2 pt-2  ${isOpen === false ? "block" : "hidden"}`}></i>
    <i onClick={handleIsClose} class={`fa-solid fa-xmark text-4xl text-white  right-2 pt-2 ${isOpen === true ?  "block" : "hidden"} `}></i>

    
    
    
    
    
    
    
    <Link to="/"><SideNavMen icons=" fa-gauge" tittle="Dashboard" /></Link>
    <Link to="/empolye"> <SideNavMen icons="fa-table-columns" tittle="Dashboard" /></Link>
    <Link to="/student"><SideNavMen icons=" fa-gauge" tittle="Dashboard" /></Link>

    
        
    

    </div>


    
    </>
}

 export default SideNav