import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate=useNavigate();

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
        if (action === 'login') {
          navigate('/home');
        }
      } else {
        alert(result.error || 'Something went wrong!');
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("Failed to connect to the server. Please try again later.");
    }
  };


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