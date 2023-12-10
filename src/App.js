import { Route, Routes } from "react-router-dom";
import Courses from "./components/Courses";
import Sidebar from "./components/Sidebar";
import Student from "./components/Student";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import AddCourse from "./components/AddCourse";
import UpdateCourse from "./components/UpdateCourse";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="dashboard">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/student" element={<Student />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/update-student" element={<UpdateStudent />} />
          <Route path="/update-course" element={<UpdateCourse />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
