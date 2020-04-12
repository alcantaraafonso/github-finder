import React, { useState, useContext } from 'react'

import GithubContext from '../../context/github/githubContext'

const Search = (props) => {
	const githubContext = useContext(GithubContext)
	const [search, setSearch] = useState('')

	const onSubmit = (e) => {
		e.preventDefault()
		if (search === '') {
			githubContext.setAlertMsg('Digite algo', 'light')
		} else {
			githubContext.searchUsers(search)
			setSearch('')
			githubContext.setAlertMsg(null)
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
			{githubContext.users.length > 0 && (
				<button
					type="submit"
					value="Search"
					className="btn btn-block btn-light"
					onClick={githubContext.clearUsers}
				>
					<i className="fas fa-trash-restore-alt"></i>
				</button>
			)}
		</div>
	)
	// }
}

export default Search
