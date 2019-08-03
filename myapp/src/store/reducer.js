import {INPUT_CHANGE_VALUE, ADD_TODOITEM, DELETE_TODOITEM, INIT_TODOITEM} from "./actionType"

const defaultState={
               inputValue:"",
               list:["learn english","study cooking","watch TV"],
                }

//reducer可以接受state,但是绝不能修改state
//纯函数指的是，给定固定的输入，就会有固定的输出，并且没有副作用
export default (state=defaultState, action)=>{
	if(action.type===INPUT_CHANGE_VALUE){
		const NewState = JSON.parse(JSON.stringify(state));
		NewState.inputValue = action.value;
        return NewState;
	}
	if(action.type===INIT_TODOITEM){
		const NewState = JSON.parse(JSON.stringify(state));
		NewState.list = action.data;
        return NewState;
	}
	if(action.type===ADD_TODOITEM){
		const NewState = JSON.parse(JSON.stringify(state));
		NewState.list.push(state.inputValue);
		NewState.inputValue = "";
		return NewState;
	}
	if(action.type===DELETE_TODOITEM){
		const NewState = JSON.parse(JSON.stringify(state));
		NewState.list.splice(action.index,1);
		return NewState;
	}
	return state;
}