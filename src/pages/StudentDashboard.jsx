

const StudentDashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">Student Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-bold">My Courses</h3>
          <ul className="mt-2">
            <li className="border-b py-2">Course 1: Introduction to React</li>
            <li className="border-b py-2">Course 2: Advanced JavaScript</li>
            <li className="border-b py-2">Course 3: Data Structures and Algorithms</li>
            <li className="border-b py-2">Course 4: Web Development with Tailwind CSS</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-bold">Assignments</h3>
          <ul className="mt-2">
            <li className="border-b py-2">Assignment 1: Build a Todo App (Due: Oct 10)</li>
            <li className="border-b py-2">Assignment 2: JavaScript Quiz (Due: Oct 15)</li>
            <li className="border-b py-2">Assignment 3: Data Structures Project (Due: Oct 20)</li>
            <li className="border-b py-2">Assignment 4: Tailwind CSS Portfolio (Due: Oct 25)</li>
          </ul>
        </div>
      </div>
    </div>
  );
  
 
};

export default StudentDashboard;
