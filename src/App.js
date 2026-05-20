import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {


  let [todolist, setTodolist] = useState([])


  let saveTodoList = (event) => {
    let toname = event.target.toname.value;

    if (!todolist.includes(toname)) {
      let finalTodoList = [...todolist, toname]
      setTodolist(finalTodoList)

    } else {
      alert("This name already exists.....")
    }

    event.preventDefault();

  }
  let list = todolist.map((value, i) => {
    return (
      <TodoListItems value={value} key={i} indexNumber={i}
        todolist={todolist} setTodolist={setTodolist}></TodoListItems>

    )
  })





  return (
    <div className="App">
      <div>
        <h1>TODO LIST PROJECT</h1>
        <form onSubmit={saveTodoList}>
          <input type='text' name='toname'></input> <button>Save</button>
        </form>

        <div className='outerDiv'>
          <ul>
            {list}
          </ul>
        </div>



      </div>
    </div>
  );
}

export default App;


function TodoListItems({ value, setTodolist, indexNumber, todolist }) {

  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i != indexNumber)
    setTodolist(finalData);
  }


  let [status, setstatus] = useState(false)

  return (
    <li className={status ? 'completetodo' : ''} onClick={() => setstatus(!status)}>{indexNumber + 1} {value} <span onClick={deleteRow}>&times;</span></li>

  )
}
