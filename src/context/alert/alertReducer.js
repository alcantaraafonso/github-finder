import { SET_ALERT_MSG, SET_ALERT_CLEAR } from '../types'

export default (state, action) => {
	switch (action.type) {
		case SET_ALERT_MSG: {
			return {
				...state,
				alert: action.payload,
			}
		}
		case SET_ALERT_CLEAR: {
			return {
				...state,
				alert: null,
			}
		}
		default:
			return state
	}
}
