import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteTodoSuccess, getTodoError, getTodoRequest, getTodoSuccess, ToggleTodoSuccess } from '../Redux/action'
import TodoInput from './TodoInput'

export default function Todos() {
    const dispatch=useDispatch()

    const todos=useSelector(store=>store.todos)
   

    

    const getTodos=()=>{
        dispatch(getTodoRequest())

        axios.get("http://localhost:8080/todos").then((res)=>{
            dispatch(getTodoSuccess(res.data))

        }).catch((err)=>{
            dispatch(getTodoError())
        })

    }

    useEffect(()=>{
        getTodos();
    },[])


    const handleToggle=(id)=>{



      axios.patch(`http://localhost:8080/todos/${id}`).then((res)=>{
        //console.log(res.data)
        dispatch(ToggleTodoSuccess(id));
       
       
      })
       

    }

    const handleDelete=(id)=>{


        axios.delete(`http://localhost:8080/todos/${id}`).then((res)=>{
              dispatch(DeleteTodoSuccess(res.data))
             
        })
         
         }

       

  
     

  return (
    <div>
    <h1>Todos-app</h1>
    <TodoInput/>

    <div >
    {
        todos.length>0 && todos.map((elem)=>(
            <div key={elem.id} className='todocss' >

             <p>  {elem.id}  {elem.title}   {elem.status? "True":"False"}</p>

            <button onClick={()=>handleToggle(elem.id)}>toggle</button>
            <button onClick={()=>handleDelete(elem.id)}>Delete</button>
           


            </div>
        ))
      }
    </div>
      
     

    </div>
  )
}
