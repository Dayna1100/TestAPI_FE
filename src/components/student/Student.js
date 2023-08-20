import React, { Component } from  "react";

class Student extends Component {
    //set up initial state to hold data we want to display from student
state = {
    id: "",
    first_name: "",
    last_name: ""
};

//when component displays/mounts get student from API
componentDidMount() {
    //get students id from url to make api call
    const id = this.props.match.params.id;

    this.getStudent(id)
}

getStudent = (studentId) => {
    //use fetch to make api call and get specific student - returns a promise
    fetch(`http://localhost:4000/api/students/${studentId}`)
    // on success of fetch turn response into JSON
    .then((response) => response.json())
    // on success of json data, lets add data to update state from api causing
    //page to re-render
    .then((data) => {
        this.setState({
            ...data
        });
    })
    //handle any errors getting data from API
    .catch((error) => {
        console.log(error)
    });
}
render() {
    //display student data that is in state
    return(
        <section>
            <h1>{this.state.name}'s Details</h1>
            <h2>This is student #{this.state.id}</h2>
            <div>Done for now</div>
        </section>
    );
}
}

export default Student;