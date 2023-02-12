
import OpenCourseDetails from "../componets/OpenCourseDetails";

import { useLocation } from "react-router-dom";




const OpenCourse=(props)=>{
    const location = useLocation();
    const propsData = location.state;
    const {units}=propsData;
    return(
        <div>
            
             <div className="">
                
                {units &&units.map((unit)=>(
                    <OpenCourseDetails unit={unit}/>
                ))}
          
                        
             </div>
        </div>
    )
}


export default OpenCourse;