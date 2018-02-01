import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


export default class Todo extends Component {

    constructor(props){
        super(props)

        //estado inicial do objeto
        let todos = JSON.parse(localStorage.getItem('todos'));
        this.state = { description: '', list: todos }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)

    }

    refresh() {

        this.setState({
            ...this.state, description: '', list: JSON.parse(localStorage.getItem('todos'))
        })

    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }

    handleAdd() {

        const description = this.state.description

        if(localStorage.getItem('todos') == null) {
            var todos = []
            todos.push(description)
            localStorage.setItem('todos', JSON.stringify(todos));
        } else {
            var todos = JSON.parse(localStorage.getItem('todos'));
            todos.push(description)
            localStorage.setItem('todos', JSON.stringify(todos));
        }

        this.refresh()

    }

    handleDelete(index) {
        var todos = JSON.parse(localStorage.getItem('todos'));
        todos.splice(index, 1)

        console.log(todos)

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
                />
            </div>
        )
    }
}