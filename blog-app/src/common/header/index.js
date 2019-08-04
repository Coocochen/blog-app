import React from 'react'
import{
	HeadWrapper,
	Logo,
	MenuWrapper,
	Icon,
	Nav,
	NavItem,
	FootAside,
	Iconlist,
	IconItem,
	Tag,
	Intro
} from './style';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';

class HeadAside extends React.Component{   

    componentDidMount(){
    	this.props.loadTags();
    }

    render(){
        return(
			<HeadWrapper>
			    <a href="/">
			        <Logo />
			    </a>
			    <MenuWrapper>
			        <CSSTransition
	                in={this.props.opened}
	                timeout={500}
	                classNames="Iconslide"
			        >
						<Icon 
						    onClick={this.props.handleClick.bind(this)}
						    className={this.props.opened ? "close" : ""}
						/>
				      </CSSTransition>
				      <CSSTransition
	                in={this.props.opened}
	                timeout={500}
	                classNames="Navslide"
			        >
						<Nav className={this.props.opened ? "show" : ""}>
                            <Link to="/photos" style={{textDecoration:"none"}}>
							    <NavItem>相册</NavItem>
							</Link>
							<Link to="/about" style={{textDecoration:"none"}}>
							    <NavItem>关于</NavItem>
							</Link>
							{this.props.taglist.map((item,index)=>(
                                <Link to={"/tag/"+item} key={item} style={{textDecoration:"none"}}>
							        <NavItem>{item}</NavItem>
							    </Link>
							   )
                            )}
						</Nav>
		          </CSSTransition>
		          <CSSTransition
	                in={this.props.opened}
	                timeout={500}
	                classNames="Introslide"
			        >
				          <Intro className={this.props.opened ? "close" : ""}>
				              {this.props.intro}
				          </Intro>
		          </CSSTransition>
				  </MenuWrapper>
				  <FootAside>
				      <Iconlist>
				          <IconItem>
				          	 <Link to='#' style={{textDecoration:"none"}} className="iconfont">&#xe610;</Link>
				          </IconItem> 
				          <IconItem>
				          	 <Link to='#' style={{textDecoration:"none"}} className="iconfont">&#xe6a1;</Link>
				          </IconItem> 
				          <IconItem>
				          	 <Link to='#' style={{textDecoration:"none"}} className="iconfont">&#xe699;</Link>
				          </IconItem>   
				      </Iconlist>
				      <Tag>
				          <p>©2019年</p>
	                <p>陈峘的个人博客</p>
				      </Tag>
				  </FootAside>
		  </HeadWrapper> 
	);
    }
}

const mapStateToProps = (state) => {
    return {
        opened: state.get('header').get('opened'),
        taglist: state.get('header').get('taglist'),
        intro: state.get('header').get('intro'),
    }
}

const mapDispatchToProps = (dispatch) => {
	  return {
        handleClick(){
        	dispatch(actionCreators.clickIcon());
        },
        loadTags(){
        	const action = actionCreators.loadTagsAction();
        	dispatch(action);
        }
	  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeadAside);