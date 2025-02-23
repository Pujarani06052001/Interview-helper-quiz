
// import { useState } from 'react';
// import './Sign.css';

// function SignIN() {
//   const [isSignUp, setIsSignUp] = useState(false);

//   return (
//     <div className="sign-container">
//       <div className="left_box">
//         <img src="https://www.southmoorschool.co.uk/wp-content/uploads/job_interview_illustration.jpg" alt="Interview" />
//         <div className="text">
//           <h2>Welcome to AI Interview</h2>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         </div>
//       </div>

//       {!isSignUp ? (
//         <div className="sign_box">
//           <h2>Login</h2>
//           <p>Username <input type="text" /></p>
//           <p>Email Id <input type="text" /></p>
//           <p>Password <input type="password" /></p>
//           <div className="button">
//             <button className="button_1">Submit</button>
//             <button className="button_2" onClick={() => setIsSignUp(true)}>Sign Up</button>
//           </div>
//         </div>
//       ) : (
//         <div className="sign_box">
//           <h2>Sign Up</h2>
//           <p>Full Name <input type="text" /></p>
//           <p>Username <input type="text" /></p>
//           <p>Email Id <input type="text" /></p>
//           <p>Password <input type="password" /></p>
//           <div className="button">
//             <button className="button_1">Register</button>
//             <button className="button_2" onClick={() => setIsSignUp(false)}>Back to Login</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// export default SignIN;






import { useState } from "react";
import "./Sign.css";

function SignIN() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle SignUp
  const handleSignUp = () => {
    if (!formData.fullName || !formData.username || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("SignUp Successful!");
    setIsSignUp(false);
  };

  // Handle Login
  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      alert("Login Successful!");
    } else {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <div className="sign-container">
      <div className="left_box">
        <img
          src="https://www.southmoorschool.co.uk/wp-content/uploads/job_interview_illustration.jpg"
          alt="Interview"
        />
        <div className="text">
          <h2>Welcome to AI Interview</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      {!isSignUp ? (
        <div className="sign_box">
          <h2>Login</h2>
          <p>
            Email Id <input type="text" name="email" value={formData.email} onChange={handleChange} />
          </p>
          <p>
            Password <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </p>
          <div className="button">
            <button className="button_1" onClick={handleLogin}>Submit</button>
            <button className="button_2" onClick={() => setIsSignUp(true)}>Sign Up</button>
          </div>
        </div>
      ) : (
        <div className="sign_box">
          <h2>Sign Up</h2>
          <p>
            Full Name <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          </p>
          <p>
            Username <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </p>
          <p>
            Email Id <input type="text" name="email" value={formData.email} onChange={handleChange} />
          </p>
          <p>
            Password <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </p>
          <div className="button">
            <button className="button_1" onClick={handleSignUp}>Register</button>
            <button className="button_2" onClick={() => setIsSignUp(false)}>Back to Login</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIN;
