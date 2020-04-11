import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

//Fazendo o desctructuring do props já na declaração de parâmetros da função
const NavBar = ({ icon, title }) => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<Link to="/">
					<i className={`fab fa-${icon}`}></i> {title}
				</Link>
			</h1>
			<Link to="/about">Sobre</Link>
		</nav>
	)
}

NavBar.defaultProps = {
	title: 'Github Finder',
	icon: 'github',
}

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
}

export default NavBar
