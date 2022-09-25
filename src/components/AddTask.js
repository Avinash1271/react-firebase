import {React,useState} from 'react'
import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";

const AddTask = () => {
    const [title, setTitle] = useState("");
    const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
        await addDoc(collection(db, "todos"), {
        title,
        completed: false,
        });
        setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <div className="input_container">
        <input
          type="text"
          placeholder="Add new item..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  )
}

export default AddTask