import { useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLocation } from "react-router-dom";
import { useModuleContext } from "../../hooks/useModuleContext";

const AddNewModule=()=>{
    const location = useLocation();
    const propsData = location.state;
    const {_id}=propsData;
    const [units,setUnits]=useState('');
    const [error,setError]=useState('');
    const {user}=useAuthContext()
    const {dispatch}=useModuleContext()
    

    const handleSubmit= async(e)=>{
        e.preventDefault()

        if(!user){
            setError('you must be logged in')
            return
        }

        const chapter={_id,units}

        const response =await fetch("http://localhost:4000/api/module/",{
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
            setUnits('')
            setError(null)
            console.log('new module added',json)
            console.log(JSON.stringify(json))
            dispatch({type:'CREATE_MODULE',payload:json})
        }

    }
    


    return(
        <div className=" flex items-center justify-center ">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <h2 className="mx-auto">Add new Module</h2> 
                <label className="mt-10">Input Module name</label>
                 <input 
                    type="text"
                    onChange={(e)=> setUnits(e.target.value)}
                    value={units}
                
                />
                <button className=" mt-10 bg-sky-500 rounded-xl hover:bg-sky-900">Add Module</button>
            {error && <div>{error}</div>}
            </form>
            

        </div>
    )
}


export default AddNewModule;