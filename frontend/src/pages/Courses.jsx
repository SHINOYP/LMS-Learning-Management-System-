import { useEffect,useState } from "react";
import CourseTiles  from "../componets/CourseTiles";
import {useAuthContext} from '../hooks/useAuthContext'
import { useChapterContext } from "../hooks/useChapterContext";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import Popup from '../componets/teach/AddnewCours'
import ClassIcon from '@mui/icons-material/Class';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const Courses=()=>{
    const [title,setTitle]=useState('');
    const [file,setFile]=useState('');
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false);
    const {chapters,dispatch}=useChapterContext()
    const {user}=useAuthContext()
    const [buttonPopup,setButtonPopup]=useState(false);

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

     const handleSubmit= async(e)=>{
        setLoading(true)
        e.preventDefault()

        if(!user){
            setError('you must be logged in')
            return
        }
        
        
        const formData=new FormData();
        formData.append("title",title);
        formData.append("img",file);

        const response =await fetch("http://localhost:4000/api/chapters/",{
            method:'POST',
            body:formData,
            headers:{

                'Authorization':`Bearer ${user.token}`
            }
                
        })
        const json=await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setFile('')
            setButtonPopup(false)
            setError(null)
            setLoading(false)
            console.log('new chapter added',json)
            dispatch({type:'CREATE_CHAPTERS',payload:json})
        }
    }
    
    return(
        <>
            <div className="flex  flex-col justify-between mx-4">
                <h1 className="ml-2 mt-10 mb-4 text-xl font-black  flex"> <ClassIcon className="mx-2 my-auto" />Your Courses</h1>
                {/* <button onClick={()=>setButtonPopup(true) }className=" my-4 mr-20 text-xs font-bold text-red-400"><AddIcon/> Add Course</button> */}
                <div className="inline-flex  shadow-sm mx-auto my-6" role="group">
                    <button type="button"  onClick={()=>setButtonPopup(true)}  className="inline-flex items-center mx-2 px-36 py-4 text-sm font-medium text-gray-900 bg-blue-600 rounded-lg border-4  border-gray-900 hover:border-green-400 rounded-l-lg hover:bg-red-900 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-red-900 focus:text-black dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-blue-700 dark:focus:bg-blue-700 ">
                       <LibraryAddIcon className="mr-2"/> Add New Course
                    </button>
                    <Link to='/profile' type="button" className="inline-flex items-center px-36 py-4 text-sm font-medium mx-2 text-gray-900 bg-blue-600  border-4  border-gray-900 rounded-lg hover:border-green-400 hover:bg-red-900 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-red-900 focus:text-black dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-blue-700 dark:focus:bg-blue-700">
                        <AccountBoxIcon className="mr-2"/>
                        Profile
                    </Link>
                   
                    <button type="button" class="inline-flex items-center px-36 py-4 text-sm font-medium mx-2 text-gray-900 bg-blue-600  border-4  border-gray-900 rounded-lg hover:border-green-400 hover:bg-red-900 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-red-900 focus:text-black dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-blue-700 dark:focus:bg-blue-700">
                        <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
                        Downloads
                    </button>
                </div>
            </div>
            <div>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                    <div className=" flex items-center justify-center relative ">
                    
                        <form className="flex flex-col" onSubmit={handleSubmit} enctype="multipart/form-data">
                            <h2 className="mx-auto text-xl font-black  ">Add new Course</h2> 
                            <label className="mt-10">Course Name</label>
                            <input 
                                type="text"
                                onChange={(e)=> setTitle(e.target.value)}
                                value={title}
                                className="mb-6 w-80  bg-gray-200 border rounded-xl border-slate-600"
                                placeholder="Enter Course Name"
                            />

                             <label className="mt-4">Course Thumbnail</label>       
                            <div className="flex items-center justify-center bg-grey-lighter">
                                <label className="w-80  flex  items-center px-16 py-3 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                                <svg className="w-6 h-6 mr-4 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <span className=" text-base leading-normal">Select a file</span>
                                        <input
                                            className="hidden"
                                            type="file"
                                            name="profileImage"
                                            onChange={(e)=>setFile(e.target.files[0])}
                                            />
                                </label>
                            </div>
                            
                            <button className=" mt-10 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg py-2">Add Course</button>
                        {error && <div>{error}</div>}
                        </form>

                    </div>            
                </Popup>
            </div>
            
            <div className=" flex flex-wrap mx-2 ">
                <h1></h1>
                {chapters && chapters.map((chapter)=>(
                        <CourseTiles key={chapter._id} chapter={chapter}/>
                            
                    ))}
                           
                {console.log(chapters)}
            </div>
        </>
    )
}


export default Courses;