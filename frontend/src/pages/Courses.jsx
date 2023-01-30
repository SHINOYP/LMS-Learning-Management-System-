import CourseTiles  from "../componets/CourseTiles";


const Courses=()=>{
    return(
        <>
        <h1 className="ml-6 my-4 text-xl font-bold">Courses</h1>
        <div className=" flex flex-wrap  ">
            <h1></h1>
            <CourseTiles/>
            <CourseTiles/>
            <CourseTiles/>
            <CourseTiles/>
            <CourseTiles/>
            <CourseTiles/>
            <CourseTiles/>
        </div>
        </>
    )
}


export default Courses;