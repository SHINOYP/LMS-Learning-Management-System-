import {Link, NavLink} from "react-router-dom";
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


const Navbar=()=>{
    const {logout}=useLogout();
    const {user}=useAuthContext();
    const navigate=useNavigate();
    
    const handleClick=()=>{
        logout();
        navigate("/login")
        
    }
    return(
        <div className=" "> 
        
        
             <header className="font-semibold bg-slate-50 w-60 text-stone-700  sticky top-0  text-lg   rounded-xl" style={{height:"100vh" }}>
                    <nav className=" flex  flex-col">
                        <div className="flex flex-col ">
                            <img src={LOGO} className="mx-auto  mt-8 " ></img>
                            <NavLink to="/Dashboard"  className={({ isActive }) => (isActive ? " border-solid border-6 mt-20 w-30  ml-6 mr-4  px-6 py-2 bg-red-100   rounded-xl" : " border-solid border-6   mt-20 w-30 ml-6 mr-4 px-6 py-2  hover:bg-red-50 rounded-xl")}><GridViewIcon className="mr-4 mb-1"/>Dashboard</NavLink> 
                            <NavLink to="/Courses"  className={({ isActive }) => (isActive ? "flex border-solid border-6 w-30 px-6 py-2 ml-6 mr-4 mt-2 bg-red-100  rounded-xl" : "flex border-solid border-6  w-30 px-6 py-2 ml-6 mr-4 mt-2  hover:bg-red-50 rounded-xl")} ><ClassIcon className="mr-4 mb-1"/>Courses</NavLink>
                            <NavLink to="/Todo"  className={({ isActive }) => (isActive ? "flex border-solid border-6 w-30  px-6 py-2 ml-6 mr-4   mt-2 bg-red-100 rounded-xl" : "flex border-solid border-6  w-30 px-6 py-2 ml-6 mr-4 mt-2  hover:bg-red-50 rounded-xl")} ><ListAltIcon className="mr-4 mb-1"/>To-do</NavLink>
                        </div>
                        <div className="mt-48">
                            <NavLink to="/Chat"  className={({ isActive }) => (isActive ? "flex border-solid border-6 w-30  px-6 py-2 ml-6 mr-4  mt-2 bg-red-100  rounded-xl " : "flex border-solid border-6 w-30 px-6 py-2 ml-6 mr-4 mt-2  hover:bg-red-50 rounded-xl")} ><MessageIcon className="mr-4 mt-1"/>Chat</NavLink>
                            <NavLink to="/Meet"  className={({ isActive }) => (isActive ? "flex border-solid border-6 w-30  px-6 py-2 ml-6 mr-4 mt-2  bg-red-100  rounded-xl" : "flex border-solid border-6 w-30 px-6 py-2 ml-6 mr-4 mt-2  hover:bg-red-50 rounded-xl")} ><VideoCallIcon className="mr-4 mt-1" />Meet</NavLink>
                        </div>
                        <div className="mt-60 mx-auto">
                            <button onClick={handleClick} ><LogoutIcon/> Logout</button>
                            
                        </div>
                    </nav>
             </header>
        

        </div>
    )
}

export default Navbar;