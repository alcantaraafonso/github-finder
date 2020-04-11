import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'

class App extends React.Component {
	state = {
		users: [],
		loading: false,
		alert: null,
	}

	// async componentDidMount() {
	// 	this.setState({ loading: true })
	// 	const res = await axios.get(
	// 		`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
	// 	)

	// 	this.setState({ users: res.data, loading: false })
	// }

	searchUsers = async (user) => {
		this.setState({ loading: true })

		const res = await axios.get(
			`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
		)

		this.setState({ users: res.data.items, loading: false })
	}

	clearUsers = () => {
		this.setState({ users: [], loading: false })
	}

	setAlert = (msg, type) => {
		if (msg !== null) {
			this.setState({ alert: { msg, type } })
		} else {
			this.setState({ alert: null })
		}
	}

	render() {
		const { users, loading, alert } = this.state
		return (
			<Router>
				<div className="App">
					<NavBar />
					<div className="container">
						{alert !== null && <Alert alert={alert} />}
						<Switch>
							<Route
								exact
								to="/"
								render={(props) => (
									<>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											showClearButton={users.length > 0 ? true : false}
											setAlert={this.setAlert}
										/>
										<Users loading={loading} users={users} />
									</>
								)}
							/>
							<Route exact to="/about" component={About} />
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}

export default App
