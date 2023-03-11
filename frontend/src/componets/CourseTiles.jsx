import OpenCourse from "../pages/OpenCourse";
import {Link} from "react-router-dom";
// import Spider from "../img/SPIDER.jp"
import Ban from '../img/banner.jpg'
import PersonIcon from '@mui/icons-material/Person';
import { useEffect } from "react";
import { useChapterContext } from "../hooks/useChapterContext";
import { useAuthContext } from "../hooks/useAuthContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from "react-router-dom";

const CourseTiles=(props)=>{
    const location = useLocation()
    const {dispatch}=useChapterContext()
    const {user}=useAuthContext()


    const chapterd= {
        _id:props.chapter._id,
        title: props.chapter.title,
        img:props.chapter.img,
        file:props.chapter.file,
        fileLink:props.chapter.links

      };

      
      
      const handleClick=async()=>{
        const response=await fetch('http://localhost:4000/api/chapters/'+props.chapter._id,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${user.token}`
            },
            body:JSON.stringify(chapterd)
              
        })
        const json=await response.json()

        if(response.ok){
            dispatch({type:'DELETE_CHAPTERS', payload:json})
            
        }
      }
    
    return(
        
        <div className="flex m-4 flex-col relative  w-74  bg-white border-solid rounded-b-lg rounded-t-lg  ">
            <div className=" border-white   w-72 ">
            {location.pathname !=="/Dashboard" && 
               <button onClick={handleClick} className=" absolute left-3 top-2 "><DeleteIcon className="transform h-64 w-1/5  transition duration-800 hover:scale-150" style={{ fill: 'red' ,fontSize:'25px'}}/><span className="text-sm">Delete </span></button>
            }
                <img src={props.chapter.img}   onError={(e) =>(e.target.onerror = null)((e.target.src ="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=1380&t=st=1678376734~exp=1678377334~hmac=5c4cfbd4678e55f5b00ee505e37fd7c2474945362aa7c577172fcc9863fa764c")) } className=" h-40 w-64 mx-auto mt-3 rounded-lg"/>
            </div> 
            <Link to="/OpenCourse" state={chapterd} >
                <div className=" flex my-auto flex-col bg-white border-b  ">
                    <h3 className="mx-auto">{props.chapter.title}</h3>
                    <p className="mx-auto text-xs"><PersonIcon sx={{ fontSize: 14 }} className="mb-1 mr-1"/>Xavier</p>
                </div>
                <div className="flex h-6 ">
                    <button className="text-xs mx-auto  my-auto text-red-400 font-black  "> View class</button>
                </div>
            
            </Link>
        </div>
        
         
        
    )
    
}

export default CourseTiles;