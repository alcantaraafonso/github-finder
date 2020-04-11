import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Spinner from '../layout/Spinner'

const UserDetail = ({ user, match, getUserDetails, loading }) => {
	const {
		login,
		html_url,
		avatar_url,
		location,
		name,
		bio,
		company,
		blog,
		followers,
		following,
		public_repos,
		public_gists,
	} = user

	/**
	 * O array no final indica a condição/componente que o useEffect deve ser rodado
	 * Como desejamos que rode apenas uma vez, setamos um array vazio
	 */
	useEffect(() => {
		getUserDetails(match.params.login)
		//eslint-disable-next-line
	}, [])

	return loading ? (
		<Spinner />
	) : (
		<>
			<h1>Detalhes do usuário</h1>
			<div className="card grid-2">
				<div className="all-center">
					<img
						src={avatar_url}
						alt="Avatar"
						className="round-img"
						style={{ width: '150px' }}
					/>
					<h1>{name}</h1>
					<p>Local: {location}</p>
				</div>
				<div>
					{bio && (
						<>
							<h3>Bio</h3>
							<p>{bio}</p>
						</>
					)}
					<a href={html_url} className="btn btn-dark my-1">
						Visite a página no GitHub
					</a>
					<ul>
						<li>
							{login && (
								<>
									<strong>Username: </strong> {login}
								</>
							)}
						</li>
						<li>
							{company && (
								<>
									<strong>Empresa: </strong> {company}
								</>
							)}
						</li>
						<li>
							{blog && (
								<>
									<strong>Endereço do blog: </strong> {blog}
								</>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className="card text-center">
				<div className="badge badge-primary">Followers: {followers}</div>
				<div className="badge badge-success">Following: {following}</div>
				<div className="badge badge-light">Repos Públicos: {public_repos}</div>
				<div className="badge badge-dark">Gists: {public_gists}</div>
			</div>
		</>
	)
}

UserDetail.propTypes = {
	user: PropTypes.object.isRequired,
	getUserDetails: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
}

export default UserDetail
