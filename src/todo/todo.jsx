import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


export default class Todo extends Component {

    constructor(props){
        super(props)

        //estado inicial do objeto
        let todos = JSON.parse(localStorage.getItem('todos'))
        this.state = { id: 0, description: '', done: false, dueDate: JSON.stringify(new Date()), list: todos }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.handleMarkAsDoneOrPending = this.handleMarkAsDoneOrPending.bind(this)

    }

    refresh(description = '') {

        const { value } = description

     
        const cachedHits = localStorage.getItem(value);

        console.log(cachedHits)

        // if (cachedHits) {
        //     this.setState({ hits: JSON.parse(cachedHits) });
        //     return;
        // }



        this.setState({
            ...this.state, id: 0, description, done: false, dueDate: JSON.stringify(new Date()), list: JSON.parse(localStorage.getItem('todos'))
        })

    }

    getIdTodo(todos){

        let jsonText = localStorage.getItem('todos')
        let data = JSON.parse(jsonText)        

        let maxId = 0
        for (let prop in data) {
            if (data[prop].id > maxId)
                maxId = data[prop].id
        }
        
        return maxId+1

    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleClear(){
        this.refresh()
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }
    

    handleAdd() {

        if(localStorage.getItem('todos') == null) {            
            var todos = []
            //autoincremento
            var id = 1
        } else {
            var todos = JSON.parse(localStorage.getItem('todos'))
            //autoincremento
            var id = this.getIdTodo(todos)
        }

        let todo = {id: id, description: this.state.description, done: this.state.done, dueDate: this.state.dueDate}
        todos.push(todo)
        localStorage.setItem('todos', JSON.stringify(todos))

        this.refresh()

    }

    handleDelete(index) {

        let todo = JSON.parse(localStorage.getItem('todos'))
        todo.splice(index, 1)
        localStorage.setItem('todos', JSON.stringify(todo))

        this.refresh();

    }

    handleMarkAsDoneOrPending(todo, value){

        let jsonText = localStorage.getItem('todos')
        let data = JSON.parse(jsonText)        

        //Verifica qual o objeto para alterar
        for (let prop in data) {
            if (data[prop].id == todo.id)
                data[prop].done = value
        }
        
        //Salva
        localStorage.setItem('todos', JSON.stringify(data))

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
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList
                    list={this.state.list}
                    handleDelete={this.handleDelete}
                    handleMarkAsDoneOrPending={this.handleMarkAsDoneOrPending}
                />
            </div>
        )
    }
}