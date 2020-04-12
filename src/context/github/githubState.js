import React, { useReducer } from 'react'
import axios from 'axios'

import GithubContext from './githubContext'
import GithubReducer from './githubReducer'

import {
	SEARCH_USER,
	GET_USER_DETAILS,
	CLEAR_USER,
	SET_LOADING,
	SET_ALERT_MSG,
	SET_ALERT_CLEAR,
} from '../types'

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		loading: false,
		alert: null,
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
			`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
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
			`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
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

	//Set Alert Msg
	const setAlertMsg = (msg, type) => {
		if (msg !== null) {
			dispatch({
				type: SET_ALERT_MSG,
				payload: { msg, type },
			})
		} else {
			dispatch({ type: SET_ALERT_CLEAR })
		}
	}

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				loading: state.loading,
				alert: state.alert,
				searchUsers,
				getUserDetails,
				setLoading,
				clearUser,
				setAlertMsg,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	)
}

export default GithubState
