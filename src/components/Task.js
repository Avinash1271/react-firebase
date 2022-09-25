import {React,useState} from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ClearIcon from '@mui/icons-material/Clear';

const Task = ({ todo, handleDelete,}) => {
  const [newTitle, setNewTitle] = useState(todo.title);
  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />
      <div className='div2'>

        <button className="button-complete">
          <ArrowDropUpIcon id="i" />
        </button>

        <button className="button-edit">
          <ArrowDropDownIcon id="i" />
        </button>

        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <ClearIcon id="i" />
        </button>
      </div>
    </div>
  )
}

export default Task