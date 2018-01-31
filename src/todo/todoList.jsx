import React from "react"

export default props => {

    const renderRows = () => {

        const list = props.list || []

        list.map(function (todo, index){
            return (
                <tr key={index}>
                    <td>{todo.description}</td>
                </tr>
            );
        })

        // return list.map(todo => (
        //     <tr>
        //         <td>{todo.description}</td>
        //     </tr>
        // ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}