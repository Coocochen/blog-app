import React from 'react';
import {
	Form,
	Input,
	Label,
	Row,
	SubmitInput
} from '../style';
import {
	clickSubmit
} from '../store/actionCreator';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class Login extends React.Component{
	render(){
			if(!this.props.login){
                return (
                    <Form>
		        	    <Row>
		        	       <Label htmlFor="admin" >admin: </Label>
		        		   <Input type="text" name="admin" id="admin" required ref={(input)=>{this.admin=input}} />
		        		</Row>
		        		<Row>
			        		<Label htmlFor="password">password: </Label>
			        		<Input type="password" name="password" id="password" required ref={(input)=>{this.password=input}}/>
		        		</Row>
		        		<Row>
		        			<SubmitInput type="button" value="登陆" onClick={()=>this.props.clicklogin(this.admin,this.password)}/>
		        		</Row>
        	        </Form>
                 );
			}
			else{
                return <Redirect to="/admin" />
			}
	}
}

const mapDispatchToProps = (dispatch) =>({
    clicklogin: (admin,password) => {
        const action = clickSubmit(admin,password);
        dispatch(action);
    }
})

const mapStateToProps = (state) => ({
	login: state.get('admin').get('login'),
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);