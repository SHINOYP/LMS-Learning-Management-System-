import { Link } from "react-router-dom";
import Spider from "../img/SPIDER.jpg";
import PersonIcon from "@mui/icons-material/Person";

const DashCourseTile = () => {
  return (
    <Link to="/OpenCourse">
      <div className="flex m-2 flex-col  h-60 w-74 rounded-xl bg-white  border  ">
        <div className="border-white flex    w-72 ">
          <img alt='' src={Spider} className=" ml-6 my-6 rounded-xl w-16 h-16"/>
          <div className="flex flex-col">
            <h3 className="ml-4 mt-6">Machine Learning</h3>
            <p className="ml-4 mt-4 flex items-center text-xs">
              <PersonIcon />
              Alexander
            </p>
          </div>
        </div>
        <div className=" flex  flex-col h-24 w-72 bg-white  border-2  "></div>
        <button className="text-red-400"> View Class</button>
      </div>
    </Link>
  );
};

export default DashCourseTile;
