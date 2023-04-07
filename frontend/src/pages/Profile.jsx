import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import Banner from "../img/banner.jpg"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuthContext } from "../hooks/useAuthContext";
import AddIcon from '@mui/icons-material/Add';
import Popup from '../componets/profile/addNewProfile';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import profileBg from "../img/pfbg.PNG"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Swal from 'sweetalert2';
import { BallTriangle } from 'react-loader-spinner';

const Profile=()=>{

    const [buttonPopup,setButtonPopup]=useState(false);
    const [file, setFile] = useState(null);
    const {user}=useAuthContext()
    const [loading,setLoading]=useState(true);
  

   
      
    const handleSubmit= async(e)=>{
        e.preventDefault();
        setLoading(true)
        
        //create object of form data
        const formData=new FormData();
        formData.append("avatar",file);
        formData.append("_id",user._id);
        

        const response =await fetch("http://localhost:4000/api/user/Profile/",{
            method:'POST',
            body:formData
                
        })
        const json=await response.json


        if(response.ok){
          setButtonPopup(false)
          setLoading(false)
          setFile('')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Profile Updated',
            showConfirmButton: false,
            timer: 2000
          })
        }

    }

    return(
      <div className="bg-white h-screen w-screen ">
          <div className="relative "> 
              <div className="flex flex-col relative" >
                <Link to='/Dashboard'  className="sticky top-0"> <ArrowBackIcon  className="absolute left-4 top-4 " style={{color:"white" ,fontSize:"50px"}}/></Link>
                <div className="flex bg-gray-500 w-full h-96">
                
                <h1 className="text-white mx-auto my-auto mt-60  font-black text-2xl">{user.role=="Admin" ? 'Hi your are an Admin !' :'hi '}</h1>
                </div>
                <div className="mx-auto relative profilecrl "style={{top:"-90px" }}>
              
                  <button onClick={()=>setButtonPopup(true) } >
                  <i ><CameraAltIcon/> </i>
                                    
                    <img src={user.avatar}  className="ring-8 ring-slate-800 dark:ring-slate-800 w-56 flex h-56 rounded-full" />     
                  </button> 
                  <h1 className="ml-14 text-4xl mt-56  font-bold">{user.name}</h1>      
                </div>
              <img src={profileBg} className="w-96 right-0 fixed top-96 hidden md:flex absolute"/>
              </div>

            </div>
            <div className="flex flex-col w-3/4  m-6 ">
              <Accordion className="my-2 bg-black" style={{background:'#abdbe3'}}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{height:'80px'}}
                  >
                  <Typography> <h1 className=" font-black">User Name</h1></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                     <h1 className=" font-black text-lg">{user.name}</h1><br/>
                     The name field is a space provided for users to enter their given name or preferred name. It is commonly used as a form of identification or personalization in various contexts, such as online accounts, registrations, and surveys.
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              <Accordion style={{background:'#abdbe3'}}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{height:'80px'}}
                  >
                  <Typography > <h1 className=" font-black">User Email</h1></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    <h1 className=" font-black text-lg">{user.email}</h1><br/>
                    An email field is a text input area on a form or webpage that allows the user to enter their email address
                    </Typography>
                  </AccordionDetails>
              </Accordion>
            </div>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              {loading ? (
                        <div className="flex flex-col mx-auto">        
                            <BallTriangle
                              height={100}
                              width={100}
                              radius={5}
                              color="#6d19d4"
                              ariaLabel="ball-triangle-loading"
                              wrapperClass={{}}
                              wrapperStyle=""
                              visible={true}
                            />
                            <h1 className="text-xl font-black my-10 text-green-800">Updating..</h1>    
                            
                            </div>):
                        (    
                  <div className=" flex flex-col items-center justify-center ">
                    <form onSubmit={handleSubmit} encType="multipart/form-data"  >
                      <div className="flex items-center justify-center bg-grey-lighter">
                      <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base leading-normal">Select a file</span>
                        <input
                          className="hidden"
                          type="file"
                          name="profileImage"
                          onChange={(e)=>setFile(e.target.files[0])}
                          />
                        </label>
                      </div>
                      <button  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-20 my-4">UPDATE</button>
                    </form>
                    <span className="text-xs ">note it wil take some time <br/> to update profile picture</span>
                  </div>) }           
              </Popup>
        </div>
            
       
    
    )
}


export default Profile;





