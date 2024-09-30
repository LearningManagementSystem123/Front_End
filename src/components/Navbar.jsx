
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">LMS</h1>
        <div className="space-x-4">
          <Link to="/student-dashboard" className="hover:underline">Student Dashboard</Link>
          <Link to="/teacher-dashboard" className="hover:underline">Teacher Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
