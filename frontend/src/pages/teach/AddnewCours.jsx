import './Add-newCourse.css'
import React from 'react';
import { Button } from '@mui/material';

 const AddnewCourse=(props)=>{
    return(props.trigger)?(
        <div className="popup">
            <div className='popup-inner'>
                <button className='close-btn hover:bg-red-600 bg-red-400 px-2 py-1 rounded-2xl' onClick={()=>{props.setTrigger(false)}}>close</button>
                {props.children}
            </div>

        </div>

    ):"";
}


export default AddnewCourse;