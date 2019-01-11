import React from 'react'
import Person from './Person'

class App extends React.Component {
	state = {
		auth: false
	}

	handleAuth = () => this.setState({ auth: !this.state.auth })

	render() {
		return <Person auth={this.state.auth} onClick={this.handleAuth} />
	}
}

export default App
