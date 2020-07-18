import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props, auth) => {
       console.log(auth)
    return (
        <ul className='right'>
            <li><NavLink to='/create'>Course-Reg</NavLink></li>
        <li> <button onClick={props.signOut}>Log Out</button></li>
        <li><NavLink to='/' className='btn btn-floating pint lighten-1'>{props.auth.email}</NavLink></li>
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut(dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
