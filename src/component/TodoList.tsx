import React from 'react';
import { Todo } from './models/Todo';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const todos: Todo[] = [
        {id:1, title: 'Ir ao supermercado', done: false},
        {id:2, title: 'Ir a academia', done: false},
    ];
    return (
        <table className='uk-table'>
            <caption>Lista de Tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefas</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (<TodoListItem key={todo.id}></TodoListItem>)
                    )
                }
            </tbody>
        </table>
    );
}

export default TodoList;