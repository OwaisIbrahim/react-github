import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;

  const onValueChangeHandler = event =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = async event => {
    event.preventDefault();
    if (password !== password2) {
      console.log('Password do not match');
    } else {
      const newUser = {
        name,
        email,
        password,
      };

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post(
          'http://localhost:5000/api/users',
          body,
          config
        );
        console.log(res.data);
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={event => onSubmit(event)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={event => onValueChangeHandler(event)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={event => onValueChangeHandler(event)}
            required
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={event => onValueChangeHandler(event)}
            minLength="6"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={event => onValueChangeHandler(event)}
            minLength="6"
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </Fragment>
  );
};

export default Register;
