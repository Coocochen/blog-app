import React from "react"
import PropTypes from "prop-types"
import { ListGroup } from "react-bootstrap"
class Todoitem extends React.Component{
	/*当父组件的render执行时，子组件的render也会重新执行*/
	render(){
		console.log("child render")
		const {item,test} = this.props;
		return (<ListGroup.Item onClick={()=>this.handleClick()}>{test}-{item}</ListGroup.Item>);
	}
    handleClick(){
    	const {handleDelete,index} = this.props;
        handleDelete(index);
    }
    shouldComponentUpdate(nextProps,nextState){
    	if(nextProps.item!==this.props.item){
            return true;
    	}
    	else{
           return false;
    	}
    }
    //当一个组件要从父组件接收参数
    //只要父组件的render函数被执行了，子组件的这个生命周期函数就会被执行
    //如果这个组件是第一次存在于父组件中，不会执行
    //如果这个组件之前已经存在于父组件中，才会执行
    componentWillReceiveProps(){
      console.log("child componentWillReceiveProps");
  }
    //当这个组件即将被从页面中剔除的时候，会被自动执行
    componentWillUnmount(){
       console.log("child componentWillUnmount");
  }
}
/*属性类型校验*/
Todoitem.propTypes={
	    test: PropTypes.string,
    	item: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    	handleDelete: PropTypes.func,
    	index: PropTypes.number,
    }
/*如果父组件没有传递属性则赋值为默认值*/
 Todoitem.defaultProps={
 	test: "hello world"
 }
export default Todoitem;

