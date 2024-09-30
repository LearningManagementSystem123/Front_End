import  { useState } from 'react';

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState('');

  const handleAddCourse = () => {
    if (newCourse) {
      setCourses([...courses, newCourse]);
      setNewCourse('');
    }
  };

  const handleDeleteCourse = (courseName) => {
    setCourses(courses.filter(course => course !== courseName));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">Manage Courses</h2>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="New Course Name"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mt-2"
          onClick={handleAddCourse}>
          Add Course
        </button>
      </div>
      <ul className="list-disc ml-6">
        {courses.map(course => (
          <li key={course} className="flex justify-between">
            {course}
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleDeleteCourse(course)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseManagement;
