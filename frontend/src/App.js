import {Routes,Route,useLocation,Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//pages and componets
import Dashboard from './pages/Dashboard';
import Courses from "./pages/Courses";
import Chat  from './pages/Chat';
import Meet from "./pages/Meet";
import Todo from "./pages/Todo";
import AddNewCourse from './pages/teach/AddNewCourse';
import OpenCourse from './pages/OpenCourse';
import Login from './pages/login';
import Signup from './pages/signup';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';

function App() {
  const Location=useLocation();
  const {user}=useAuthContext();
  //array of excluded objects;
  const excludedRoutes=['/login','/signup'];
  
  return (
    <div className="App flex justify-between">
     
      {! excludedRoutes.includes(Location.pathname) && <Navbar/>}
       <div className='pages'>
        <Routes>
          <Route
            path='/'
            element={user ? <Dashboard/> : <Navigate to='/login'/>}
          />
          <Route
            path="/Dashboard"
            element={user ? <Dashboard/> : <Navigate to='/login'/>}
          />
          <Route 
           path="/login"
            element={!user ?<Login/> :<Navigate to='/Dashboard' />}
           /> 
          <Route
            path="/signup"
            element={!user ? <Signup/> :<Navigate to='/Dashboard' />}
          />
          <Route
            path='/Courses'
            element={user ? <Courses/> : <Navigate to='/login'/>}
          />
          <Route
            path='/Chat'
            element={user ? <Chat/> : <Navigate to='/login'/>}
          />
          <Route
            path='/Meet'
            element={user ? <Meet/> : <Navigate to='/login'/>}
          />
          <Route
            path="/OpenCourse"
            element={user ? <OpenCourse/> : <Navigate to='/login'/>}
          />
          <Route
          path="/Todo"
          element={user ? <Todo/> : <Navigate to='/login'/>}
          />
          <Route
            path="/AddnewCourse"
            element={user ? <AddNewCourse/> : <Navigate to='/login'/>}
          />
        </Routes>
       </div>

       {!excludedRoutes.includes(Location.pathname) && <Footer/>}
    </div>
  );
}

export default App;
