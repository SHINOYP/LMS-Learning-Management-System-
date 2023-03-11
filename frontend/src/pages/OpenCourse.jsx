import { useModuleContext } from "../hooks/useModuleContext";

import { useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import Collapsible from "../componets/Collapsible";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AddLinkIcon from '@mui/icons-material/AddLink';
import { useAuthContext } from "../hooks/useAuthContext";
import Popup from '../componets/teach/AddNewModule'
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';




const OpenCourse=()=>{
    const location = useLocation();
    const propsData = location.state;
    // const {module,dispatch}=useModuleContext()
    const {file,fileLink}=propsData
    const moduleAdd= {
        _id:propsData._id
    };
    // useEffect(()=>{
    //     dispatch({type:'SET_MODULE',payload:units})
    // },[dispatch])
    const {_id}=propsData;
    const [units,setUnits]=useState('');
    const [files,setFile]=useState('');
    const [head,setHead]=useState('');
    const [linktxt,setLinktxt]=useState('');
    const [error,setError]=useState('');
    const [buttonPopup,setButtonPopup]=useState(false);
    const [buttonPopup2,setButtonPopup2]=useState(false);
    const {user}=useAuthContext()
    // const {dispatch}=useModuleContext()

    const handleSubmit= async(e)=>{
        e.preventDefault()

        if(!user){
            setError('you must be logged in')
            return
        }

        const formData=new FormData();
        formData.append("title",units);
        formData.append("doc",files);
        formData.append("_id",_id);


        const response =await fetch("http://localhost:4000/api/module/",{
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
            setUnits('')
            setError(null)
            console.log('new module added',json)
            console.log(JSON.stringify(json))
            // dispatch({type:'CREATE_MODULE',payload:json})
        }

    }
    const handleSubmit2= async(e)=>{
        e.preventDefault()

        if(!user){
            setError('you must be logged in')
            return
        }

        const response =await fetch("http://localhost:4000/api/module/addLink",{
            method:'POST',
            body:JSON.stringify({head,linktxt,_id}),
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
            setHead('')
            setLinktxt('')
            setButtonPopup2(false)
            setError(null)
            console.log('new LINK added',json)
            console.log(JSON.stringify(json))
        }

    }
  
    return(
        <div>
            
             <div className=" flex flex-col">
             <div className="flex  flex-col justify-between mx-4">
                <h1 className="ml-2 mt-10 mb-4 text-xl font-black  flex">Course overview</h1>
                <div className="inline-flex  shadow-sm mx-auto my-4" role="group">
                    <button type="button"   onClick={()=>setButtonPopup(true)}   className="inline-flex items-center px-32 py-4 text-sm font-black font-medium text-gray-900 bg-blue-600   border-4 border-gray-900 hover:border-green-400 rounded-lg hover:bg-red-900 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-red-900 focus:text-black dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-blue-700 dark:focus:bg-blue-700 ">
                     <PictureAsPdfIcon className="mr-2"/> Upload a Note
                    </button>
                    <button type="button" onClick={()=>setButtonPopup2(true)}  className="mx-2 inline-flex items-center px-32 py-4 text-sm font-medium text-gray-900 bg-blue-600  border-4 rounded-lg border-gray-900 hover:border-green-400 hover:bg-red-900 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-red-900 focus:text-black dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-blue-700 dark:focus:bg-blue-700">
                    <AddLinkIcon className="mr-2"/>   Upload a link
                    </button>
                    <button type="button" class="inline-flex items-center px-32 py-4 text-sm font-medium text-gray-900 bg-blue-600   border-4 border-gray-900 rounded-lg hover:border-green-400 hover:bg-red-900 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-red-900 focus:text-black dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-blue-700 dark:focus:bg-blue-700">
                        <svg aria-hidden="true" class="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
                        Downloads
                    </button>
                </div>
            </div>  
             <div className="mx-auto">
             {file && file.map((files)=>(
                    <Collapsible unit={files}/>
                   
                ))}
                  {fileLink && fileLink.map((files)=>(
                    <Collapsible unit={files}/>
                   
                ))}
                
                
             </div>
             <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                    <div className=" flex items-center justify-center ">
                        <form className="flex flex-col" onSubmit={handleSubmit} enctype="multipart/form-data">
                            <h2 className="mx-auto text-lg font-black">Upload A New Note</h2> 
                            <label className="mt-10 mb-2 font-black">File name</label>
                             <TextField
                                id="outlined-helperText"
                                label="Enter a heading"
                                defaultValue="Default Value"
                                helperText="Required *"
                                type="text"
                                onChange={(e)=> setUnits(e.target.value)}
                                value={units}
                                className=""
                             />
                           
                            <label className="block mb-2 text-sm font-black  dark:text-black mt-5" for="file_input">Upload file</label>
                            <input 
                                className="block w-full py-3 pl-6 text-sm text-black border border-gray-200 rounded-md cursor-pointer bg-gray-100 dark:text-black hover:border-blue-500  hover:border-2 focus:outline-none dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-400" 
                                aria-describedby="file_input_help" 
                                id="file_input"
                                type="file"
                                name="profileImage"
                                onChange={(e)=>setFile(e.target.files[0])}
                            />
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-500" id="file_input_help">PDF, PNG, JPG (MAX. 10MB)</p>

                            <button className=" mt-10 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg py-2"><CloudUploadIcon className="mr-2"/>UPLOAD</button>
                            
                             {error && <div>{error}</div>}
                        </form>
                        

                    </div>  
                </Popup>
                <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2} >
                    <div className=" flex items-center justify-center ">
                        <form className="flex flex-col" onSubmit={handleSubmit2}>
                            <h2 className="mx-auto text-lg font-black">Upload A New Note</h2> 
                            <label className="mt-10 mb-2 font-black">Enter title</label>
                             <TextField
                                id="outlined-helperText"
                                label="Enter a heading"
                                defaultValue="Default Value"
                                helperText="Required *"
                                type="text"
                                onChange={(e)=> setHead(e.target.value)}
                                value={head}
                                style={{width:"340px"}}
                                
                             />
                            <label className="mt-2 mb-2 font-black">Paste a link</label>
                            <TextField
                                id="outlined-helperText"
                                label="anything"
                                defaultValue="Default Value"
                                helperText="Required *"
                                type="text"
                                onChange={(e)=> setLinktxt(e.target.value)}
                                value={linktxt}
                                className=""
                             />
                           
                            
                            <button className=" mt-10 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg py-2"><CloudUploadIcon className="mr-2"/>UPLOAD</button>
                            
                             {error && <div>{error}</div>}
                        </form>
                        

                    </div>  
                </Popup>
             </div>
             
        </div>
    )
}


export default OpenCourse;