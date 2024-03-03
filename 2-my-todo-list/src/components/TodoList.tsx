import { Todo } from "@/types"
import { TodoItem } from "./TodoItem";

interface TodoListProps {
    todos: Array<Todo>;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}


export default function TodoList({ todos, deleteTodo, toggleTodo }: TodoListProps) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />  
            ))}
        </ul>
    )
}