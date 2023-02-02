import OpenCourse from "../pages/OpenCourse";
import {Link} from "react-router-dom";
import Spider from "../img/SPIDER.jpg"
import PersonIcon from '@mui/icons-material/Person';

const CourseTiles=()=>{
    return(

        <Link to="/OpenCourse" >
        <div className="flex m-2 flex-col  h-60 w-74 rounded-xl bg-white border-solid border ">
            <div className=" border-white   w-72 ">
                    <img src={Spider} className=" h-40 w-70 mx-auto my-1 rounded-lg"></img>
            </div>
            <div className=" flex  flex-col h-12 w-72 bg-white border-solid  rounded  border-2 ">
                <h3 className="mx-auto">Data Structure Theory</h3>
                <p className="mx-auto text-xs"><PersonIcon sx={{ fontSize: 14 }} className="mb-1 mr-1"/>Xavier</p>
            </div>
            <button className="text-xs my-auto text-red-400"> View class</button>
        </div>
        </Link>
        
        
    )
}

export default CourseTiles;