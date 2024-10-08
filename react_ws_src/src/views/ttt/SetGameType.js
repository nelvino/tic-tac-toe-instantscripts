import React, {Component} from 'react'

export default class SetGameType extends Component {

	constructor (props) {
		super(props)

		this.state = {}
	}

//	------------------------	------------------------	------------------------

	render () {
		return (
			<div id='SetGameType'>

				<h1>Choose game type</h1>

				<button type='submit' onClick={this.selTypeLive.bind(this)} className='button long'><span>Live against another player <span className='fa fa-caret-right'></span></span></button>
				
				&nbsp;&nbsp;&nbsp;&nbsp;

				<button type='submit' onClick={this.selTypeCompEasy.bind(this)} className='button long'>
					<span>Against a computer (Easy) <span className='fa fa-caret-right'></span></span>
				</button>
				
				<button type='submit' onClick={this.selTypeCompHard.bind(this)} className='button long'>
					<span>Against a computer (Hard) <span className='fa fa-caret-right'></span></span>
				</button>

			</div>
		)
	}

//	------------------------	------------------------	------------------------

selTypeLive(e) {
	this.props.onSetType('live', null); // Pass null as difficulty for live mode
}

selTypeCompEasy(e) {
	this.props.onSetType('comp', 'easy'); // Pass 'easy' as difficulty
}

selTypeCompHard(e) {
	this.props.onSetType('comp', 'hard'); // Pass 'hard' as difficulty
}
//	------------------------	------------------------	------------------------

	// selTypeComp (e) {
	// 	// const { name } = this.refs
	// 	// const { onSetType } = this.props
	// 	// onSetType(name.value.trim())

	// 	this.props.onSetType('comp')
	// }

}
