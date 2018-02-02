import React from "react"
import IconButton from "../template/iconButton";

export default props => {

    const renderRows = () => {

        const list = props.list || []

        return list.map((todo, index) =>
            // console.log(index +  '-' + description)

            <tr key={index}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton
                        style='success' hide={todo.done}
                        icon='check'
                        onClick={() => props.handleMarkAsDoneOrPending(todo, true)}>
                    </IconButton>
                    <IconButton
                        style='warning' hide={!todo.done}
                        icon='undo'
                        onClick={() => props.handleMarkAsDoneOrPending(todo, false)}>
                    </IconButton>
                    <IconButton
                        style='danger' hide={!todo.done}
                        icon='trash-o'
                        onClick={() => props.handleDelete(index)}>
                    </IconButton>
                </td>
            </tr>

        )


    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}