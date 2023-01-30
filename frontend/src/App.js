import {BrowserRouter ,Routes,Route} from 'react-router-dom';

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
  return (
    <div className="App flex justify-between">
     
      <Navbar/>
       <div className='pages'>
        <Routes>
          <Route
          path="/"
          element={<Dashboard/>}
          />
          < Route path="/login" element={<Login/>} />
         
          <Route
          path="/Signup"
          element={<Signup/>}
          />
          <Route
          path='/Courses'
          element={<Courses/>}
          />
          <Route
          path='/Chat'
          element={<Chat/>}
          />
          <Route
          path='/Meet'
          element={<Meet/>}
          />
          <Route
          path="/OpenCourse"
          element={<OpenCourse/>}
          />
          <Route
          path="/Todo"
          element={<Todo/>}
          />
          <Route
          path="/AddnewCourse"
          element={<AddNewCourse/>}
          />
        </Routes>
       </div>
       <Footer/>
    </div>
  );
}

export default App;
