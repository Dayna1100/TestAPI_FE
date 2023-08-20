import React, { Component } from "react";
//bring in link from react-router-dom so we can link to the specific users
import { Link } from "react-router-dom"

class StudentList extends Component {
    //set up initial state
    state = {
        loading: true,
        students: [],
    };
    //when component mounts (displays on screen) make a fetch to API 
    //lifecycle hook that runs when component is diplayed
    componentDidMount() {
        this.getStudents()
    }  
    getStudents = () => {
        // make an http request to fetch student api running on localhost:4000
       fetch("http://localhost:4000/students")
       //when that finishes, take the results and turn into json
        .then((response) => response.json())
        //on success of turning results into json do something with the data
        .then(data => {
            //console.log(data)
            //swaps out student data in state above with the data from BE API
            this.setState({
                students: data,
                loading: false
            });
        })  
        //catches error message or failures getting data from API
        .catch((error) => {
            console.log(error.message)
    });
    }
    //add render method 
    render() {
    //using map loop through students in state that come back from API
    //and build array of students storing them in studentTableRows
    const studentTableRows = this.state.students.map((student, index) => {
        return (
            <tr key={index}>
                {/* link to student component with id so we can info in API and display data  */}
            <td>{student.id}</td>
            <td>{student.first_name}</td>
            <td>{student.last_name}</td>
              {/* row in table with admin links related to individual students. */}
              <td>
                        <Link to={`/student/${student.id}`}>View</Link><br></br>
                        <Link to={`/update/student/${student.id}`}>Update</Link><br></br>
                        <button onClick={() => this.handleDelete(student.id)}>Delete</button>
                    </td>
            </tr>
            );
    });  
    //display data to user 
    return (
        <section>
            <h2>Welcome to Student Directory</h2>
           
           <Link to="/create/student">Add New Student</Link>
           <br></br>
            <table>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.loading ? <tr><td colSpan="6">Loading...</td></tr> : studentTableRows}
                </tbody>
            </table>
        </section>
    ); 
    } 
}

export default StudentList;