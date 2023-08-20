import React, { Component } from "react";

class CreateStudent extends Component {
    
    //adding info to state so we can use this object to send to back end
    state = {
        formData: {
            id: "",
            first_name: "",
            last_name: "",
            email: "",
            major: "",
            ip_address: ""
        }
    }
    //method that handles updating the data in state that matches data on form
    //runs everytime a form field changes
  handleChange = (event) => {
    //create a new object from data in state
    let formData = Object.assign({}, this.state.formData);
    //take what changed in form and update matching key in form data object
    formData[event.target.name] = event.target.value;
    //update formData in state with new object
    this.setState({formData});
  }   
  //run when the form is submitted
  handleSubmit = (event) => {
    //prevents for from refreshing page
    event.preventDefault();
    //alert("submitted")
    //fetch post with data from state tha thas been populated from the form
    fetch("http://localhost:4000/students", {
        method: "POST",
        headers: {
            'content-type': 'application/json'  //make sure we set content-type headers so api knows it is json data
        },
        body: JSON.stringify(this.state.formData)  //send ourdat form state into body of request
    })
    .then((response) => response.json())  //on success turns response into json
    .then((data) => {
        console.log(data)
        //redirects to another route
        this.props.history.push("/students")
    })
    .catch(e =>console.log(e.message))  //catches errors
  }

  render() {
    return (
      <div className="CreateStudent">
        <h2>Add A New Student</h2>
                        {/* 
                    1. create our form to capture student data
                    2. bind this.handleSumbit to the onSubmit of the form so it runs when the form is submitted
                    3. bind this.handleChange to every input field so it can keep the data from state and the form in sync
                    4. bind the value of the field in state to the corresponding input in the form
                 */}
        <form onSubmit={this.handleSubmit}>
        <div>
          <label>Student Id:</label>
          <input onChange={this.handleChange} value={this.state.formData.id} required type="text" name="id"></input>
        </div>
        <div>
          <label>First Name:</label>
          <input onChange={this.handleChange} value={this.state.formData.first_name} required type="text" name="first_name"></input>
        </div>
        <div>
          <label>Last Name:</label>
          <input onChange={this.handleChange} value={this.state.formData.last_name} required type="text" name="last_name"></input>
        </div>
        <div>
          <label>Email:</label>
          <input onChange={this.handleChange} value={this.state.formData.email} required type="text" name="email"></input>
        </div>
        <div>
          <label>Major:</label>
          <input onChange={this.handleChange} value={this.state.formData.major} required type="text" name="major"></input>
        </div>
        <div>
          <label>IP Address:</label>
          <input onChange={this.handleChange} value={this.state.formData.ip_address} required type="text" name="ip_address"></input>
        </div>
        <div>
            <button type="submit">Add Student</button>
        </div>
        </form> 
        </div>
      );
  }
}

export default CreateStudent;
