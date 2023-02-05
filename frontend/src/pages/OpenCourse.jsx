import { useEffect,useState } from "react";
import OpenCourseDetails from "../componets/OpenCourseDetails";
import AddIcon from '@mui/icons-material/Add';
import AddNewCourse from "./teach/AddNewCourse";
import { Link } from "react-router-dom";
import {useAuthContext} from '../hooks/useAuthContext'

//componets
import ChapterSections from "../componets/chapterSections";


const OpenCourse=()=>{
    const [chapters,setChapters] = useState(null)
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
                setChapters(json)
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