import React, { Fragment } from 'react'
import useCourseStore from '../app/courseStore'

const CourseList = () => {
    const { courses, removeCourse, toggleCourseStatus } = useCourseStore((state) => ({
        courses: state.courses,
        removeCourse: state.removeCourse,
        toggleCourseStatus: state.toggleCourseStatus
    }))

    return (
        <Fragment>
            <ul>
                {courses.map((course, i) => {
                    return (
                        <Fragment key={i}>
                            <li className='course-item'
                                style={{ backgroundColor: course.completed ? "green" : "white" }}
                            >
                                <span className='course-item-col-1'>
                                    <input checked={course.completed}
                                        type="checkbox"
                                        onChange={(e) => {
                                            toggleCourseStatus(course.id)
                                        }} />
                                </span>
                                <span style={{color: 'black'}}>{course?.title}</span>
                                <button onClick={()=>{
                                    removeCourse(course.id)
                                }}
                                className='delete-btn'>پاک کردن</button>
                            </li>
                        </Fragment>
                    )
                })}
            </ul>
        </Fragment>
    )
}

export default CourseList