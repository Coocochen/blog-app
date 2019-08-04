import React from 'react';
// import Login from './components/login';
import { connect } from 'react-redux';
import SideLayout from './components/layout';

class Admin extends React.Component{
	render(){
		// if(!this.props.login){
		// 	return <Redirect to='/login' />
		// }
		return (
			<SideLayout />
		);
	}
}

const mapStateToProps = (state)=>({
    login: state.get('admin').get('login'),
})

export default connect(mapStateToProps,null)(Admin);