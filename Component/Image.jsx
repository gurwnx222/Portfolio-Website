import React from 'react';
import '/stylesheet/Image.css'; // Correct path if necessary

const Image = () => {
  return (
    <>
      <div className='img-container'> 
        <img 
          src='https://media.istockphoto.com/id/1193288605/photo/computer-and-bookshelves-in-modern-library.jpg?s=612x612&w=0&k=20&c=fSkPFOMdgbF-VE5wsVhb6KF8srgmE0dpBoCu7OsSjJg=' 
          alt='Library' 
        />
      </div>
      <div className='img-container2'>                                                              
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIOSGJKJc6lCHF-3VPmMv6uG1GqIrzGxfuGA&s'></img>
      </div>
    </>
  );
}

export default Image;
