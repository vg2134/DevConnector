import React, { Fragment, useState} from 'react';
import { Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../action/auth';

//import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });
    
    const { email,password}= formData;

    const onchange = e => setFormData({...formData, [e.target.name]:e.target.value});
    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
  
            // Example to save the data in mongodb by the form.
            // const newUser={
            //     name,
            //     email,
            //     password,
            //     password2
            // }
            // try {
            //     const config={
            //         headers:{
            //             'Content-Type': 'application/json'
            //         }
            //     }
            //     const body=JSON.stringify(newUser);

            //     const res = await axios.post('api/users', body,config);
            //     console.log(res.data);
            // } catch (err) {
            //     console.error(err.response.data);
            // }
    }
    if(isAuthenticated){
      return <Redirect to= "/dashboard"/>
    }
    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
      <form className="form" onSubmit={e=> onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e=> onchange(e)} required/>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password} onChange={e=> onchange(e)} required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
        </Fragment>
    )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}
export default connect (mapStateToProps, { login })(Login);