import React, { useReducer } from 'react'
import AlertReducer from './alertReducer'
import AlertContext from './alertContext'

import { SET_ALERT_MSG, SET_ALERT_CLEAR } from '../types'

const AlertState = (props) => {
	const initialState = {
		alert: null,
	}

	const [state, dispatch] = useReducer(AlertReducer, initialState)

	//Set Alert Msg
	const setAlertMsg = (msg, type) => {
		dispatch({
			type: SET_ALERT_MSG,
			payload: { msg, type },
		})
	}

	const setAlertNull = () => {
		dispatch({ type: SET_ALERT_CLEAR })
	}

	return (
		<AlertContext.Provider
			value={{
				alert: state.alert,
				setAlertMsg,
				setAlertNull,
			}}
		>
			{props.children}
		</AlertContext.Provider>
	)
}

export default AlertState
