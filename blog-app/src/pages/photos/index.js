import React from 'react';
import {
	PhotosWrapper,
	ImgWrapper,
	Caption,
	Title,
	Desc,
} from './style';
import {
	Col,
	Row,
} from 'antd';
import HeadAside from '../../common/header';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Photos extends React.Component{
    
    componentDidMount(){
    	this.props.loadPhotos();
    }

	render(){
		return (
			<React.Fragment>
				<HeadAside />
	            <PhotosWrapper>
	            	<Row>
	            	    {this.props.picturelist.map((item,index)=>(
	                        <Col xs={{ span: 8}} lg={{ span: 4}} key={item.get('id')}>
						    <ImgWrapper>
						        <img src={item.get('imgurl')} alt="pic" width='100%' height='100%'/>
						        <Caption>
						        	<Title>{item.get('title')}</Title>
						        	<Desc>{item.get('desc')}</Desc>
						        </Caption>
						    </ImgWrapper>
						</Col>
	            	    )
	                    )}
				    </Row>
	            </PhotosWrapper>
	        </React.Fragment>    
		);
	}
}

const mapStateToProps = (state) => ({
    picturelist: state.get('photos').get('picturelist'),
})

const mapDispatchToProps = (dispatch) => ({
    loadPhotos: ()=>{
        const action = actionCreators.loadPhotosAction();
        dispatch(action);
    },
})

export default connect(mapStateToProps,mapDispatchToProps)(Photos);
