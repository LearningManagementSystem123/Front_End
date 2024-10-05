// import  { useState } from 'react';

// const TeacherDashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const [courseName, setCourseName] = useState('');
//   const [submissions, setSubmissions] = useState([
//     { studentName: 'John Doe', assignment: 'Math Assignment', grade: '' },
//     { studentName: 'Jane Smith', assignment: 'Science Project', grade: '' },
//   ]);

//   // Function to add a course
//   const addCourse = () => {
//     if (courseName.trim()) {
//       setCourses([...courses, courseName]);
//       setCourseName('');
//     }
//   };

//   // Function to handle grading
//   const handleGradeChange = (index, grade) => {
//     const updatedSubmissions = [...submissions];
//     updatedSubmissions[index].grade = grade;
//     setSubmissions(updatedSubmissions);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-semibold mb-4">Teacher Dashboard</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
//         {/* Manage Courses Section */}
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h3 className="text-xl font-bold mb-2">Manage Courses</h3>
//           <input
//             type="text"
//             className="border p-2 w-full mb-2"
//             placeholder="Enter course name"
//             value={courseName}
//             onChange={(e) => setCourseName(e.target.value)}
//           />
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//             onClick={addCourse}
//           >
//             Add Course
//           </button>
//           <div className="mt-4">
//             <h4 className="text-lg font-semibold">Course List:</h4>
//             {courses.length === 0 ? (
//               <p className="text-gray-500">No courses added yet.</p>
//             ) : (
//               <ul className="list-disc ml-5">
//                 {courses.map((course, index) => (
//                   <li key={index} className="mt-1">
//                     {course}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>

//         {/* Grade Submissions Section */}
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h3 className="text-xl font-bold mb-2">Grade Submissions</h3>
//           <div className="mt-2">
//             {submissions.map((submission, index) => (
//               <div key={index} className="border-b mb-4 pb-2">
//                 <p className="text-lg font-semibold">
//                   {submission.studentName} - {submission.assignment}
//                 </p>
//                 <input
//                   type="text"
//                   className="border p-2 w-full mb-2"
//                   placeholder="Enter grade"
//                   value={submission.grade}
//                   onChange={(e) => handleGradeChange(index, e.target.value)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TeacherDashboard;

import { useState, useEffect } from 'react';
import axios from 'axios';

const TeacherDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/courses').then((response) => {
      setCourses(response.data);
    });
    axios.get('http://localhost:3000/submissions').then((response) => {
      setSubmissions(response.data);
    });
  }, []);

  const addCourse = () => {
    if (courseName.trim()) {
      axios.post('http://localhost:3000/courses', { name: courseName }).then((response) => {
        setCourses([...courses, response.data]);
        setCourseName('');
      });
    }
  };

  const handleGradeChange = (id, grade) => {
    axios.put(`http://localhost:3000/submissions/${id}`, { grade }).then((response) => {
      setSubmissions(submissions.map((submission) => (submission._id === id ? response.data : submission)));
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">Teacher Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">Manage Courses</h3>
          <input
            type="text"
            className="border p-2 w-full mb-2"
            placeholder="Enter course name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addCourse}>
            Add Course
          </button>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Course List:</h4>
            {courses.length === 0 ? (
              <p className="text-gray-500">No courses added yet.</p>
            ) : (
              <ul className="list-disc ml-5">
                {courses.map((course) => (
                  <li key={course._id} className="mt-1">
                    {course.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">Grade Submissions</h3>
          <div className="mt-2">
            {submissions.map((submission) => (
              <div key={submission._id} className="border-b mb-4 pb-2">
                <p className="text-lg font-semibold">
                  {submission.studentName} - {submission.assignment}
                </p>
                <input
                  type="text"
                  className="border p-2 w-full mb-2"
                  placeholder="Enter grade"
                  value={submission.grade}
                  onChange={(e) => handleGradeChange(submission._id, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;