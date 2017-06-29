var React=require('react')
var ReactDOM=require('react-dom')


var Actions=require('./action')
var Store=require('./store')



var Demo=React.createClass({
	
	
	getInitialState:function(){
		return{
			res:Store.getState()
		}
	},
	tap:function(){
		Store.dispatch(Actions(this.refs.ipt.value))
	},
	
	onChange:function(){
		this.setState({res:Store.getState()})
	},
	render:function(){
		return(
			<div>
			<input type='text' ref='ipt'/>
			<button onClick={this.tap}>添加</button>
			
			{this.state.res.map(function(item,i){
				return <p key={i}>{item}</p>
			})}
			</div>
		)
	},
	
	
	
	componentDidMount:function(){
		var sc=Store.subscribe(this.onChange)
	}
})



ReactDOM.render(<Demo/>,document.getElementById('out'))
