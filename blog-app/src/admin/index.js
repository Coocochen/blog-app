import React from 'react';
import { connect } from 'react-redux';
import SideLayout from './components/layout';
import { Redirect } from 'react-router-dom';

class Admin extends React.PureComponent{
	render(){
		if(!this.props.login){
			return <Redirect to='/login' />
		}
		return (
			<SideLayout />
		);
	}
}

const mapStateToProps = (state)=>({
    login: state.get('admin').get('login'),
})

export default connect(mapStateToProps,null)(Admin);