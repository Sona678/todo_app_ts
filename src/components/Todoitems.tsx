import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
import type { ITodo } from "../interface";

interface TodoItemProps {
  todo: ITodo;
  deleteTodo: (id: number) => void;
  toggle: (id: number) => void;
}

const Todoitems: React.FC<TodoItemProps> = ({ todo, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
      <div
        onClick={() => toggle(todo.id)}
        className="flex items-center gap-3 cursor-pointer"
      >
        <img
          src={todo.completed ? tick : not_tick}
          alt="status"
          className="w-6"
        />
        <p
          className={`text-slate-700 text-[17px] ${
            todo.completed ? "line-through" : ""
          }`}
        >
          {todo.title}
        </p>
      </div>
      <img
        src={delete_icon}
        onClick={() => deleteTodo(todo.id)}
        alt="delete"
        className="w-4 cursor-pointer"
      />
    </div>
  );
};

export default Todoitems;
