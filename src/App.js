import React from 'react'
import axios from 'axios'

import './App.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import Search from './components/users/Search'

class App extends React.Component {
	state = {
		users: [],
		loading: false,
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

	render() {
		const { users, loading } = this.state
		return (
			<div className="App">
				<NavBar />
				<div className="container">
					<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						showClearButton={users.length > 0 ? true : false}
					/>
					<Users loading={loading} users={users} />
				</div>
			</div>
		)
	}
}

export default App
