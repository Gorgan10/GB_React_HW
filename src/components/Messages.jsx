import React, {useState, useEffect} from "react";
import {Input} from "./Input";
import {Button} from "./Button";
import {Message} from "./Message";

export const Messages = () => {
    const [visible, setVisible] = useState(true)
    const [name, setName] = useState('Send')

    const [value, setValue] = useState('')
    const [messages, setMessages] = useState([])

    const handleClick = () => {
        setMessages([...messages, {
            message: value,
            author: "User"
        }])
        setValue('')
    }

    useEffect(() => {
        const lastMessages = messages[messages.length - 1];
        let timerId = null;

        if (messages.length && lastMessages.author !== "Bot") {
            timerId = setTimeout(() => {
                setMessages([
                    ...messages,
                    { author: "Bot", message: "hello from bot" },
                ]);
            }, 200);
        }

        return () => clearInterval(timerId);
    }, [messages]);

    const handleChange = (ev) => {
        setValue(ev.target.value)
        const messageBody = document.querySelector('#message');
        messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight
    }

    const handleDelete = () => {
        setMessages([])
    }

    return <>
        <button onClick={() => setVisible(!visible)}>
            {visible ? 'hide' : 'show'}
        </button>

        <div id="message">
            {visible && <ul>
                {messages.map((message, index) =>
                    <Message message={message} key={index} />
                )}
            </ul>}
        </div>
        <form method="submit" className="form">
            <Input change={handleChange} value={value}/>
            <Button scroll={scrollToBottom} name={name} click={handleClick} />
            <button onClick={handleDelete}>Delete</button>
        </form>
    </>
}