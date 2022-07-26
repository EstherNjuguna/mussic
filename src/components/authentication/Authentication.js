import React, { useState } from "react";



function Authentication() {

  // for users
  const [users, setUsers] = useState([])

  // for value inputs in the form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  // capture changes that happen to the inputs
  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  // add new user to the database
  function onAddUser(newUser) {
    setUsers([...users, newUser])
  }

  // submit the form successfully to the database
  function handleSubmit(event) {
    event.preventDefault();
    fetch("", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({firstName: formData.firstName, lastName: formData.lastName, email: formData.email,
      password: formData.password, confirmPassword: formData.confirmPassword})
    })
    .then(response => response.json())
    .then(data => {
      onAddUser(data)
      setFormData({...formData, firstName: "", lastName: "", email: "", password: "", confirmPassword: ""})
      console.log(data)
      alert(`Welcome ${formData.firstName} ${formData.lastName}`)
    })
  }


  // signup form
  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2 id="h2">Create Account</h2>
      <input onChange={handleChange} name="firstName" type="text" value={formData.firstName} placeholder="FirstName" required id="firstname"/>
      <input onChange={handleChange} name="lastName" type="text" value={formData.lastName} placeholder="LastName" required />
      <input onChange={handleChange} name="email" type="email" value={formData.email} placeholder="Email" required />
      <input onChange={handleChange} name="password" type="password" value={formData.password} placeholder="Password" required />
      <input onChange={handleChange} name="confirmPassword" type="password" value={formData.confirmPassword} placeholder="Confirm Password" required />
      <button type="submit">SignUp</button>
      <p>Have an account?<button>Login</button></p>
    </form>
  );
}

export default Authentication;