import React from "react"
import IconButton from "../template/iconButton";

export default props => {

    const renderRows = () => {

        const list = props.list || []
        
        // list.map(function (todo, index){
        //     return (
        //         <tr key={index}>
        //             <td>{todo}</td>
        //             <td>
        //                 <IconButton
        //                     style='danger'
        //                     icon='trash-o'
        //                     onClick={() => handleRemove(todo)}>
        //                 </IconButton>
        //             </td>
        //         </tr>
        //     );
        // })


        return list.map((description,index) => 
            // console.log(index +  '-' + description)

            <tr key={index}>
                <td>{description}</td>
                <td>
                    <IconButton
                        style='danger'
                        icon='trash-o'
                        onClick={() => props.handleDelete(index)}>
                    </IconButton>
                </td>           
            </tr>

        )


        // return list.map(todo => (
        //     <tr >
        //         <td>{todo.description}</td>
        //     </tr>
        // ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}