"use client";
import Image from "next/image";
import styles from "./page.module.css";
import TodoFilter from "@/components/TodoFilter";
import TodoList from "@/components/TodoList";
import { AddTodo } from "@/components/AddTodo";
import { useState } from "react";
import { Todo } from "@/types";


export default function Home() {
  //初始代办事项为空
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState('all')
  const addTodo = (text: string) => {
    const newTodoItem = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([...todos, newTodoItem])
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const getFilterTodo = () => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed)
      case 'active':
        return todos.filter(todo => !todo.completed)
      default:
        return todos
    }
  }

  return (
    <div>
      <h1>my-todo-list</h1>
      <AddTodo addTodo={addTodo}></AddTodo>
      <TodoList todos={getFilterTodo()} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoList>
      <TodoFilter setFilter={setFilter}></TodoFilter>
    </div>
  );
}
