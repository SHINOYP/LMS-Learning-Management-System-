import { Link, NavLink } from "react-router-dom";
import Calendar from "./Calendar";
import { useAuthContext } from "../hooks/useAuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { fontSize } from "@mui/system";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import Person from "../img/icons/person.png";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Clock from 'react-live-clock';

const Footer = () => {
  const { user } = useAuthContext();  

  return (
    <header
      className=" bg-white w-80 text-white "
      style={{ minHeight: "100vh" }}
    >
      <nav
        className="flex  flex-col relative  sticky  top-0 z-40 "
        style={{ minHeight: "100vh" }}
      >
        <div className="flex  mt-6 items-center justify-evenly">
          <NotificationsNoneIcon fontSize="large" style={{ color: "gray" }} />
          <SettingsIcon fontSize="large" style={{ color: "gray" }} />
          <Link
            to="/profile"
            className="flex border w-20 h-20 bg-slate-200 drop-shadow-md rounded-xl "
          >
            {" "}
            <img src={Person} className="m-auto" />
          </Link>
        </div>
        <div className="text-black mx-auto" style={{marginTop:'450px'}}>
             <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
        </div>
        <div className="drop-shadow-md mt-auto">
          <Calendar />
        </div>
      </nav>
    </header>
  );
};

export default Footer;
