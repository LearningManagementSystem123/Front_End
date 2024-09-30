

const TeacherDashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">Teacher Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-bold">Manage Courses</h3>
          {/* Add course management content here */}
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-bold">Grade Submissions</h3>
          {/* Add grading content here */}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
