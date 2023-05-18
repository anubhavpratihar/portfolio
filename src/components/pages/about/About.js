import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h4 className="mt-bottom">
            <strong>ABOUT ME</strong>
            </h4>
          
          <p className="grey-text">
           Highly skilled and motivated professional with a strong background in Electronics and Communication.
            Experienced in various aspects of software development, including Web, iOS, Android, and Game Development.
             Proficient in React.js, Next.js, Node.js, and Express.js for front-end development, 
             with expertise in creating responsive interfaces and dynamic user experiences. Solid knowledge of back-end development, 
             integrating databases like MongoDB and MySQL. A collaborative team player with excellent problem-solving skills,
              committed to continuous learning and staying updated with industry trends. Seeking a challenging role to l
              everage technical expertise and contribute to innovative projects in the field of software development.
          </p>
        </div>
        <div className="card-action">
          <h4>
            <strong>PERSONAL INFO</strong>
          </h4>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Bengaluru, India.
              </p>
              <p>
                <strong>Email:</strong> anubhavsinghpratihar@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 8971644895
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - English
              </p>
              <p>
                <strong>Second Language</strong> - Hindi
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
