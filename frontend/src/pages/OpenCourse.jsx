import { useModuleContext } from "../hooks/useModuleContext";
import OpenCourseDetails from "../componets/OpenCourseDetails";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";





const OpenCourse=()=>{
    const location = useLocation();
    const propsData = location.state;
    const {module,dispatch}=useModuleContext()
    const {units}=propsData
    const moduleAdd= {
        _id:propsData._id
    };
    useEffect(()=>{
        dispatch({type:'SET_MODULE',payload:units})
    },[dispatch])
   
    return(
        <div>
            
             <div className="">
             <Link className=" my-4 text-xs font-bold text-red-400" to='/AddNewModule' state={moduleAdd}><AddIcon/> Add Chapter</Link> 
                
                {module && module.map((unit)=>(
                    <OpenCourseDetails unit={unit}/>
                ))}
                     
             </div>
             
        </div>
    )
}


export default OpenCourse;