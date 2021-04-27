import react, { useState } from 'react'
import './App.css';
import Todo from './Todo.js';

function App() {
  const [input,setInput] = useState();
  const [todos,setTodos] = useState([]);
  

  const addTask = (event) => {
    event.preventDefault();
    setTodos([...todos,input]);   //   ...todos is array, input is value which will be added in that array
    setInput('');
  };  

  
  const deleteItems = (id) => {
    //setTodos(todos.filter((el) => el.id !== todo.id))
    setTodos((todos)=>{
      return todos.filter((arrElem,index) => {
        return index !== id;
      })
    })
    console.log('delete btn clicked')
  } 

  const seteditTodos = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    seteditTodos(findTodo);
  }

  return (
    <div className="App">
      <h1> To Do List using React</h1>
      <form className="formdesign">
        <input className="addinput" placeholder={'Add task here'}value={input} onChange= {event => setInput(event.target.value)}/>
        <button className="addbtn" disabled={!input} type='submit' onClick={addTask}>+</button>
      </form>

      <ul>
        {todos.map((todo,index) => {  //map function contains 2 parameters, todo and index.  todos is array which will map through todo(single todo item or task you can say) and index and will return following props
          return <Todo 
          text={todo} 
          key={index} 
          id={index}
          onSelect={deleteItems}/> //text,key,id,onSelect are props.  all are added for delete item.  Todo is file component(Todo.js).   (todo,index) is basic syntax of map function.  
        })}
        
      </ul>
    </div>
  );
}

export default App;