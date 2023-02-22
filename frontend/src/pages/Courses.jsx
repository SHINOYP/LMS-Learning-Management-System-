import { useEffect,useState } from "react";
import CourseTiles  from "../componets/CourseTiles";
import {useAuthContext} from '../hooks/useAuthContext'
import { useChapterContext } from "../hooks/useChapterContext";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import Popup from './teach/AddnewCours'


const Courses=()=>{
    const [title,setTitle]=useState('');
    const [units,setUnits]=useState('');
    const [error,setError]=useState('')
    const {chapters,dispatch}=useChapterContext()
    const {user}=useAuthContext()
    const [buttonPopup,setButtonPopup]=useState(false);

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
    },[dispatch,user])

     const handleSubmit= async(e)=>{
        e.preventDefault()

        if(!user){
            setError('you must be logged in')
            return
        }

        const chapter={title,units}

        const response =await fetch("http://localhost:4000/api/chapters/",{
            method:'POST',
            body:JSON.stringify(chapter),
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user.token}`
            }
                
        })
        const json=await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setUnits('')
            setError(null)
            console.log('new chapter added',json)
            dispatch({type:'CREATE_CHAPTERS',payload:json})
        }
    }
    
    
    return(
        <>
            <div className="flex justify-between mx-4">
            <h1 className="ml-6 my-4 text-xl font-bold">Courses</h1>
            <button onClick={()=>setButtonPopup(true) }className=" my-4 mr-20 text-xs font-bold text-red-400"><AddIcon/> Add Course</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className=" flex items-center justify-center ">

                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <h2 className="mx-auto ">Add new Course</h2> 
                        <label className="mt-10">Input Course Name</label>
                        <input 
                            type="text"
                            onChange={(e)=> setTitle(e.target.value)}
                            value={title}
                            className="my-4"
                        />
                        <input 
                            type="text"
                            onChange={(e)=> setUnits(e.target.value)}
                            value={units}
                        
                        />
                    
                        <button className=" mt-10 bg-sky-500 rounded-2xl hover:bg-sky-900 py-2">Add Course</button>
                    {error && <div>{error}</div>}
                    </form>

                </div>            
            </Popup>
            </div>
            
            <div className=" flex flex-wrap mx-4 ">
                <h1></h1>
                {chapters && chapters.map((chapter)=>(
                        <CourseTiles key={chapter._id} chapter={chapter}/>
                            
                    ))}
                
            </div>
        </>
    )
}


export default Courses;