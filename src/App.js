import React, { useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import UserDetail from './components/users/UserDetail'

const App = () => {
	const [users, setUsers] = useState([])
	const [user, setUser] = useState({})
	const [loading, setLoading] = useState(false)
	const [alert, setAlert] = useState(null)

	// async componentDidMount() {
	// 	this.setState({ loading: true })
	// 	const res = await axios.get(
	// 		`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
	// 	)

	// 	this.setState({ users: res.data, loading: false })
	// }

	const searchUsers = async (user) => {
		setLoading(true)

		const res = await axios.get(
			`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
		)

		setUsers(res.data.items)
		setLoading(false)
	}

	const getUserDetails = async (login) => {
		setLoading(true)

		const res = await axios.get(
			`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
		)
		// const res = await axios.get(`https://api.github.com/users/${login}`)

		setUser(res.data)
		setLoading(false)
	}

	const clearUsers = () => {
		setUsers([])
		setLoading(false)
	}

	const setAlertMsg = (msg, type) => {
		if (msg !== null) {
			setAlert({ msg, type })
		} else {
			setAlert(null)
		}
	}

	return (
		<Router>
			<div className="App">
				<NavBar />
				<div className="container">
					{alert !== null && <Alert alert={alert} />}
					<Switch>
						<Route
							exact
							path="/"
							render={(props) => (
								<>
									<Search
										searchUsers={searchUsers}
										clearUsers={clearUsers}
										showClearButton={users.length > 0 ? true : false}
										setAlertMsg={setAlertMsg}
									/>
									<Users loading={loading} users={users} />
								</>
							)}
						/>
						<Route exact path="/about" component={About} />
						<Route
							path="/user/:login"
							render={(props) => (
								<UserDetail
									{...props}
									getUserDetails={getUserDetails}
									user={user}
									loading={loading}
								/>
							)}
						/>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App
