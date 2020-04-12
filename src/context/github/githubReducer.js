import {
	SEARCH_USER,
	GET_USER_DETAILS,
	CLEAR_USER,
	SET_LOADING,
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
		default:
			return state
	}
}
