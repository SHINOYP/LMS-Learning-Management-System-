import {Link, NavLink} from "react-router-dom";
import React from 'react';
import LOGO from "../img/icons8-lyft.svg";
import GridViewIcon from '@mui/icons-material/GridView';
import ClassIcon from '@mui/icons-material/Class';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MessageIcon from '@mui/icons-material/Message';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import {useLogout} from '../hooks/useLogout';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { useEffect } from "react";
import book from '../img/icons/Book.svg'
import Swal from 'sweetalert2';

const Navbar=()=>{
    const {logout}=useLogout();
    const user=JSON.parse(localStorage.getItem('user'))
    const navigate=useNavigate();
    const handleClick=()=>{
        Swal.fire({
            title: 'Do you want to log out?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
          }).then((result) => {
            if (result.isConfirmed) {
                logout();
                Swal.fire(
                    'Logged out !',
                    'You have been logged out',
                    'success'
                  )
              navigate("/login")
            }
          })
        
        
    }
    return(
             <header >
                    <nav className="font-semibold bg-indigo-900 w-72 text-white sticky top-0 bottom-0 text-lg   " style={{ minHeight:"100vh"}}>
                        <div className="flex flex-col ">
                            <div className="mx-auto mt-8 font-sharp flex   text-2xl">
                            <img src={book} className="w-8 mr-2"></img> <h1 >LMS</h1>
                            </div>
                            <NavLink to="/Dashboard"  className={({ isActive }) => (isActive ? " border-solid border-6 mt-20 w-30  ml-6 mr-4  px-6 py-2 bg-blue-800 drop-shadow-md  rounded-xl" : " border-solid border-6   mt-20 w-30 ml-6 mr-4 px-6 py-2  hover:bg-blue-800 hover:drop-shadow-md rounded-xl")}><GridViewIcon className="mr-4 mb-1"/>Dashboard</NavLink> 
                            {user.role === 'Admin' ? 
                                    <NavLink to="/Courses"  className={({ isActive }) => (isActive ? "flex border-solid border-6 w-30 px-6 py-2 ml-6 mr-4 mt-2 bg-blue-800 drop-shadow-md  rounded-xl" : "flex border-solid border-6  w-30 px-6 py-2 ml-6 mr-4 mt-2  hover:bg-blue-800 hover:drop-shadow-md rounded-xl")} ><ClassIcon className="mr-4 mb-1"/>Courses</NavLink>
                                     :  <NavLink  to="/Grades" className={({ isActive }) => (isActive ? "flex border-solid border-6 w-30  px-6 py-2 ml-6 mr-4   mt-2 bg-blue-800 drop-shadow-md  rounded-xl" : "flex border-solid border-6  w-30 px-6 py-2 ml-6 mr-4 mt-2  hover:bg-blue-800 hover:drop-shadow-md rounded-xl")} ><InsertChartIcon className="mr-4 mb-1"/>Grades</NavLink>}
                            <NavLink to="/Todo"  className={({ isActive }) => (isActive ? "flex border-solid border-6 w-30  px-6 py-2 ml-6 mr-4   mt-2 bg-blue-800 drop-shadow-md  rounded-xl"  : "flex border-solid border-6  w-30 px-6 py-2 ml-6 mr-4 mt-2  hover:bg-blue-800 hover:drop-shadow-md rounded-xl")} ><ListAltIcon className="mr-4 mb-1"/>To-do</NavLink>
                        </div>
                        <div className="mt-48">
                            <NavLink to="/Chat"  className={({ isActive }) => (isActive ? "flex border-solid border-6 w-30  px-6 py-2 ml-6 mr-4  mt-2 bg-blue-800 drop-shadow-md  rounded-xl " : "flex border-solid border-6 w-30 px-6 py-2 ml-6 mr-4 mt-2  hover:bg-blue-800 hover:drop-shadow-md rounded-xl")} ><MessageIcon className="mr-4 mt-1"/>Chat</NavLink>
                            <NavLink to="/Meet"  className={({ isActive }) => (isActive ? "flex border-solid border-6 w-30  px-6 py-2 ml-6 mr-4 mt-2  bg-blue-800 drop-shadow-md  rounded-xl" : "flex border-solid border-6 w-30 px-6 py-2 ml-6 mr-4 mt-2  hover:bg-blue-800 hover:drop-shadow-md rounded-xl")} ><VideoCallIcon className="mr-4 mt-1" />Meet</NavLink>
                        </div>
                        <div className="mt-60">
                            <button onClick={handleClick} className="m-14 flex" ><LogoutIcon/> Logout</button>
                        </div>
                    </nav>
             </header>
        

    )
}

export default Navbar;