import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

export class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const { projects, auth, students } = this.props;
        console.log(students)
        if (!auth.uid) return <Redirect to='/signin' />
            
        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>
                    <ProjectList projects={projects} />
                    <ProjectList students={students} />
                    </div>
                    <div className='col s12 m5 offset-m1'>
                            <Notifications />
                        </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        projects: state.firestore.ordered.projects,
        students: state.firestore.ordered.students,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' },
        { collection: 'students' }
    ])
)(Dashboard)
