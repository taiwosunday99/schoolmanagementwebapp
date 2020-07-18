import React from 'react';
import ProjectSummary from './ProjectSummary';
import CourseSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ProjectList = ({projects, students, auth}) => {
    console.log(projects)
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
                )},
            { projects && projects.map(course => {
                console.log(course)
                return (
                    <Link to={'/project/' +  course.id} key={course.id}>
                    <CourseSummary course={course} />
                    </Link>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        courses: state.firestore.ordered.projects
    }
}

export default connect(mapStateToProps)(ProjectList)