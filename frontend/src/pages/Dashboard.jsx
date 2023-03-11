import DashCourseTile from "../componets/DashCourseTile";
import CourseTiles  from "../componets/CourseTiles";
import {useAuthContext} from '../hooks/useAuthContext'
import { useChapterContext } from "../hooks/useChapterContext";
import { useEffect,useState } from "react";
import hand from '../img/icons/hand.png'



const Dashboard =()=>{
    const {chapters,dispatch}=useChapterContext()
    const {user}=useAuthContext()
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        const fetchChapters =async () => {
            const response = await fetch("http://localhost:4000/api/chapters/",{
                headers:{
                    'Authorization':`Bearer ${user.token}`
                }
            })
            const json = await response.json()
            
            if(response.ok){
                dispatch({type:'SET_CHAPTERS',payload:json})
                setLoading(false);
            }
        }
        if(user){
            fetchChapters()
        }

        
    },[dispatch,user])


    return(
        <div className="flex flex-col " >
            <div>
                <h1 className="mt-10 text-gray-500 font-bold mb-2 ml-4 ">Hello {user.email}, Welcome back </h1>
                <h2 className="text-4xl ml-4 font-black flex block items-center">Your DashBoard Today <img src={hand} className="w-16 mb-6" /> </h2>
            </div>
            <div className="my-6" >
                <h2 className="ml-4 my-4 text-xl font-bold">Dashboard</h2>
                <div className="flex border rounded-xl  flex-wrap  ">
                    <DashCourseTile/>
                    <DashCourseTile/>
                    <DashCourseTile/>
                </div>
            
            </div>
            
            <div>
                <h2 className="ml-4 my-4 text-xl font-bold">Your Courses</h2>
                <div className="flex border rounded-xl flex-wrap  ">
                {chapters && chapters.map((chapter)=>(
                            <CourseTiles key={chapter._id} chapter={chapter}/>
                                
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;