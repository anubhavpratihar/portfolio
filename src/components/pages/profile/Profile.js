import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/profile_img.png';

export default function Profile() {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img className="activator" src={ImgProfile} alt="Anubhav Pratihar" />
          <Link className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons activator">more_vert</i>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4"><h5 className="c3">Anubhav Pratihar</h5></span>
          
          <p>Full Stack Web Developer</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Follow Me
            <i className="material-icons right">close</i>
          </span> 
          <p className="flex-container">
            <i className="fab fa-facebook-f grey-text text-darken-4 social_style"></i>
            <i className="fab fa-twitter grey-text text-darken-4 social_style"></i>
            <i className="fab fa-google-plus-g grey-text text-darken-4 social_style"></i>
            <i className="fab fa-instagram grey-text text-darken-4 social_style"></i>
            <i className="fab fa-pinterest grey-text text-darken-4 social_style"></i>
          </p>
        </div>
      </div>

<div className="card">
        <div className="card-content">
          <h5 className='c2' >
            <strong>PROJECTS</strong>
          </h5>
          <ul className="collection">
            <li className="collection-item">
            <a href="https://inquisitive-croquembouche-9e2b66.netlify.app">
            <h6 className="noPadding">Google Keep App</h6>
            </a>
            </li>
            <li className="collection-item">
            <a className="x1" href="https://eloquent-dolphin-e0d996.netlify.app">
            <h6 className="noPadding">Amazon Shopping App</h6>
            </a>
            </li>
            <li className="collection-item">
            <a className="x1" href="https://imaginative-puffpuff-5c236d.netlify.app">
            <h6 className="noPadding">Youtube App</h6>
            </a>
            </li>
            <li className="collection-item">
            <a className="x1" href="https://sage-lokum-30d2b4.netlify.app">
            <h6 className="noPadding">OTT App</h6>
            </a>
            </li>
            <li className="collection-item">
            <a className="x1" href="https://tangerine-meringue-649b74.netlify.app">
            <h6 className="noPadding">Cocktail App</h6>
            </a>
            </li>
            <li className="collection-item">
            <a className="x1" href="https://warm-fenglisu-988100.netlify.app"> 
            <h6 className="noPadding">To-Do-List App</h6>
            </a>
            </li>
            <li className="collection-item">
            <a className="x1" href="https://chimerical-blini-ed9789.netlify.app">
               <h6 className="noPadding">Rock Paper Scissor Game</h6>
            </a>
            </li>
            <li className="collection-item">
            <a className="x1" href="https://preeminent-choux-287f56.netlify.app">
               <h6 className="noPadding">Simon Game</h6>
            </a>
            </li>
            <li className="collection-item">
            <a className="x1" href="https://dashing-unicorn-ae6639.netlify.app">
               <h6 className="noPadding">DrumKit App</h6>
            </a>
            </li>
            <li className="collection-item">
            <a className="x1" href="https://fancy-pika-1a9d2c.netlify.app">
               <h6 className="noPadding">Chat App</h6>
            </a>
            </li>
            <li className="collection-item">
            <a className="x1" href="https://tiny-pegasus-51ce15.netlify.app">
               <h6 className="noPadding">TinDog</h6>
            </a>
            </li>
          </ul>
        </div>
      </div>

    
      <div className="card">
        <div className="card-content">
          <h5 className='c2'>
            <strong>CERTIFICATIONS</strong>
          </h5>
          <ul className="collection">

          <li className="collection-item">
              <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-498fbfeb-bf4d-444c-88a7-1464bc9a3a59.jpg">
              <h6 className="noPadding"> ReactJs </h6>
              </a>
            </li>

          <li className="collection-item">
              <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-18da3eae-58d8-4e6c-bd65-3ea3e30e0770.jpg">
              <h6 className="noPadding"> NodeJs </h6>
              </a>
            </li>

          <li className="collection-item">
              <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-82860d14-1418-4b90-8da0-4977ea626962.jpg">
              <h6 className="noPadding"> Flutter</h6>
              </a>
            </li>


            <li className="collection-item">
              <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-d0208c75-aad2-47b2-8fe1-5fad9baae1f1.jpg">
                <h6 className="noPadding"> Python Programming Language </h6>
              </a>
            </li>


            <li className="collection-item">
              <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-afc944d6-ba5c-45b0-b5c0-9a57f67c42b3.jpg">
              <h6 className="noPadding">Python for Data Science and Machine Learning </h6>
              </a>
              
            </li>

            <li className="collection-item">
              <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-fa7fc742-a1e3-47c2-a362-334bc52d4c25.jpg">
              <h6 className="noPadding">C Programming Language</h6>
              </a>
            </li>
            
            <li className="collection-item">
              <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-a5028d12-b336-4d71-85d9-169bda59c26b.jpg">
              <h6 className="noPadding">Linux</h6>
              </a>
            </li>


            <li className="collection-item">
              <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-0e24ff79-e48e-46c9-96e5-d05f58c26413.jpg">
              <h6 className="noPadding">IOS Development</h6>
              </a>
            </li>
            
            
            <li className="collection-item">
              <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-bb313161-904f-4636-9207-a00b89b800da.jpg">
              <h6 className="noPadding">Advanced DSA</h6>
              </a>
            </li>
            <li className="collection-item">
              <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-f7e0f9ce-ed16-4d5b-ae77-d0eb7599ed8f.jpg">
              <h6 className="noPadding">SQL</h6>
              </a>
            </li>

            <li className="collection-item">
              <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-663306d0-6ac8-48f7-bce8-0cd8043b0462.jpg">
              <h6 className="noPadding">AWS Developer Associate</h6>
              </a>
            </li>
            
            
            
           
          </ul>
        </div>
      </div>

      
      

    </div>
  );
}
