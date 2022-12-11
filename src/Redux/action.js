
import { GET_REQUEST_ERROR,GET_REQUEST_REQUEST,GET_REQUEST_SUCCESS ,

   ADD_REQUEST_ERROR,
   ADD_REQUEST_REQUEST,
   ADD_REQUEST_SUCCESS,

   Delete_Todo_Success,

   Toggle_Todo_Success
} from "./actionType";

  




const getTodoRequest=()=>{
    
    return{type:GET_REQUEST_REQUEST}

}



const getTodoSuccess=(payload)=>{
    
    return{type:GET_REQUEST_SUCCESS,payload}

}



const getTodoError=()=>{
    
    return{type:GET_REQUEST_ERROR}

}


//.....................addd.....................

const AddTodoRequest=()=>{
    
    return{type:ADD_REQUEST_REQUEST}

}



const AddTodoSuccess=(payload)=>{
    
    return{type:ADD_REQUEST_SUCCESS,payload}

}



const AddTodoError=()=>{
    
    return{type:ADD_REQUEST_ERROR}

}

const DeleteTodoSuccess=(payload)=>{
    
    return{type:Delete_Todo_Success,payload}

}


const ToggleTodoSuccess=(payload)=>{
    //console.log(payload)
    
    return{type:Toggle_Todo_Success,payload}

}




export {getTodoRequest,
    getTodoSuccess,
    getTodoError,


    AddTodoRequest,
    AddTodoSuccess,
    AddTodoError,
    DeleteTodoSuccess,
    ToggleTodoSuccess
}