import React from "react"
import { ListGroup , FormControl, Button, InputGroup} from "react-bootstrap"
import { CSSTransition , TransitionGroup } from 'react-transition-group';
import Todoitem from "./todoitem"

//当UI组件只负责渲染，只含有一个render函数时，建议使用无状态组件代替
const TodolistUI = (props) =>{
    return (<div style={{marginTop:20,marginLeft:20}}>
                   <InputGroup>
                       <FormControl  type="text" placeholder="todo list" style={{width:300,marginRight:5}}
                           value={props.inputValue} 
                           onChange={(e)=>props.handleChange(e)}
                        />
                        <Button variant="primary"
                           onClick={()=>props.handleClick()}>
                           Add Item
                        </Button>
                    </InputGroup>
                       <ListGroup style={{width:300}}>
                            <TransitionGroup>
                                {props.list.map((item,index)=>(
                                    <CSSTransition
                                        key={index}
                                        timeout={500}
                                        classNames="items"
                                    >   
                                        <Todoitem 
                                            item={item} 
                                            index={index} 
                                            handleDelete={(index)=>props.handleDelete(index)}
                                        />
                                    </CSSTransition>
                                 ))}
                              </TransitionGroup>
                         </ListGroup>
                </div>);
}


export default TodolistUI;