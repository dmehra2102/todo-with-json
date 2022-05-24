import React from 'react'

function TodoList({list}) {

  return (
    <div>
        {list.map((el,index)=>{
            return <div key={el.id}>
                <p>{index+1}. {el.title}</p>
            </div>
        })}
    </div>
  )
}

export default TodoList