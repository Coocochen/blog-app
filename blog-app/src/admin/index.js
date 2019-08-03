import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from './components/login';
import { connect } from 'react-redux';
import SideLayout from './components/layout';

class Admin extends React.Component{
	render(){
		// if(!this.props.login){
		// 	return <Redirect to='/login' />
		// }
		return (
			<React.Fragment>
				<SideLayout />
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state)=>({
    login: state.get('admin').get('login'),
})

export default connect(mapStateToProps,null)(Admin);