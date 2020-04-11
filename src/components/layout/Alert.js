import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ alert: { msg, type } }) => {
	return (
		alert !== null && (
			<div className={`alert alert-${type}`}>
				<i className="fas fa-info-circle"></i> {msg}
			</div>
		)
	)
}

Alert.propTypes = {
	alert: PropTypes.object.isRequired,
}

export default Alert
