import { useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext";
import { useChapterContext } from "../../hooks/useChapterContext";



const AddNewCourse=()=>{
    const [title,setTitle]=useState('');
    const [error,setError]=useState('');
    const {user}=useAuthContext()
    const {dispatch}=useChapterContext();

    const handleSubmit= async(e)=>{
        e.preventDefault()

        if(!user){
            setError('you must be logged in')
            return
        }

        const chapter={title}

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
            setError(null)
            console.log('new chapter added',json)
            dispatch({type:'CREATE_CHAPTERS',payload:json})
        }
    }
    


    return(
        <div className=" flex items-center justify-center ">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <h2 className="mx-auto">add new chapter</h2> 
                <label className="mt-10">Input title</label>
                <input 
                    type="text"
                    onChange={(e)=> setTitle(e.target.value)}
                    value={title}
                
                />
                <button className=" mt-10 bg-sky-500 rounded-xl hover:bg-sky-900">add me</button>
            {error && <div>{error}</div>}
            </form>

        </div>
    )
}


export default AddNewCourse;