import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom';

 class SignUp extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        matricNo: '',
        courseOfStudy: '',
       gender: '',
        faculty: ''
    }

    
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        const {  auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}  className='white'>
                    <h5 className='grey-text text-darken-3 center'>Welcome to Student Registration Page</h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange} />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='passwword'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange} />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='matricNo'>MatricNo</label>
                        <input type='number' id='matricNo' onChange={this.handleChange} />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='lastName'>LastName</label>
                        <input type='text' id='lastName' onChange={this.handleChange} />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='firstName'>FirstName</label>
                        <input type='text' id='firstName' onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='courseOfStudy'>Course of Study</label>
                        <input type='text' id='courseOfStudy' onChange={this.handleChange} />
                    </div>

                    <div className='input-field'>
                        <label htmlFor='faculty'>Faculty</label>
                        <input type='text' id='faculty' onChange={this.handleChange} />
                    </div>

                    <p>
                    GENDER <br />
                    <label htmlFor='male'>
                        <input name='gender' id="male" type="radio" onChange={this.handleChange} />
                        <span>Male</span>
                    </label>
                    </p>
                    <p>
                    <label htmlFor='female'>
                        <input name='gender' id="female" type="radio" onChange={this.handleChange} />
                        <span>Female</span>
                    </label>
                    </p>
                    <div className='input-field center'>
                    <button className='btn pink lighten-1 z-depth-0'>Register</button>
                    <div className='red-text center'>
                        { authError ? <p>{ authError }</p> : null }
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newStudent) => dispatch(signUp(newStudent))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
