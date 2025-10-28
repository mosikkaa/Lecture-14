import React from 'react'
import {useState} from 'react'

const Task = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    function handleAddTodo(e){
        e.preventDefault()
        if(todos.length >= 5) {
            return alert('List is Full')
        }
        if(newTodo.trim() !== '') {
            setTodos([...todos,{id:Math.random(),text:newTodo}]);
        }
        const input = document.querySelector("input");
        input.value = '';
    }

    function EmptyList(){
        return <h1>List is Empty</h1>
    }

    function Message(){
        if(todos.length === 0){
            return <EmptyList/>
        }
    }

    function handleDeleteTodo(id){
        setTodos(todos.filter(i => i.id !== id))
    }

    function DeleteTask(props){
        return <button onClick={() => handleDeleteTodo(props.id)}>Delete</button>
    }

    function AddTask(props){
        return <li style={{justifyContent:'space-between',display:'flex', gap:'10px'}}>
            {props.text}
            <DeleteTask id={props.id}/>
        </li>
    }

    function DisplayList(){
        return todos.map((i) => (
            <AddTask id={i.id} text={i.text}/>))
    }

    return (
        <div>
            <h1>To-Do List</h1>
            <input placeholder="Add New Task" onChange={(e) => setNewTodo(e.target.value)}/>
            <button type='submit' onClick={handleAddTodo} style={{marginLeft:'15px'}}>Add Task</button>
            <ul style={{ display:'flex',flexDirection:'column',gap:'8px',listStyleType: 'decimal' }}>
                <DisplayList/>
            </ul>
            <Message/>
        </div>
    );
    //kai rtuli iko:
}

export default Task;