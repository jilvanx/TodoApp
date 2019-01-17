import React from 'react'
import PageHeader from '../template/pageHeader'


export default props => (
    <div>
        <PageHeader name='Sobre' small='TodoApp'></PageHeader>
        <div className="container">
            <p><a href="http://jilvanx.com">jilvanx.com</a></p>
            <h3>Front-end Developer</h3>
        </div>
    </div>
)