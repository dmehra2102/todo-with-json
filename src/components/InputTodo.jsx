import React, { useState } from 'react'

function InputTodo({getdata}) {
    const [newtodo,setNewtodo] = useState("");
    const handlesubmit = ()=>{
        const payload = {
            title : newtodo,
            status: false
        };
        fetch("http://localhost:8080/todos",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(()=> {
            getdata();
        })
    }
  return (
    <div>
        <input onChange={(e)=> setNewtodo(e.target.value)} type="text" placeholder='write Todo ...'/>
        <button onClick={handlesubmit}>ADD</button>
    </div>
  )
}

export default InputTodo