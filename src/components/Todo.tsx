import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import Todoitems from "./Todoitems";
import { useFetchTodo, useCreateTodo } from "../services/todo";
import type { ITodo } from "../interface";
import { UrlLink } from "./UrlLink";

const Todo = () => {
  const { data, isLoading, } = useFetchTodo(1);

  const { mutate: createTodo, data: newTodo, isPending } = useCreateTodo();

  const [todoList, setTodoList] = useState<ITodo[]>(data || []);
  const inputRef = useRef<HTMLInputElement>(null);

  const add = async () => {
    const inputText = inputRef.current?.value?.trim();
    if (!inputText) return;
    createTodo(inputText || "Empty todo");
  };

  const deleteTodo = (id: number): void => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggle = (id: number): void => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    if (newTodo) {
      setTodoList((prev) => [{ ...newTodo, id: todoList.length + 1 }, ...prev]);
      if (inputRef?.current) {
        inputRef.current.value = "";
      }
    }
  }, [newTodo]);

  useEffect(() => {
    if (data) {
      setTodoList(data);
    }
  }, [data]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-2xl">
      <UrlLink />
      {/* title */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="logo" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
        {isLoading && <code className="text-teal-400">Fetching...</code>}
        {isPending && <code className="text-teal-400">Saving...</code>}
      </div>

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
        {todoList.map((item) => (
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
