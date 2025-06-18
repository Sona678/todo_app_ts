'use client';
import { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import Todoitems from './Todoitems';
import fetchTodo from '../API/fetchTodo';  
import createTodo from '../API/createTodo';

const Todo = () => {
  const [todoList, setTodoList] = useState<any>([]);

  const inputRef = useRef<any>(null); // using <any> 

  const add = async (): Promise<void> => {
    const inputText = inputRef.current?.value?.trim();

    if (!inputText) {
      const data: any = await fetchTodo(); // <any> 
      if (data) {
        setTodoList((prev: any) => [
          ...prev,
          { id: Date.now(), text: data.title, isComplete: false }
        ]);
      }
    } else {
      const newTodo: any = await createTodo(inputText); // <any> for created todo
      if (newTodo) {
        setTodoList((prev: any) => [
          ...prev,
          { id: newTodo.id || Date.now(), text: newTodo.title, isComplete: false }
        ]);
        inputRef.current.value = "";
      }
    }
  };

  const deleteTodo = (id: number): void => {
    setTodoList((prev: any) => prev.filter((todo: any) => todo.id !== id));
  };

  const toggle = (id: number): void => {
    setTodoList((prev: any) =>
      prev.map((todo: any) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };
  useEffect(()=>{
    const Todo=async()=>{
      const data: any = await fetchTodo(); 
      setTodoList(data)
    }
    Todo()
  },[])
  

 
  return (
     <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-2xl'>
      {/* title */}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt='logo' />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>

      {/* input box */}
      <div className='flex items-center my-7 bg-gray-100 rounded-full'>
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6"
          type='text'
          placeholder='Add your tasks'
        />
        <button
          onClick={add}
          className='rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'
        >
          Add
        </button>
      </div>

      {/* todo list */}
      <div className='flex flex-col gap-2'>
       {todoList.map((item: any) => (
  <Todoitems
    key={item.id}
    id={item.id}
    text={item.title}
    isComplete={item.isComplete}
    deleteTodo={deleteTodo}
    toggle={toggle}
  />
))}

      </div>
    </div>
  );
};

export default Todo;
