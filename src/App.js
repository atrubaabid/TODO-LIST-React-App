import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { tabs } from './tabs';
import { tab } from '@testing-library/user-event/dist/tab';


function App() {


  // TODO LIST APP


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

  // TODO LIST APP END


  // CREATE TABBING IN REACT.JS

  let [activetabs, setactivetabs] = useState(0)
  let [activeContent, setactiveContent] = useState(tabs[0])
  let changeData = (i) => {
    setactivetabs(i)
    setactiveContent(tabs[i])
  }





  return (
    <div className="App">

      {/* CREATE TABBING IN REACT.JS */}

      <div className='tabsOuter'>
        <h1>Law Prep Vision Mission and Values</h1>
        <ul>

          {tabs.map((value, i) => {
            return (
              <div>
                <li ><button onClick={() => changeData(i)} className={activetabs == i ? 'activeBtn' : ''}>{value.title}</button></li>
              </div>


            )
          })}
        </ul>
        {activeContent !== undefined ? <p className='pp'>{activeContent.description}</p> : ''}
      </div>

      {/* CREATE TABBING IN REACT.JS END*/}















      {/* TODO LIST APP */}
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
      {/* TODO LIST APP END */}




















    </div>
  );
}

export default App;


// TODO LIST APP


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

// TODO LIST APP END

