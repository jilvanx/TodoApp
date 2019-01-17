import React from 'react'

export default props => (

    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
        <a href="#" className="navbar-brand">
            <i className="fa fa-calendar-check-o"></i> TodoApp
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample06">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><a className="nav-link" href="#/todos">Tarefas</a></li>
                <li className="nav-item"><a className="nav-link" href="#/about">About</a></li>
            </ul>
        </div>
    </nav>

)