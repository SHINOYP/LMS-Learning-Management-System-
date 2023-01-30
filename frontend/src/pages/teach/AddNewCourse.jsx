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
        <div>
            <form className="create" onSubmit={handleSubmit}>
                <h2>add new chapter</h2> 
                <label>input title</label>
                <input 
                    type="text"
                    onChange={(e)=> setTitle(e.target.value)}
                    value={title}
                
                />
                <button>add me</button>
            {error && <div>{error}</div>}
            </form>

        </div>
    )
}


export default AddNewCourse;