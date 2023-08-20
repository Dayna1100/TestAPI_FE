import './App.css';
//Import router component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Import Navigation Component
import Navigation from "./components/navigation/Navigation";

//Import Welcome Component
import Welcome from "./components/welcome/Welcome";

//Import user related components
import StudentList from "./components/studentlist/StudentList";
import Student from './components/student/Student';
import CreateStudent from "./components/createStudent/CreateStudent";



//Import NoMath (404) Component
import NoMatch from "./components/noMatch/NoMatch";

function App() {
  return (
    <div className="App">
      {/* Header to display on every page */}
      <header>
        <h1>Welcome to React Student Directory</h1>
        <Navigation />
      </header>

      {/* Define Routes to different components based on URL */}

      <Router>
		 <Routes>
        <Route
          exact
          path="/"
          component={Welcome}
        />
        <Route
          exact
          path="/students"
          component={StudentList}
        />
        <Route
          exact
          path="/student/:id"
          component={Student}
        />
         <Route
          exact
          path="/create/student"
          component={CreateStudent}
        />  
        <Route
          path="*"
          component={NoMatch}
        />
		</Routes> 
      </Router>
    </div>
  );
}

export default App;
// import './App.css';
// import { useState, useEffect } from "react";
// //import router component
// import { Switch } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// //import navigation component
// import Navigation from "./components/navigation/Navigation";
// //import welcome component
// import Welcome  from "./components/welcome/Welcome";
// //import user related components
// import StudentList from "./components/studentlist/StudentList";
// //import Student from "./components/student/Student";
// import CreateStudent from './components/createStudent/CreateStudent';
// //import NoMatch (404) component
// import NoMatch from "./components/noMatch/NoMatch";


// function App() {
// 	const [students, setStudents] = useState([])
// 	const [name, setName] = useState("")

// 	useEffect(() => {
// 		fetch("http://localhost:4000/student")
// 			.then(response => response.json())
// 			.then(response => {
// 				setStudents(response.students)
// 			})
// 	}, [])

// 	const updateName = (event) => {
// 		setName(event.target.value)
// 	}

// 	const addName = (event) => {
// 		event.preventDefault()
// 		fetch("http://localhost:4000/student", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			body: JSON.stringify({ student: { name: event.target["name"].value } })
// 		}).then(response => response.json())
// 			.then(response => {
// 				setStudents([...students, response.student])
// 				setName("")
// 			})
// 	}
//   return (
// 		<div className="App">
// 	{/* header to display on every page  */}
// 	<header>
// 	<h1>Welcome to React Student Search</h1>
// 	<Navigation />	
// 	</header>		
// 	{/* defines routes to different components based on URL */}
// 	<Switch>
// 		<Route
// 		exact
// 		path="/"
// 		component={Welcome}
// 		/>
// 		<Route
// 		exact
// 		path="/students"
// 		component={StudentList}
// 		/>
// 		{/* <Route
// 		exact
// 		path="/student"
// 		component={Student}
// 		/> */}
// 		<Route
// 		exact
// 		path="/create/student"
// 		component={CreateStudent}
// 		/>
// 		<Route
// 		exact
// 		path="*"
// 		component={NoMatch}
// 		/>
// 	</Switch>
//       <StudentList />
// 			<h1>Students</h1>
// 			<form onSubmit={addName}>
// 				<label htmlFor="name">Name</label>
// 				<input
// 					type="text"
// 					name="name"
// 					id="name"
// 					className="name"
// 					value={name}
// 					onInput={updateName}
// 				/>

// 				<input type="submit" value="Add name" />
// 			</form>
// 			<ul>
// 				{students.map(({ id, name }) => (
// 					<li key={id}>{name}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default App;
