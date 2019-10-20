import React, { useState } from 'react'

export default function AddTodo(props) {
    const [todo, setTodo] = useState('')
   
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type='text'
                        value={todo}
                        onChange={(e) => {setTodo(e.target.value)}} />
                <button onClick={() => props.dispatch({type: "ADD_ITEM", payload: todo})}>Add Todo</button>
            </form>
        </div>
    )
}
