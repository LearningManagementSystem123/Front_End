

const StudentDashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">Student Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-bold">My Courses</h3>
          {/* Add course content here */}
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-bold">Assignments</h3>
          {/* Add assignment content here */}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
