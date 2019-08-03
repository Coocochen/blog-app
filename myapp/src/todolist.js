
import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import { 
  getInputChangeValue, 
  getAddTodoitem, 
  getDeleteTodoitem, 
  getAxiosTodoitem
} from './store/actionCreator'
import TodolistUI from './todolistUI'
class Todolist extends React.Component{
    // constructor(props){
    //     super(props);
    /*当组件的state或props发生变化，render函数就会重新执行*/
        // this.state=store.getState();
        // //当store里的数据改变，则该函数自动执行
        // store.subscribe(()=>this.handleStoreChange());
    // }
  // handleStoreChange(){
  //   this.setState(store.getState());
  // }
  //在组件即将被挂载到页面的时刻自动执行,在render函数之前被执行
  // componentWillMount(){
  //   console.log("componentWillMount");
  // }
  //组件被挂载到页面上之后，自动被执行
  // componentDidMount(){
  //    const action = getAxiosTodoitem();
  //    store.dispatch(action);
  // }
  //组件被更新之前，会自动被执行,返回bool值,表示是否应该被更新
  // shouldComponentUpdate(){
  //   console.log("shouldComponentUpdate");
  //   return true;  
  // }
  //组件被更新之前自动执行，但是在shouldComponentUpdate为true之后执行，如果返回false则不会执行
  // componentWillUpdate(){
  //   console.log("componentWillUpdate");
  // }
  //组件更新之后自动执行
  // componentDidUpdate(){
  //     console.log("componentDidUpdate");
  // }
    componentDidMount(){
      this.props.componentDidMount();
    }
    // handleChange(e){
    //     const value=e.target.value;
    //     const action= getInputChangeValue(value);
    //     store.dispatch(action);
    // } 
    // handleClick(){
    //    const action=getAddTodoitem();
    //    store.dispatch(action);
    // }
    // handleDelete(index){
    //      const action = getDeleteTodoitem(index);
    //      store.dispatch(action);
    // }
    render(){
        return <TodolistUI 
                  inputValue={this.props.inputValue} 
                  handleChange={this.props.handleChange}
                  handleClick={this.props.handleClick}
                  list={this.props.list}
                  handleDelete={this.props.handleDelete}
                />
    }

}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => ({ 
  handleChange: (e) => {
    const value=e.target.value;
    const action= getInputChangeValue(value);
    dispatch(action);
  },
  handleClick: () => {
    const action=getAddTodoitem();
    dispatch(action);
  },
  handleDelete: (index) => {
    const action = getDeleteTodoitem(index);
    dispatch(action);
  },
  componentDidMount: ()=>{
    const action = getAxiosTodoitem();
    dispatch(action);
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todolist)