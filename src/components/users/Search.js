import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ showClearButton, searchUsers, setAlertMsg, clearUsers }) => {
	const [search, setSearch] = useState('')

	const onSubmit = (e) => {
		e.preventDefault()
		if (search === '') {
			setAlertMsg('Digite algo', 'light')
		} else {
			searchUsers(search)
			setSearch('')
			setAlertMsg(null)
		}
	}

	// render() {
	return (
		<div>
			<form className="form" onSubmit={onSubmit}>
				<input
					type="text"
					name="search"
					placeholder="Busca de usuários..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button
					type="submit"
					value="Search"
					className="btn btn-dark btn-block my-1"
				>
					<i className="fas fa-search"></i>
				</button>
			</form>
			{showClearButton && (
				<button
					type="submit"
					value="Search"
					className="btn btn-block btn-light"
					onClick={clearUsers}
				>
					<i className="fas fa-trash-restore-alt"></i>
				</button>
			)}
		</div>
	)
	// }
}

Search.propType = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClearButton: PropTypes.bool.isRequired,
	setAlertMsg: PropTypes.func.isRequired,
}
export default Search
