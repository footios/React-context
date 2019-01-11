import React from 'react'

export default props => (
	<div>
		<button onClick={props.onClick}>toggle auth</button>
		<p>
			User is
			{props.auth ? ' authorized.' : ' not authorized.'}
		</p>
	</div>
)
