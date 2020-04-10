import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ submit, value, classname, icon }) => {
	return (
		<button type={submit} value={value} className={classname}>
			<i className={`fas fa-${icon}`}></i>
		</button>
	)
}

Button.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	classname: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
}

export default Button
