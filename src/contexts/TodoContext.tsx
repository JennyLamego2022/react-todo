import React, { useState } from 'react'
import { createContext } from 'react'
import { Todo } from '../models/Todo';
import { get } from '../services/TodoServices';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    removeTodo: () => {},
    toggle: () => {},
});

const TodoProvider = (props: any) => {

    const [todos, setTodos] = useState<Todo[]>(get);

    const addTodo = (title: string) => {
        // console.log('Adicionou ' + title);
        const todo: Todo = {id: todos.length + 1, title: title, done: false};
        setTodos([...todos, todo]);
    }

    const removeTodo = (todo: Todo) => {
        // console.log('Removeu ' + todo.title);
        const index = todos.indexOf(todo);
        setTodos(todos.filter((_, i) => i !== index));
    }

    const toggle = (todo: Todo) => {
        // console.log('Alterou ' + todo.title);
        const index = todos.indexOf(todo);
        todos[index].done = !todo.done;
        setTodos([...todos]);
    }  

    return(
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
            {props.children}
        </TodoContext.Provider>
    )
}


export default TodoProvider;