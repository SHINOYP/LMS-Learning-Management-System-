import { useEffect,useState } from "react";
import OpenCourseDetails from "../componets/OpenCourseDetails"

//componets
import ChapterSections from "../componets/chapterSections";


const OpenCourse=()=>{
    const [chapters,setChapters] = useState(null)

    useEffect(()=>{
        const fetchChapters =async () => {
            const response = await fetch("http://localhost:4000/api/chapters/")
            const json = await response.json()
            
            if(response.ok){
                setChapters(json)
            }
        }
        fetchChapters()
    },[])
    return(
        <div>
             <div className="">
                {chapters && chapters.map((chapter)=>(
                    <OpenCourseDetails key={chapter._id} chapter={chapter}/>
                        
                ))}
             </div>
        </div>
    )
}


export default OpenCourse;