import React, { useState } from 'react';

const CourseList = () => {
  const availableCourses = ['Math', 'Science', 'History', 'English'];
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (courseName) => {
    if (!enrolledCourses.includes(courseName)) {
      setEnrolledCourses([...enrolledCourses, courseName]);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">Available Courses</h2>
      <ul className="list-disc ml-6">
        {availableCourses.map(course => (
          <li key={course} className="flex justify-between">
            {course}
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded"
              onClick={() => handleEnroll(course)}>
              Enroll
            </button>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold mt-6">Enrolled Courses</h3>
      <ul className="list-disc ml-6">
        {enrolledCourses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
