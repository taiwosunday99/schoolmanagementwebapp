import React from 'react';
import  moment  from 'moment';

const ProjectSummary = ({student}) => {
    return (
        <div className='card z-depth-0 project-summary'>
                <div className='card-content grey-text text-darken-3'>
                    <span className='card-title grey-text'>matricNO: {student.matricNo}</span>
                    <p>Welcome {student.firstName} {student.lastName}</p>

                    <p className='grey-text'> FACULTY: {student.faculty }</p>
                    <p className='grey-text'> DEPARTMENT: {student.courseOfStudy }</p>
                    <span className='pink-text text-darken-3'> Registered: {moment(student.createdAt.toDate()).calendar() }</span>
                </div>             
            </div> 
    )
   
}

export const CourseSummary = ({course}) => {
    return (
        <div className='card z-depth-0 project-summary'>
                    <h2>Courses Offered for 100L</h2>
                <div className='card-content grey-text text-darken-3'>
                    <p className='grey-text'> Intro to Biology: {course.biology}</p>
                    <p className='grey-text'> Genetics Chemistry: {course.chemistry}</p>
                    <p className='grey-text'> Computer Fundamental: {course.computer}</p>
                    <p className='grey-text'> General Mathematics: {course.mathematics}</p>
                    <p className='grey-text'> Intro to Commerce: {course.commerce}</p>
                </div>
                
            </div> 
    )
}

export default (ProjectSummary)