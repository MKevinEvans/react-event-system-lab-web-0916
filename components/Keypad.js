const React = require('react')

class Keypad extends React.Component{
	constructor(){
		super()
		this.output = this.output.bind(this)
	}
	output(){
		console.log("Entering password...")
	}
	render(){
		return(
			<input type='password' onKeyUp={this.output} >
			</input>
			)
	}
}



module.exports = Keypad