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
import { Popconfirm} from 'antd';
import { Link } from 'react-router-dom';

class BlogListManager extends React.Component{
    
    componentDidMount(){
        this.props.loadTitlelist();
    }
    confirm(id) {
		this.props.deleteBlogById(id);
	}

	render(){
	    return(
	        <BlogListWrapper>
           	     {this.props.titlelist.map((item,index)=>(
           	     	<BlogItem key={item.get('Id')}>
                        <Title>{item.get('title')}</Title>
                        <Time>{item.get('time')}</Time>
           	            <RightItem>
			           	    <a href={'/edit/'+ item.get('Id')} style={{textDecoration: 'none'}}><Edit>编辑</Edit></a>
			           	    <Delete>
			           	    <Popconfirm
							    title="确定要删除这篇博客吗？"
							    onConfirm={()=>this.confirm(item.get('Id'))}
							    okText="Yes"
							    cancelText="No"
							  >
			           	        删除
			           	    </Popconfirm>
			           	    </Delete>
           	            </RightItem>
           	        </BlogItem> 
                  ))}
           	     <Link to="/edit/-1"><Button>添加博客</Button></Link>
            </BlogListWrapper>	
	    );
	}
}

const mapStateToProps = (state) =>({
    titlelist: state.get('admin').get('titlelist'),
})

const mapDispatchToProps = (dispatch) =>({
    loadTitlelist: () => {
    	const action = actionCreators.loadTitleListAction();
    	dispatch(action);
    },
    deleteBlogById: (id) => {
        console.log(id);
        const action = actionCreators.deleteBlogById(id);
        dispatch(action);
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(BlogListManager);