import { Link ,NavLink} from "react-router-dom";
import Calendar from "./Calendar";
import { useAuthContext } from "../hooks/useAuthContext";


const Footer=()=>{
    const {user}=useAuthContext()
    return(
        <div className="text-white ">
            <Link to='/'>
            <header className=" bg-slate-50 w-80 text-white  relative  sticky top-0 rounded-xl " style={{height:"100vh" }}>
                    <nav className=" flex justify-between  flex-col">
                        {user &&(<div className="mt-24">
                            <spam>{user.email}</spam>
                         </div>  )} 
                        <div className="absolute bottom-0 left-0">
                         <Calendar/>
                        </div>
                    </nav>
             </header>
            </Link>
        </div>
    )
}


export default Footer;