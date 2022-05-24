import React, { useEffect, useState } from 'react'
import InputTodo from './InputTodo'
import TodoList from './TodoList'

function Todos() {
    const [pagination,setPagination] = useState(1);
    const [list,setList] = useState([]);
    const getdata = ()=>{
        fetch(`http://localhost:8080/todos?_page=${pagination}&_limit=3`)
        .then((res)=> res.json())
        .then((data)=> setList(data));
    }
    useEffect(()=>{
        getdata();
    },[pagination]);
    const handlechange = (inc)=> {
         setPagination(pagination+inc);        
    }
    const handlechange1 = (inc)=>{
        if(pagination>1){
            setPagination(pagination+inc)
        }
    }
  return (
    <div>
        <InputTodo getdata={getdata}/>
        <TodoList list={list}/>
        <button onClick={()=> handlechange1(-1)}>Prev</button>
        <button onClick={()=> handlechange(1)}>Next</button>
        <p>Page- {pagination}</p>
    </div>
  )
}

export default Todos