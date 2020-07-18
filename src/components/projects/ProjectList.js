import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ProjectList = ({projects, students, auth}) => {
    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <div className='project-list section'>
             {/* eslint-disable-next-line array-callback-return */}
            { students && students.map((student) => {
                    if (auth.uid === student.id)
                        return (
                            <Link to={'/project/' + student.id} key={student.id}>
                                <ProjectSummary student={student} />
                            </Link>
                        );
                }
                )}
            {/* { projects && projects.map(project => {
                return (
                    <Link to={'/project/' +  project.id} key={project.id}>
                    <ProjectSummary project={project} />
                    </Link>
                )
            })} */}
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(ProjectList)