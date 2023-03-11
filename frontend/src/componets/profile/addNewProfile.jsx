import './addNewProfile.css'
import React from 'react';
import { Button } from '@mui/material';

 const addNewProfile=(props)=>{
    return(props.trigger)?(
        <div className="popup">
            <div className='popup-inner flex  flex-col rounded-xl'>
                <h1 className='flex mx-auto font-bold mb-10'>UPLOAD A PROFILE PICTURE</h1>
                {/* <button className='close-btn hover:bg-red-600 bg-red-400 w-8 h-8 rounded-full mt-0'>CLOSE</button> */}
                <button type="button"  onClick={()=>{props.setTrigger(false)}} className=" close-btn text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">CLOSE</button>
                {props.children}
            </div>

        </div>

    ):"";
}


export default addNewProfile;
