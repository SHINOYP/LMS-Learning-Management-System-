import { Link ,NavLink} from "react-router-dom";
import Calendar from "./Calendar";


const Footer=()=>{
    return(
        <div className="text-white ">
            <Link to='/'>
            <header className=" bg-slate-50 w-80 text-white  relative  sticky top-0 rounded-xl " style={{height:"100vh" }}>
                    <nav className=" flex justify-between  flex-col">
                        <div className="mt-24">
                            
                         </div>   
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