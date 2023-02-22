import { height } from "@mui/system";
import React from "react";
import Banner from "../img/Banner.jpg"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile=()=>{
    return(
        <div className=""> 
            <div className="flex flex-col">
            <img src={Banner} className="relative" style={{width:"1920px",height:"300px"} } ></img>
           <span className="mx-auto relative "style={{top:"-60px" }}><AccountCircleIcon style={{ color: "white"  ,fontSize:"150px"}}/></span>
           <h1 className="mx-auto text-4xl">SHINOY</h1>
            </div>
          
        </div>
    
    )
}


export default Profile;