import React from 'react';
import {
	BlogListWrapper,
	BlogItem,
	Title,
	Edit,
    Delete,
    RightItem,
    Time,
    Button,
} from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import EditBlog from './editBlog';

class BlogListManager extends React.Component{
    
    componentDidMount(){
        this.props.loadTitlelist();
    }

	render(){
			if(!this.props.edited){
			    return(
			        <BlogListWrapper>
		           	     {this.props.titlelist.map((item,index)=>(
		           	     	<BlogItem key={item.get('id')}>
		                        <Title>{item.get('title')}</Title>
		                        <Time>{item.get('time')}</Time>
		           	            <RightItem>
					           	    <Edit onClick={()=>this.props.clickEdit(item.get('id'))}>编辑</Edit>
					           	    <Delete>删除</Delete>
		           	            </RightItem>
		           	        </BlogItem> 
		                  ))}
		           	     <Button onClick={()=>this.props.clickEdit(-1)}>添加博客</Button>
                    </BlogListWrapper>	
			    );
			}
			else{
                return <EditBlog/>
			}
	}
}

const mapStateToProps = (state) =>({
    titlelist: state.get('admin').get('titlelist'),
    edited: state.get('admin').get('edited'),
})

const mapDispatchToProps = (dispatch) =>({
    loadTitlelist: () => {
    	const action = actionCreators.loadTitleListAction();
    	dispatch(action);
    },
    clickEdit: (id) => {
    	const action = actionCreators.clickEditAction(id);
    	dispatch(action);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(BlogListManager);