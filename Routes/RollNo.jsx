// src/RollNo.js
import React, { useState } from 'react';
import '/stylesheet/RollNo.css'; // Import the CSS file

const RollNo = () => {
  const [rollNo, setRollNo] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  const handleRollNoChange = (event) => {
    setRollNo(event.target.value);
  };

  const handleFetchInfo = () => {
    // Mock data for demonstration. Replace this with actual data fetching logic.
    const mockData = {
      '679': { name: 'Harmanpreetsingh', course: 'Dca in computer application', certificateImage: '/Images/HARMAN.pdf' },
      '678': { name: 'Navdeep Kaur', course: 'DCA in Computer Science', certificateImage: '/Images/navdeep kaur.pdf' },
    };

    setUserInfo(mockData[rollNo] || null);
  };

  const generateCertificate = () => {
    if (userInfo && userInfo.certificateImage) {
      // Create a download link and trigger a download
      const link = document.createElement('a');
      link.href = userInfo.certificateImage;
      link.download = 'certificate.pdf';
      link.click();
    }
  };

  return (
    <div className="container">
      <h1 className="header">Roll Number Info and Certificate</h1>
      <div className="input-group">
        <input
          type="text"
          value={rollNo}
          onChange={handleRollNoChange}
          placeholder="Enter Roll Number"
        />
        <button onClick={handleFetchInfo}>Fetch Info</button>
      </div>

      {userInfo && (
        <div className="user-info">
          <h2>User Information</h2>
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Course:</strong> {userInfo.course}</p>
          {userInfo.certificateImage && (
            <div className="certificate">
              <img
                src={userInfo.certificateImage}
                alt="Certificate"
                className="certificate-image"
              />
              <button onClick={generateCertificate}>Download Certificate</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RollNo;
