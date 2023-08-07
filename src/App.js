import React, { useState } from 'react'

const App = () => {

  const[todo,setTodo] = useState("");
  const[todoList,setTodoList] = useState([]);
  
  const handleTodos=(e)=>{
    setTodo(e.target.value);
  }

  const addTodo=()=>{
    todo == ""
    ?
    alert("Write Something...")
    :
    setTodoList([...todoList,todo]);
    setTodo("");
  }

  const remove=(i)=>{
    setTodoList((allData)=>{
      return allData.filter((val,index)=>{
        return index!=i;
      })
    })
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Todo List</h1>
      <input
      value={todo}
      onChange={handleTodos}
      placeholder='Write Todos here...'
      />
      <button
      onClick={addTodo}
      >ADD-TODOS</button>
      <div>
        {
          todoList.map((val,i)=>{
            return (
              <div key={i} >
                <ul>
                  <li>{val}</li>
                  <button onClick={()=>remove(i)} >Remove</button>
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App