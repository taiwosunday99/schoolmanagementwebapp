import React from 'react';

const ProjectSummary = ({student}) => {
    return (
        <div className='card z-depth-0 project-summary'>
                <div className='card-content grey-text text-darken-3'>
                    <span className='card-title grey-text'>matricNO: {student.matricNo}</span>
                    <p>Welcome {student.firstName} {student.lastName}</p>

                    <p className='grey-text'> FACULTY: {student.faculty }</p>
                    <p className='grey-text'> DEPARTMENT: {student.courseOfStudy }</p>
                </div>
                
            </div>
            
    )
}

export default ProjectSummary