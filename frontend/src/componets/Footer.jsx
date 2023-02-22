import { Link ,NavLink} from "react-router-dom";
import Calendar from "./Calendar";
import { useAuthContext } from "../hooks/useAuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { fontSize } from "@mui/system";


const Footer=()=>{
    const {user}=useAuthContext()
    return(
        <div className="text-white  bottom-0   top-0 ">
            <Link to='/'>
            <header className=" bg-slate-50 w-80 text-white  rounded-xl " style={{height:"100%" }}>
                    <nav className=" flex justify-between  flex-col">
                        {user &&(<div className="mt-24">
                            <spam>{user.email}</spam>
                         </div>  )} 
                         <Link to="/profile" style={{marginLeft:"250px",marginTop:"-100px"}}> <AccountCircleIcon  style={{ color: "black"  ,fontSize:"50px"}}/></Link>
                        
                        <div className=" right-0 " style={{zIndex:"1",marginTop:"570px"}}>
                         <Calendar/>
                        </div>
                    </nav>
             </header>
            </Link>
        </div>
    )
}


export default Footer;