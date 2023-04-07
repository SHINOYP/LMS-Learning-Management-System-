import DashCourseTile from "../componets/DashCourseTile";
import CourseTiles  from "../componets/CourseTiles";
import {useAuthContext} from '../hooks/useAuthContext'
import { useChapterContext } from "../hooks/useChapterContext";
import { useEffect,useState } from "react";
import hand from '../img/icons/hand.png';
import React, { useRef} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import {FreeMode, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";


const Dashboard =()=>{
    const {chapters,dispatch}=useChapterContext()
    const {user}=useAuthContext()
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);

        if(user.role==='Admin'){
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
        }else{
             const fetchChapters =async () => {
            const response = await fetch("http://localhost:4000/api/chapters/st",{
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

        }
        
        
    },[dispatch,user])
   

    return(
        <div className="flex flex-col  mx-10" >
            
            <div>
                <h1 className="mt-10 text-gray-500 font-bold  ml-4 ">Hello {user.name}, Welcome back </h1>
                <h2 className="text-4xl ml-4 font-black flex block items-center">Your DashBoard Today <img src={hand} className="w-16 mb-6" /> </h2>
            </div>
            <div className="my-6" >
                <h2 className="ml-4 my-4 text-xl font-bold">Overview</h2>

                <div className="flex ">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        navigation={true}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[FreeMode,Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {chapters && chapters.map((chapter)=>(
                                <SwiperSlide key={chapter._id} >
                                <CourseTiles key={chapter._id} chapter={chapter}/>
                                </SwiperSlide>   
                            ))}
                        
                    </Swiper>
                </div>
            
            </div>
            
            <div>
                <h2 className="ml-4  text-xl font-bold">{user.role =='Admin'? 'Your Courses': 'All Courses'}</h2>
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