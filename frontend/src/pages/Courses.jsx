import { useEffect } from "react";
import CourseTiles  from "../componets/CourseTiles";
import {useAuthContext} from '../hooks/useAuthContext'
import { useChapterContext } from "../hooks/useChapterContext";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";


const Courses=()=>{
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
        <>
        <div className="flex justify-between">
        <h1 className="ml-6 my-4 text-xl font-bold">Courses</h1>
        <Link className=" my-4 text-xs font-bold text-red-400" to='/AddnewCourse'><AddIcon/> Add Course</Link> 
        </div>
        
        <div className=" flex flex-wrap  ">
            <h1></h1>
            {chapters && chapters.map((chapter)=>(
                    <CourseTiles key={chapter._id} chapter={chapter}/>
                        
                ))}
          
        </div>
        </>
    )
}


export default Courses;