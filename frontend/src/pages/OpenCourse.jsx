import { useEffect } from "react";
import OpenCourseDetails from "../componets/OpenCourseDetails";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import {useAuthContext} from '../hooks/useAuthContext'
import { useChapterContext } from "../hooks/useChapterContext";



const OpenCourse=()=>{
    const {chapters,dispatch}=useChapterContext()
    const {user}=useAuthContext()

    useEffect(()=>{
        const fetchChapters =async () => {
            const response = await fetch("http://localhost:4000/api/chapters/",{
                headers:{
                    'Authorization':`Bearer ${user.token}`
                }
            })
            const json = await response.json()
            
            if(response.ok){
                dispatch({type:'SET_CHAPTERS',payload:json})
            }
        }
        if(user){
            fetchChapters()
        }
    },[user])
    return(
        <div>
            <Link className=" text-xs font-bold text-red-400" to='/AddnewCourse'><AddIcon/> Add Chapter</Link> 
             <div className="">
                {chapters && chapters.map((chapter)=>(
                    <OpenCourseDetails key={chapter._id} chapter={chapter}/>
                        
                ))}
             </div>
        </div>
    )
}


export default OpenCourse;