import {Link} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import googleMeet from '../img/icons/googleMeet.svg'
import Zoom from '../img/icons/Zoom.svg'

const DashCourseTile=()=>{
    return(
        <div className=" mx-20 flex flex-col w-full mt-0 relative">
            <svg className="animate-bounce w-6 h-6 ">
                sd
            </svg>
         
            <div className="flex shadow-2xl justify-around my-20 w-3/4 h-80 rounded-xl bg-white  border  ">
                <div className="flex ">
                    <img   src={googleMeet} alt=""></img>
                </div>
                <div className="flex flex-col my-auto  ">
                    <a href="https://meet.google.com/"> 
                        <h1 className="text-2xl font-black ">Google Meet</h1> 
                        <h1 >You can start a meeting  from Google Meet or Join <br/>an already existing one</h1>
                    </a>
                    
                </div>            
            </div>
              <div className="flex shadow-2xl justify-around w-3/4 h-80 rounded-xl bg-white my-10  relative right-0  md:-right-60 border  " >
                <div className="flex ">
                    <img   src={Zoom} alt=""></img>
                </div>
                <div className="flex flex-col my-auto "> 
                     <a href="https://zoom.us/">
                        <h1 className="text-2xl font-black ">Zoom  Meeing</h1> 
                        <h1>You can start a meeting from Zoom  Meetings or Join <br/>an already existing one</h1>
                    </a>
                    
                </div> 

            </div>
        </div>
    )
}


export default DashCourseTile;