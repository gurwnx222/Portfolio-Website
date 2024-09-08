import React from 'react';
import Typewriter from 'typewriter-effect';
import '/stylesheet/Text.css';  // Ensure the path is correct

const Text = () => {
  return (
    <>
      <div className="text-container">
        <h1 className="text">
          Hi, My Name is <span id='g-text'>Gaurav </span>
          
          <br/>and I am a Expert in
          <Typewriter
             options={{
              strings: [,'Graphic Designer', 'Video Editor', 'Website Developer', 'Creator'],
               
              autoStart: true,
              loop: true,
              delay: 75,
            }} 
            onInit={(typewriter) => {
              typewriter
                .changeDelay(75)
                .typeString('<span class="t-text">Graphic Designer</span>')
                .pauseFor(1000)
                .deleteAll()
                .typeString('<span class="t-text">Video Editor</span>')
                .pauseFor(1000)
                .deleteAll()
                .typeString('<span class="t-text">Website Developer</span>')
                .pauseFor(1000)
                .deleteAll()
                .typeString('<span class="t-text">Creator</span>')
                .pauseFor(1000)
                .start();
            }}
          />
        </h1>
      </div>
    </>
  );
};

export default Text;
