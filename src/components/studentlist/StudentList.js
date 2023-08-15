import React, { Component } from "react";

class StudentList extends Component {

    state = {
        students: []
    }
    //lifecycle hook that runs when component is diplayed
    componentDidMount() {
        // make an http request to fetch student api running on localhost:4000
       fetch("http://localhost:4000/students")
       //when that finishes, take the results and turn into json
        .then((results) => results.json())
        //on success of turning results into json do something with the data
        .then(data => {
            console.log(data)
            //swaps out student data in state above with the data from BE API
            this.setState({
                students: data
            })
        })  
        //catches error message
        .catch(e => console.log(e.message))
    }

    //add render method 
    render() {
        return (
        <div className="StudentList">
        {JSON.stringify(this.state.students)}
        </div>
        )
    } 
}

export default StudentList;