import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GithubState from './context/github/githubState'
import AlertState from './context/alert/alertState'
import './App.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

import NavBar from './components/layout/NavBar'

import Search from './components/users/Search'
import About from './components/pages/About'
import UserDetail from './components/users/UserDetail'
import NotFound from './components/pages/NotFound'

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className="App">
						<NavBar />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Search} />
								<Route exact path="/about" component={About} />
								<Route path="/user/:login" component={UserDetail} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	)
}

export default App
