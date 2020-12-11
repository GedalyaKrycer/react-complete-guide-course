import React, { Component } from 'react';
import Course from '../Course/Course';
import {
    Route,
    // Link 
} from 'react-router-dom';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseClickHandler = (id) => {

        const coursesCopy = [...this.state.courses];

        const selectedCourse = coursesCopy.filter(course => course.id === id);


        this.props.history.push(`/courses/${id}?title=${selectedCourse[0].title}`);
    }

    componentDidMount() {
        console.log(this.props);
    }

    componentDidUpdate() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return <article
                                className="Course"
                                key={course.id}
                                onClick={() => this.courseClickHandler(course.id)}
                            >{course.title}</article>;
                        })
                    }
                    {/* ALT VERSION */}
                    {/* {
                        this.state.courses.map(course => {
                            return (
                                <Link to={`/${course.id}?title=${course.title}`} key={course.id}>
                                    <article
                                        className="Course"

                                    >
                                        {course.title}
                                    </article>
                                </Link>
                            );
                        })
                    } */}
                </section>

                <Route
                    path={this.props.match.url + '/:id'}
                    exact
                    component={Course}
                />


            </div>
        );
    }
}

export default Courses;