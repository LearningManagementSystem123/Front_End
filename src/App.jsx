
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import Navbar from './components/Navbar';
import CourseManagement from './pages/CourseManagement';
import CourseList from './pages/CourseList';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher-dashboard/manage-courses" element={<CourseManagement />} />
          <Route path="/student-dashboard/enroll-courses" element={<CourseList />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
