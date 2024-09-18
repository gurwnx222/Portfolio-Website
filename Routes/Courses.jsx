// src/components/Courses.js
import React, { useState } from 'react';
import '/stylesheet/Courses.css';

// Sample course data for DCA
const dcaCourses = [
  { id: 1, title: 'Computer Basics', description: 'In this course you learn ms-excel, ms-word, tally, powerpoint. corel-draw ,adobe photoshop.', duration: '1 year', fees: 1500},
  { id: 2, title: 'Graphic Designing', description: 'In this course you learn to design high-quality graphics.', duration: '2 months', fees:  1500},
  { id: 3, title: 'Web Development Fundamentals', description: 'Introduction to web development, including HTML, CSS, and JavaScript.', duration: '8 months', fees:  1500},
  { id: 4, title: 'Tally with GST', description: 'In-depth study of Tally with  advanced GST', duration: '5 months', fees:  1500 },
  { id: 5, title: 'Computer Programming', description: 'Learn the fundamentals of computer programming, including Python, PHP, Java.', duration: '6 months', fees:  1500 },
   { id: 6, title: 'English Spoken', description: 'Fluent in English with compressive Grammer and literature', duration: '6 months', fees: 1500 }
  ];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleShow = (course) => setSelectedCourse(course);
  const handleClose = () => setSelectedCourse(null);

  return (
    <div className="courses-container">
      <h2 className="courses-title">Computer Courses</h2>
      <div className="courses-list">
        {dcaCourses.map(course => (
          <div key={course.id} className="course-card">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <p className="course-duration"><strong>Duration:</strong> {course.duration}</p>
            <p className="course-fees"><strong>2 Months fees:</strong> {course.fees}</p>
            <button className="details-button" onClick={() => handleShow(course)}>More Details</button>
          </div>
        ))}
      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedCourse.title}</h2>
            <p><strong>Description:</strong> {selectedCourse.description}</p>
            <p><strong>Duration:</strong> {selectedCourse.duration}</p>
            {/* Add more detailed information here if needed */}
            <button className="modal-close-button" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
