import DashCourseTile from "../componets/DashCourseTile";





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