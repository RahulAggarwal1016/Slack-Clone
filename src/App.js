import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

/* 
Steps to Deploy App to Firebase **May have to type firebase login if not logged in
1. cd into project directory
2. type "firebase init"
3. choose hosting
4. use an existing project --> choose project
5. type "build"
6. choose "yes" for single page app (folder build should appear)
7. npm run build //becomes very light weight
8. type firebase deploy and y'all are done!
*/

function App() {
	const [{ user }, dispatch] = useStateValue();
	return (
		<div className="App">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<div className="app-body">
							<Sidebar />
							<Switch>
								<Route path="/room/:roomId">
									<Chat />
								</Route>
								<Route path="/">
									<h1>Welcome</h1>
								</Route>
							</Switch>
						</div>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;
