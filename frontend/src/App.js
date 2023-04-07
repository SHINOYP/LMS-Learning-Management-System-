import {Routes,Route,useLocation,Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { useEffect } from 'react';
//pages and componets
import Dashboard from './pages/Dashboard';
import Courses from "./pages/Courses";
import Profile from "./pages/Profile"
import Chat  from './pages/Chat';
import Grades  from './pages/Grades';
import Meet from "./pages/Meet";
import Todo from "./pages/Todo";
import AddNewModule from '../src/componets/teach/AddNewModule';
import OpenCourse from './pages/OpenCourse';
import Login from './pages/login';
import Signup from './pages/signup';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';

function App() {
  const Location=useLocation();
  const {user}=useAuthContext();
  //array of excluded objects;
  const excludedRoutes=['/login','/signup','/profile'];
  const excludedRoute=['/profile'];

  //clear local storage when use exits the tab
  // useEffect(() => {
  //   window.onbeforeunload = function() {
  //     localStorage.clear('user');
  //  }
    
  // });
  return (
    <div className="App flex justify-between antialiased "  >
     
      {! excludedRoutes.includes(Location.pathname) && <Navbar/>}
       <div className='pages w-full h-full'>
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
            element={<Login/>}
           /> 
          <Route
            path="/signup"
            element={<Signup/>}
          />
           <Route
            path='/profile'
            element={user ? <Profile/> : <Navigate to='/login'/>}
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
            path="/AddNewModule"
            element={user ? <AddNewModule/> : <Navigate to='/login'/>}
          />
          <Route
            path="/Grades"
            element={user ? <Grades/> : <Navigate to='/login'/>}
          />
        </Routes>
       </div>
        
       {!excludedRoutes.includes(Location.pathname) && <Footer/>}
    </div>
  );
}

export default App;
