import  React from  'react'

const Message = (props) => {

    return (
        <p>De: {props.note.name} Msj: {props.note.message}</p>
    )
}
export default Message