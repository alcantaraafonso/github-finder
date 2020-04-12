import React, { useReducer } from 'react'
import axios from 'axios'

import GithubContext from './githubContext'
import GithubReducer from './githubReducer'

import {
	SEARCH_USER,
	GET_USER_DETAILS,
	CLEAR_USER,
	SET_LOADING,
} from '../types'

let githubClientId
let githubClientSecret
if (process.env.NODE_ENV !== 'production') {
	githubClientId = process.env.REACT_APP_CLIENT_ID
	githubClientSecret = process.env.REACT_APP_CLIENT_SECRET
} else {
	githubClientId = process.env.CLIENT_ID
	githubClientSecret = process.env.CLIENT_SECRET
}

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		loading: false,
	}

	const [state, dispatch] = useReducer(GithubReducer, initialState)

	// 	this.setState({ loading: true })
	// 	const res = await axios.get(
	// 		`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
	// 	)

	// 	this.setState({ users: res.data, loading: false })
	// }

	//Search Users
	const searchUsers = async (user) => {
		setLoading()

		const res = await axios.get(
			`https://api.github.com/search/users?q=${user}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
		)

		dispatch({
			type: SEARCH_USER,
			payload: res.data.items,
		})
	}

	//Get User Detail
	const getUserDetails = async (login) => {
		setLoading()

		const res = await axios.get(
			`https://api.github.com/users/${login}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
		)
		// const res = await axios.get(`https://api.github.com/users/${login}`)

		dispatch({
			type: GET_USER_DETAILS,
			payload: res.data,
		})
	}

	//Clear User
	const clearUser = () => dispatch({ type: CLEAR_USER })
	//Set loading
	const setLoading = () => dispatch({ type: SET_LOADING })

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				loading: state.loading,
				searchUsers,
				getUserDetails,
				setLoading,
				clearUser,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	)
}

export default GithubState
