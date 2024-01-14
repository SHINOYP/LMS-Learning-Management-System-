import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Grades from "./pages/Grades";
import Meet from "./pages/Meet";
import Todo from "./pages/Todo";
import AddNewModule from "../src/componets/teach/AddNewModule";
import OpenCourse from "./pages/OpenCourse";
import StudentsList from "./pages/StudentsList";
import Login from "./pages/Auth/login";
import Signup from "./pages/Auth/signup";

function App() {
  const { user } = useAuthContext();
  useEffect(() => {
    localStorage.removeItem("user");
  }, []);
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/Dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />

        <Route
          path="/Courses"
          element={user ? <Courses /> : <Navigate to="/login" />}
        />
        <Route
          path="/Chat"
          element={user ? <Chat /> : <Navigate to="/login" />}
        />
        <Route
          path="/Meet"
          element={user ? <Meet /> : <Navigate to="/login" />}
        />
        <Route
          path="/OpenCourse"
          element={user ? <OpenCourse /> : <Navigate to="/login" />}
        />
        <Route
          path="/Todo"
          element={user ? <Todo /> : <Navigate to="/login" />}
        />
        <Route
          path="/AddNewModule"
          element={user ? <AddNewModule /> : <Navigate to="/login" />}
        />
        <Route
          path="/Grades"
          element={user ? <Grades /> : <Navigate to="/login" />}
        />
        <Route
          path="/Student-List"
          element={user ? <StudentsList /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
