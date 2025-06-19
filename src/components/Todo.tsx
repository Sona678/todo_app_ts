import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import Todoitems from "./Todoitems";
import { useFetchTodo } from "../services/todo";
import type { ITodo } from "../interface";

const Todo = () => {
  // const { data: todos, isLoading, isError } = useFetchTodo();
  const { data } = useFetchTodo();
  const [todoList, setTodoList] = useState<ITodo[]>(data || []);
  const inputRef = useRef<HTMLInputElement>(null);

  const add = async (): Promise<void> => {
    const inputText = inputRef.current?.value?.trim();

    // if (!inputText) {
    //   const data: ITodo = (await fetchTodo()) as ITodo;
    //   if (data) {
    //     setTodoList((prev) => [
    //       ...prev,
    //       { id: Date.now(), text: data.text, isComplete: false },
    //     ]);
    //   }
    // } else {
    //   const newTodo: ITodo = await createTodo(inputText);
    //   if (newTodo) {
    //     setTodoList((prev) => [
    //       ...prev,
    //       {
    //         id: newTodo.id || Date.now(),
    //         text: newTodo.text,
    //         isComplete: false,
    //       },
    //     ]);
    //     if (inputRef?.current) {
    //       inputRef.current.value = "";
    //     }
    //   }
    // }
  };

  const deleteTodo = (id: number): void => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggle = (id: number): void => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  useEffect(() => {
    /**using useQuery */
    if (data) {
      setTodoList(data);
    }
  }, [data]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-2xl">
      {/* title */}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="logo" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
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
