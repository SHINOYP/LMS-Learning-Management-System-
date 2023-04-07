import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const{user}=useAuthContext()

  useEffect(() => {
    async function fetchTodos() {
      const response = await axios.get("http://localhost:4000/", { params: { "user_id":user._id} });
      setTodos(response.data);
    }

    fetchTodos();
  }, []);

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:4000/", { text: newTodo ,user_id:user._id});
    setTodos([...todos, response.data]);
    setNewTodo("");
  };

  const handleTodoDelete = async (id) => {
    await axios.delete(`http://localhost:4000/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };


  const div = "App flex flex-col justify-center items-center p-5"
  const div_h1 = "text-4xl p-10 font-thin"
  const form = "pb-3"
  const input = "input input-bordered input-primary  w-[450px]"
  const form_btn = "btn btn-outline ml-[87px] "
  const ul = "flex flex-col w-[650px] pl-[5px] pr-[5.5px] justify-center "
  const li = "text-lg flex font-medium justify-between pt-2 pb-2 "
  const li_btn = "btn btn-outline btn-sm"

  return (
    // <div className={div}>

    //   <h1 className={div_h1}> Todo List </h1>
    //   <form className={form} 
    //   onSubmit={handleNewTodoSubmit}>
        
    //     <input 
    //     className={input} 
    //     type="text" 
    //     value={newTodo} 
    //     onChange={handleNewTodoChange} />

    //     <button className={form_btn}> Add Todo </button>
    //   </form>
    //   <ul className={ul} >
    //     {todos.map((todo) => (
    //       <li className={li} key={todo._id}>
    //         {todo.text}{" "}
    //         <button
    //         className={li_btn}
    //         onClick={() => 
    //         handleTodoDelete(todo._id)}>
    //           Delete</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
   
    <div className=" flex items-center flex-col h-full w-2/2  justify-center h-full shadow-xl m-6 bg-teal-lightest font-sans">
        <div className="bg-white rounded-xl shadow  p-6  h-full w-full">
            <div className="mb-4 flex flex-col mx-6">
                <h1 className="text-grey-darkest mx-auto text-4xl font-bold" >Todo List</h1>
                <div className="mt-10 mb-20 ">
                    <form onSubmit={handleNewTodoSubmit} className="flex" >
                        <input 
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                        placeholder="Add Todo"
                        value={newTodo} 
                        onChange={handleNewTodoChange}
                        />
                        <button 
                        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 "
                        >Add</button>
                    </form>
                </div>
            </div>
            <div>
            {todos.map((todo) => (
                <div className="flex mb-4   mx-6 items-center border rounded-lg shadow-lg p-4">
                    <p className="w-full text-grey-darkest px-6" key={todo._id}>{todo.text}</p>
                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox {...label} defaultChecked />
                    <button 
                        type="button"  
                        className="text-red-700 hover:text-white border m-2 border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                        onClick={() =>handleTodoDelete(todo._id)}>
                    Delete
                    </button>
                </div>
             ))}
            </div>
        </div>
    </div>
  );
}

export default Todo;
