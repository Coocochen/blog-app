import React from 'react';
import Imgcarousel from './components/imgcarousel';
import HeadAside from '../../common/header';
import {
	Wrapper,
	ContentWrapper,
} from './style';

class About extends React.Component{
	render(){
		return (
			<React.Fragment>
				<HeadAside />
	            <Wrapper>
	            	<ContentWrapper>
	            		<Imgcarousel />
	            	</ContentWrapper>
	            </Wrapper>
            </React.Fragment>
	    );
	}
}

export default About;