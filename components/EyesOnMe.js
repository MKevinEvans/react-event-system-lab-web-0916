const React = require('react')

class EyesOnMe extends React.Component{
	constructor(){
		super()
		this.focus = this.focus.bind(this)
		this.blud = this.blur.bind(this)
	}
	focus(){
		console.log("Good!")
	}
	blur(){
		console.log("Hey! Eyes on me!")
	}
	render(){
		return(
			<button onBlur={this.blur} onFocus={this.focus} >Button
			</button>
			)
	}
}

module.exports = EyesOnMe