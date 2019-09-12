import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Test from './components/test'
import Welcome from './components/welcome'

class App extends Component{
	render(){
		let name = 'ssai Aravwind hai'
		let same = `hey hello ${name}`
		let some = {
			name,same,fullName:name+same
		}
		const element = <div className='hello'>
				<h1>Hello World ....!!!</h1>
				<h1>My name is === {name+' hello'} </h1>
				<h1>hey {same}</h1>
				<Test some={some}/>
				<Welcome some={some}/>
			</div>
		return (element)
	}
}

ReactDOM.render(<App/>,document.getElementById('root'))
