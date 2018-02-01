import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


export default class Todo extends Component {

    // Todo(description, done, dueDate) {
    //     this.description = description;
    //     this.dueDate = dueDate;
    //     this.done = false;
    // }

    constructor(props){
        super(props)

        //estado inicial do objeto
        let todos = JSON.parse(localStorage.getItem('todos'))
        this.state = { description: '', done: false, dueDate: JSON.stringify(new Date()), list: todos }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)

    }

    refresh() {

        this.setState({
            ...this.state, description: '', done: false, dueDate: JSON.stringify(new Date()), list: JSON.parse(localStorage.getItem('todos'))
        })

    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }

    handleAdd() {

        let todo = {description: this.state.description, done: this.state.done, dueDate: this.state.dueDate}

        if(localStorage.getItem('todos') == null) {
            var todos = []
            todos.push(todo)
            localStorage.setItem('todos', JSON.stringify(todos))
        } else {
            var todos = JSON.parse(localStorage.getItem('todos'))
            todos.push(todo)
            localStorage.setItem('todos', JSON.stringify(todos))
        }

        this.refresh()

        // let todos = []
        // let todo = {description: this.state.description, done: this.state.done, dueDate: this.state.dueDate}
        // todos.push(todo)
        // console.log(todos)
        // localStorage.setItem('todos', JSON.stringify(todos))
        // this.refresh()

    }

    handleDelete(index) {

        let todo = JSON.parse(localStorage.getItem('todos'))
        todo.splice(index, 1)
        localStorage.setItem('todos', JSON.stringify(todo))

        this.refresh();

    }

    handleMarkAsDone(index){

        let todo = JSON.parse(localStorage.getItem('todos'))
        todo['done'] = true;
        localStorage.setItem('todos', JSON.stringify(todo));

        console.log(todo);

        this.refresh();
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                />
                <TodoList
                    list={this.state.list}
                    handleDelete={this.handleDelete}
                    handleMarkAsDone={this.handleMarkAsDone}
                />
            </div>
        )
    }
}