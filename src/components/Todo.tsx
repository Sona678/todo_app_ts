"use client";
import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import Todoitems from "./Todoitems";
import { usefetchTodo, useCreateTodo } from "../API/fetchTodo";
import type { TodoItem } from "../interface";
import { UrlLink } from "./UrlLink";

const Todo = () => {
  const { data, isFetching } = usefetchTodo();

  const{mutate:createTodos, data:newTodo,isPending}=useCreateTodo();  //data ko meaning dherai vayera newTodo vanera diyeko

  const [todoList, setTodoList] = useState<TodoItem[]>(data || []);

  const inputRef = useRef<HTMLInputElement>(null); // using <any>


  const add = async (): Promise<void> => {
    const inputText = inputRef.current?.value?.trim();
    console.log("newText", inputText);

    const newTodo =createTodos(inputText || ""); // <any> for created todo
    console.log("newTodo", newTodo);

  };

  const deleteTodo = (id: number): void => {
    setTodoList((prev: any) => prev.filter((todo: any) => todo.id !== id));
  };

  const toggle = (id: number): void => {
    setTodoList((prev: any) =>
      prev.map((todo: any) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


useEffect(()=>{
   if (newTodo) {
         setTodoList((prev) => [
              {...newTodo,id:todoList.length+1},...prev] )};
    if(inputRef?.current){
      inputRef.current.value="";
    }
},[newTodo]);

  useEffect(() => {
    // const Todo=async()=>{
    //   const data: any = await fetchTodo();
    //   setTodoList(data)
    // }
    // Todo()
    if (data) {
      setTodoList(data);
    }
  }, [data]);

 

  return (
    
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-2xl">
      {/* title */}<UrlLink/>
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="logo" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

       <p>{isFetching ? "Fetching..." : "Fetched."}</p>
       <p>{isPending ? "Pending...." : "saved"}</p>

      {/* input box */}
      <div className="flex items-center my-7 bg-gray-100 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6"
          type="text"
          placeholder="Add your tasks"
        />
        <button
          onClick={add}
          className="rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          Add
        </button>
      </div>

      {/* todo list */}
      <div className="flex flex-col gap-2">
        {todoList.map((item: any) => (
          <Todoitems
            key={item.id}
            todo={item}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
