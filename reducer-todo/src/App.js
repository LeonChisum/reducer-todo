import React, { useReducer } from 'react';
import { reducer, initialState } from './reducers/reducer'

// components
import Todo from './components/Todo'
import AddTodo from './components/AddTodo';


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <AddTodo dispatch={dispatch}/>
      {state.map(todo =>(
        <Todo id={todo.id} state={todo}/>
      ))}
      
    </div>
  );
}

export default App;
