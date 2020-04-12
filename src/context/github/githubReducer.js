import {
	SEARCH_USER,
	GET_USER_DETAILS,
	CLEAR_USER,
	SET_LOADING,
	SET_ALERT_MSG,
	SET_ALERT_CLEAR,
} from '../types'

export default (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, loading: true }
		case SEARCH_USER: {
			return {
				...state,
				users: action.payload,
				loading: false,
			}
		}
		case GET_USER_DETAILS: {
			return {
				...state,
				user: action.payload,
				loading: false,
			}
		}
		case CLEAR_USER: {
			return {
				...state,
				users: [],
			}
		}
		case SET_ALERT_CLEAR: {
			return {
				...state,
				alert: null,
			}
		}
		case SET_ALERT_MSG: {
			return {
				...state,
				alert: action.payload,
			}
		}
		default:
			return state
	}
}
