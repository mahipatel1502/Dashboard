// import React, { useState } from 'react';
// import './LoginPage.css';  // Assuming you have a CSS file for styling

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Simple validation
//     if (!email || !password) {
//       setError('Please fill in both fields.');
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setError('Please enter a valid email.');
//       return;
//     }

//     // Placeholder for login logic
//     console.log('Email:', email);
//     console.log('Password:', password);

//     // Reset fields after successful login (for demonstration purposes)
//     setEmail('');
//     setPassword('');
//     setError('');
//   };

//   return (
//     <div className="login-container">
//       <h2 className="login-title">Login</h2>
//       {error && <p className="login-error">{error}</p>}
//       <form className="login-form" onSubmit={handleLogin}>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="form-input"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <div className="password-container">
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-input"
//               placeholder="Enter your password"
//             />
//             <button
//               type="button"
//               className="password-toggle"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? 'Hide' : 'Show'}
//             </button>
//           </div>
//         </div>
//         <button type="submit" className="login-button">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
import React from 'react';
import './LoginPage.css';

const handleSubmit = async (event, action) => {
    event.preventDefault();
    console.log("Submitting form for action:", action);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("Form data:", data);

    try {
      const response = await fetch(`http://localhost:3001/${action}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      console.log("Response from server:", result);

      if (response.ok) {
        alert(result.message || 'Operation successful!');
        // if (action === 'login') {
        //   navigate('/home');
        // }
      } else {
        alert(result.error || 'Something went wrong!');
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("Failed to connect to the server. Please try again later.");
    }
  };

function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={(e) => handleSubmit(e, 'login')}>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="#" onClick={() => window.location.href='/signup'}>Sign up</a></p>
            </div>
        </div>
    );
}

export default Login;
