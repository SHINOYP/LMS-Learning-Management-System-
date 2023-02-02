import { useState } from "react"



const AddNewCourse=()=>{
    const [title,setTitle]=useState('');
    const [error,setError]=useState('');

    const handleSubmit= async(e)=>{
        e.preventDefault()

        const chapter={title}

        const response =await fetch("http://localhost:4000/api/chapters/",{
            method:'POST',
            body:JSON.stringify(chapter),
            headers:{
                'Content-Type':'application/json'
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