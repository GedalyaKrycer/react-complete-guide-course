import React, { Component } from 'react';

class Course extends Component {

    state = {
        title: "Course Title"
    }

    componentDidMount() {

        this.queryRender();
    }

    componentDidUpdate() {

        this.queryRender();
    }

    queryRender = () => {
        const query = new URLSearchParams(this.props.location.search);

        let queryTitle = null;

        for (let params of query.entries()) {
            queryTitle = params[1]
        }

        if (this.state.title !== queryTitle) {
            this.setState({ title: queryTitle })
        }

    }


    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;