import React, { useState } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GithubState from './context/github/githubState'

import './App.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import UserDetail from './components/users/UserDetail'

const App = () => {
	return (
		<GithubState>
			<Router>
				<div className="App">
					<NavBar />
					<div className="container">
						{/* {alert !== null && <Alert alert={alert} />} */}
						<Switch>
							<Route
								exact
								path="/"
								render={(props) => (
									<>
										<Search />
										<Users />
									</>
								)}
							/>
							<Route exact path="/about" component={About} />
							<Route path="/user/:login" component={UserDetail} />
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	)
}

export default App
