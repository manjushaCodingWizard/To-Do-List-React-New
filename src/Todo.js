import React from 'react'
import './Todo.css'

function Todo(props){
  return (
    <div className="listsdesign">
      <li>{props.text}</li>

      <div className="btns">
        {/*<button className="editbtn">Edit</button>*/}
        
        <button 
        className="deletebtn" 
        //onClick={props.onSelect}
        onClick={() =>{
          props.onSelect(props.id)  //onSelect function is called which is in App.js with passing argument id. 
        }}>X</button>
      </div>
    </div>
  )
}

export default Todo