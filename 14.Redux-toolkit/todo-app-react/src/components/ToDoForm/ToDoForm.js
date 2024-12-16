import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {addTodo} from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducer";

import styles from "./ToDoForm.module.css";
import { notificationSelector, resetNotification } from "../../redux/reducers/notificationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  // const message = useSelector(notificationSelector)
  const { message } = useSelector(notificationSelector);

  if(message){
      setTimeout(()=>{
      dispatch(resetNotification());
      },3000);
  }
  //  console.log(message);
  const handleSubmit = (e) =>{
    e.preventDefault();
    setTodoText("");
    dispatch(actions.add(todoText));
  };

  return (
    <div className={styles.container}>
      {
        message && 
        <div class="alert alert-success" role="alert">
          {message}
        </div>
      }
     
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;