
import { GET_REQUEST_ERROR,GET_REQUEST_REQUEST,GET_REQUEST_SUCCESS ,
    ADD_REQUEST_ERROR,
   ADD_REQUEST_REQUEST,
   ADD_REQUEST_SUCCESS,


   Delete_Todo_Success,

   Toggle_Todo_Success

} from "./actionType";


const initailState={
    isLoading:false,
    isError:false,
    todos:[]
}


const reducer=(oldstate=initailState,action)=>{
    const{type,payload}=action

    switch (type) {
        case GET_REQUEST_REQUEST:

        return{
            ...oldstate,
            isLoading:true,
            isError:false,

        }

        case GET_REQUEST_SUCCESS:

        return{
            ...oldstate,
            isLoading:false,
            isError:false,
            todos:payload

        }

        case GET_REQUEST_ERROR:

        return{
            ...oldstate,
            isLoading:false,
            isError:true,

        }
            //...............................addd......................


            case ADD_REQUEST_REQUEST:

            return{
                ...oldstate,
                isLoading:true,
                isError:false,
    
            }
    
            case ADD_REQUEST_SUCCESS:

            const newTodos={...oldstate.todos,payload}
    
            return{
                ...oldstate,
                isLoading:false,
                isError:false,
                todos:newTodos
    
            }
    
            case ADD_REQUEST_ERROR:
    
            return{
                ...oldstate,
                isLoading:false,
                isError:true,
    
            }

           
        

         
        
   case Delete_Todo_Success:
            
        return{
            ...oldstate,
            isLoading:false,
            isError:false,
            todos:payload

        }

//,,,,,,,,,,toggle..............


        case Toggle_Todo_Success:

    
        const newToggle=oldstate.todos.map((elem)=>(

            elem.id===payload ?{...elem, status:!elem.status}:elem
        ))

        console.log(newToggle)
      
            
        return{
           ...oldstate,
            isLoading:false,
            isError:false,
            todos:newToggle

        }


            
                
         
    
        default:
          return oldstate
    }

}

export {reducer}