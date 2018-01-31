import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


export default class Todo extends Component {

    constructor(props){
        super(props)

        //estado inicial do objeto
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    refresh() {

        // var todos = this.props.list;
        // console.log(JSON.stringify(todos))

        // localStorage.setItem('todos', JSON.stringify(todos));
        // this.setState({ list: todos });

        this.setState({
            ...this.state, description: '', list: JSON.parse(localStorage.getItem('todos'))
        })

    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }

    handleAdd(){

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

        this.setState({
            list: JSON.parse(localStorage.getItem('todos'))
        })


    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList list={this.state.list} />
            </div>
        )
    }
}