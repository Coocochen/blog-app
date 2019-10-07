import React from 'react';
import {
    ListItem,
    List,
    Time,
    ListWrapper,
    Title,
    Content,
    ImgWrapper,
    LoadMore,
    EndLine
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import { BackTop } from 'antd';
import { withRouter} from 'react-router-dom';
import Search from './components/search';

const threshold = [0.1];
const intersectionObserver = new IntersectionObserver((entries) => {   //图片懒加载
        entries.forEach((item) => {
            if(item.isIntersecting){
                item.target.src = item.target.dataset.src;
                intersectionObserver.unobserve(item.target);
            }
         })
     },{
        threshold
      });

class BlogList extends React.PureComponent{
    constructor(props){
        super(props);
        this.images = [];
    }
  
    componentDidMount(){
        this.props.loadBloglist(this.props.match.params.id);
    } 

    componentDidUpdate(){
        this.images.forEach((item) => {
            if(item){
                intersectionObserver.observe(item);
            }
        });
    }

    render(){
        return (
            <ListWrapper>
                <Search/>
                <List>
                    {this.props.bloglist.map((item,index)=>(
                        <Link 
                            to={'/blogdetail/' + item.get('Id')}
                            key={item.get('Id')}
                        >
                            <ListItem>
                                <ImgWrapper>
                                    <img ref={ ref => this.images[index] = ref } data-src= {item.get('imgurl')} alt='img' src="" />
                                </ImgWrapper>
                                <Time>{item.get('time')}</Time> 
                                <Title>{item.get('title')}</Title>
                                <Content>{item.get('content').replace(/<\/?.+?\/?>|&lt;\/?|&gt;\/?|&nbsp/g,'').substring(0,200)}</Content><span>...</span>
                            </ListItem>
                        </Link>
                    ))}
                    <LoadMore  
                        className={this.props.hasBlog?"iconfont":"iconfont hidden"} 
                        onClick={
                        this.props.loadMoreEvent? 
                        () => this.props.loadmore(this.props.page,this.props.match.params.id):
                        () => {console.log("")}
                    }>
                    &#xe61e;
                    </LoadMore>
                    <EndLine className={this.props.hasBlog?"hidden":""}/> 
                </List>
                <div>
                    <BackTop />
                </div>
            </ListWrapper>
        );
    }
}

const mapStateToProps=(state) => ({
    bloglist: state.get('blog').get('bloglist'),
    page: state.get('blog').get('page'),
    hasBlog: state.get('blog').get('hasBlog'),
    loadMoreEvent: state.get('blog').get('loadMoreEvent')
})

const mapDispatchToProps = (dispatch) =>({
    loadBloglist: (id) => {
        dispatch(actionCreators.loadBloglist(id));
    },
    loadmore: (page,id)=>{
        const action = actionCreators.getMoreBlogAction(page,id);
        dispatch(action);
        dispatch(actionCreators.bandonLoadMore());
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(BlogList));