import React from 'react';
import {
	ListItem,
	List,
	Time,
	ListWrapper,
	Title,
	Content,
	ImgWrapper,
	Footer,
} from './style';
import HeadAside from '../../common/header';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';

class BlogList extends React.Component{
	constructor(props){
        super(props);
        this.state={
        	pageSize: 3,
        	pageNumber:1,
        }
	}

	componentDidMount(){
        this.props.loadBloglist();
	} 

	onChange(pageNumber, pageSize){
		this.setState(()=>({
            pageNumber: pageNumber,
		}));
	}

	render(){
        return (
        	<React.Fragment>
	        	<HeadAside />
				<ListWrapper>
					<List>
					    {this.props.bloglist.slice((this.state.pageNumber-1)*this.state.pageSize,(this.state.pageNumber-1)*this.state.pageSize+this.state.pageSize).map((item,index)=>(
	                        <Link to={'/blogdetail/' + item.get('id')}>
	                        <ListItem key={item.get('id')}>
	                            <ImgWrapper>
			                	    <img src= {item.get('imgurl')} alt='img' />
			                	</ImgWrapper>
			                	<Time>{item.get('time')}</Time> 
			                    <Title href="/">{item.get('title')}</Title>
			                    <Content>{item.get('content').substring(0,90)}</Content>
		                    </ListItem>
		                    </Link>
					    ))}
		            </List>
		            <Footer>
		                <Pagination 
		                    simple 
		                    onChange={this.onChange.bind(this)} 
		                    total={[...this.props.bloglist].length} 
		                    current={this.state.pageNumber} 
		                    pageSize={this.state.pageSize}
		                 />
	                </Footer>
	            </ListWrapper>
	        </React.Fragment>
		);
	}
}

const mapStateToProps=(state) => ({
   bloglist: state.get('blog').get('bloglist'),
})

const mapDispatchToProps = (dispatch) =>({
	loadBloglist: () => {
		dispatch(actionCreators.loadBloglist());
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(BlogList);