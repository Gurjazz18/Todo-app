import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodoError, AddTodoSuccess } from '../Redux/action'

export default function TodoInput() {
    const[input,setInput]=useState("")

    const dispatch=useDispatch()

    const handleADD=()=>{

        if(input){

            const obj={
                title:input,
                status:false
            }
             
            axios.post(`http://localhost:8080/todos`,obj).then((res)=>{

            dispatch(AddTodoSuccess(res.data))

            


            }).catch((err)=>{
                dispatch(AddTodoError())
            })
           
        }

       
        setInput("")

    }
  return (
    <div>
      <input placeholder='add here'
      value={input}
      onChange={(e)=>setInput(e.target.value)}


      />
      <button onClick={handleADD}>ADD</button>
    </div>
  )
}
