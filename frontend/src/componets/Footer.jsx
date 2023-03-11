import { Link ,NavLink} from "react-router-dom";
import Calendar from "./Calendar";
import { useAuthContext } from "../hooks/useAuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { fontSize } from "@mui/system";
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import Person from "../img/icons/person.png";
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';




const Footer=()=>{
    const {user}=useAuthContext()
    return(
        <div className="text-white  bottom-0  top-0 ">
            <Link to='/'>
            <header className="flex bg-white w-80 text-white h-screen " >
                    <nav className="flex  justify-between flex-col">
                        <div className="flex  mt-6 items-center justify-evenly">
                            <NotificationsNoneIcon fontSize="large"  style={{color:"gray"}}/>
                            <SettingsIcon fontSize="large"  style={{color:"gray"}}/>
                            <Link to="/profile"  className="flex border w-20 h-20 bg-slate-200 rounded-xl "> <img src={Person} className="m-auto"  /></Link>
                        </div>
                        <div>
                            <Calendar/>
                        </div>
                    </nav>
             </header>
            </Link>
        </div>
    )
}


export default Footer;