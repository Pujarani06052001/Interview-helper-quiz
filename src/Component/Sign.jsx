// import { useState } from 'react';
// import './Sign.css';

// function SignIN() {
//   const [isSignUp, setIsSignUp] = useState(false);

//   return (
//     <>
//       <div className="sign-container">
//         <div className="left_box">
//           <img src='https://www.southmoorschool.co.uk/wp-content/uploads/job_interview_illustration.jpg' alt=''></img>
//           <div className='text'>
//             <h2>Welcome to AI interview</h2>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.</p>
//           </div>
//         </div>

//         {!isSignUp ? (
//           <div className="sign_box">
//             <h2>Login</h2>
//             <p>Username<input type='text'></input></p>
//             <p>Email Id <input type='text'></input></p>
//             <p>password<input type='password'></input></p>
//             <div className='button'>
//                 <button className='button_1'>submit</button>
//               <button className='button_2' onClick={() => setIsSignUp(true)}>SignUp
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="sign_box">
//             <h2>Sign Up</h2>
//             <p>Full Name <input type='text'></input></p>
//             <p>Username <input type='text'></input></p>
//             <p>Email Id <input type='text'></input></p>
//             <p>Password <input type='password'></input></p>
//             <div className='button'>
//                 <button className='button_1'>Register</button>
//               <button className='button_2' onClick={() => setIsSignUp(false)}>Back to Login
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default SignIN;





import { useState } from 'react';
import './Sign.css';

function SignIN() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="sign-container">
      <div className="left_box">
        <img src="https://www.southmoorschool.co.uk/wp-content/uploads/job_interview_illustration.jpg" alt="Interview" />
        <div className="text">
          <h2>Welcome to AI Interview</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      {!isSignUp ? (
        <div className="sign_box">
          <h2>Login</h2>
          <p>Username <input type="text" /></p>
          <p>Email Id <input type="text" /></p>
          <p>Password <input type="password" /></p>
          <div className="button">
            <button className="button_1">Submit</button>
            <button className="button_2" onClick={() => setIsSignUp(true)}>Sign Up</button>
          </div>
        </div>
      ) : (
        <div className="sign_box">
          <h2>Sign Up</h2>
          <p>Full Name <input type="text" /></p>
          <p>Username <input type="text" /></p>
          <p>Email Id <input type="text" /></p>
          <p>Password <input type="password" /></p>
          <div className="button">
            <button className="button_1">Register</button>
            <button className="button_2" onClick={() => setIsSignUp(false)}>Back to Login</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIN;
