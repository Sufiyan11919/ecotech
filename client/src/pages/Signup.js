import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const Signup = () =>{
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    department: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  let name, value;
  const handleChange = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value});
  }

  const postData = async (e) =>{
    e.preventDefault();
    const {name, department, email, password, confirmPassword} = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, department, email, password, confirmPassword
      })
    });

    const data = await res.json();
    if(data.status === 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate("/login");
    }
  }
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form method='POST' onSubmit={postData}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">
            Department
          </label>
          <input
            type="text"
            className="form-control"
            id="department"
            name="department"
            value={user.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" value="register" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
