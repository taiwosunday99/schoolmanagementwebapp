import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

export class Dashboard extends Component {
    render() {
        const { projects, auth, students } = this.props;
        console.log(projects)
        // console.log(id)
        if (!auth.uid) return <Redirect to='/signin' />      
        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>
                    <ProjectList students={students} /> 
                                   
                    </div>
                    {/* <div className='col s12 m5 offset-m1'>  
                    <ProjectList projects={projects} />                    
                            <Notifications />
                        </div> */}
                </div>
                { projects && projects.map(project => {
                    return (
                           <ul className="collection" key={project.id}>
                           <h1 className='pink-text center'>Courses Offered</h1>
                <li className="collection-item">
                    {project.biology}                    
                </li>
                <li className="collection-item">
                    {project.chemistry}                   
                </li>
                <li className="collection-item">
                    {project.mathematics}                    
                </li>
                <li className="collection-item">
                    {project.commerce}                    
                </li>
                <li className="collection-item">
                    {project.computer}                    
                </li>
                </ul>
                    )
                })}
            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        students: state.firestore.ordered.students,
        courses: state.firestore.ordered.projects,
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
