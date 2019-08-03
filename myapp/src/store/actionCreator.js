import { INPUT_CHANGE_VALUE, ADD_TODOITEM, DELETE_TODOITEM, INIT_TODOITEM} from "./actionType"
import axios from "axios" 

export const getInputChangeValue = (value)=>({
    type: INPUT_CHANGE_VALUE,
    value: value
})
export const getAddTodoitem = ()=>({
    type: ADD_TODOITEM
})
export const getDeleteTodoitem = (index)=>({
    type: DELETE_TODOITEM,
    index:index,
})
export const getInitTodoitem = (data)=>({
    type: INIT_TODOITEM,
    data:data,
})
export const getAxiosTodoitem = ()=>((dispatch)=>{
	axios.get("/api/todolist")
         .then((res)=>{
              const action = getInitTodoitem(res.data);
              dispatch(action);
         })
         .catch(()=>{console.log("senderror")});
})
