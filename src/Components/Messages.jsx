import React, {useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";

export const Messages = () => {
    const [name, setName] = useState('Send')
    const [value, setValue] = useState('')
    const [messages, setMessages] = useState([])
    const [visible, setVisible] = useState(true)
    const [deleteBtn, setDeleteBtn] = useState(...messages)

    const handleClick = () => {
        setMessages([...messages, value])
        setValue('')
    }

    const handleChange = (ev) => {
        setValue(ev.target.value)
    }

    const handleDelete = () => {
        setMessages([])
    }

    return <>
        <button onClick={() => setVisible(!visible)}>
            {visible ? 'hide' : 'show'}
        </button>
        {visible && <ul>
            {messages.map(message =>
                <li>{message}</li>
            )}
        </ul>}
        <div className="form">
            <Input change={handleChange} value={value}/>
            <Button name={name} click={handleClick} />
            <button onClick={handleDelete}>Delete</button>
        </div>
    </>
}