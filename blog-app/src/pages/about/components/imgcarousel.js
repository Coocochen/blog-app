import React from 'react';
import{
	ImgWrapper,
	Img,
	IconLeft,
	IconRight
} from '../style';
import imgurl from '../../../statics/picture/img2.png';
import { Carousel } from 'antd';
class ImgCarousel extends React.Component{

	slideToLeft(){
       this.carousel.prev();
	}

    slideToRight(){
       this.carousel.next();
	}
	render(){
		return(
            <ImgWrapper>
                <Carousel autoplay ref={(ref)=>this.carousel=ref}>
                    <div>
				         <Img src={imgurl} alt="img" width='100%' height='100%' />
				    </div>
				    <div>
				         <Img src={imgurl} alt="img"/>
				    </div>
				    <div>
				         <Img src={imgurl} alt="img"/>
				    </div>
				    <div>
				         <Img src={imgurl} alt="img"/>
				    </div>
              	</Carousel>
              	<IconLeft className="iconfont" onClick={this.slideToLeft.bind(this)}>&#xe607;</IconLeft>
              	<IconRight className="iconfont" onClick={this.slideToRight.bind(this)} >&#xe623;</IconRight>
            </ImgWrapper>
		);
	}
}

export default ImgCarousel;