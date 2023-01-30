import DashCourseTile from "../componets/DashCourseTile";
import AddIcon from '@mui/icons-material/Add';
import AddNewCourse from "./teach/AddNewCourse";
import { Link } from "react-router-dom";




const Dashboard =()=>{
    return(
        <div className="DASHBOARD  " >
            <h2 className="ml-4 my-4 text-xl font-bold">Dashboard</h2>
            <div className="flex border rounded-xl   ">
               <DashCourseTile/>
               <DashCourseTile/>
               <DashCourseTile/>
            </div>
            <div className="flex justify-between items-center">
                <h2 className="ml-4 my-4 text-xl font-bold">Your Courses</h2>  
                <Link className="mr-2 my-4 text-xs font-bold text-red-400" to='/AddnewCourse'><AddIcon/> Add course</Link> 
            </div>
            
            <div className="flex border rounded-xl   ">
                <DashCourseTile/>
                <DashCourseTile/>
                <DashCourseTile/>
            </div>
                
            
        </div>
    )
}

export default Dashboard;