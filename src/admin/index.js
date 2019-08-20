import React from 'react';
import { connect } from 'react-redux';
import SideMenu from './common/loadable';
import { Redirect } from 'react-router-dom';
class Admin extends React.PureComponent{
	render(){
		if(this.props.login){
            return (
	        <div>
			    <SideMenu />
			</div>
		   );
        }
		else{
			return <Redirect to="/login"/>
		} 
	}
}

const mapStateToProps = (state)=>({
    login: state.get('admin').get('login'),
})

export default connect(mapStateToProps,null)(Admin);