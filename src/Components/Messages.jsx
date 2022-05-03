import React, {useState, useEffect, useRef} from "react";
import {Input} from "./Input";
import {Button} from "./Button";
import {Message} from "./Message";

export const Messages = () => {
    const [visible, setVisible] = useState(true)
    const [name, setName] = useState('Send')

    const [value, setValue] = useState('')
    const [messages, setMessages] = useState([])

    const handleClick = () => {
        setMessages([...messages, value])
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

    const sendMessage = () => {
        if (value) {
            setMessages([
                ...messages,
                { author: "User", message: value, date: new Date() },
            ]);
            setValue('');
        }
    };

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

        <div className="message">
            {visible && <ul>
                {messages.map((message, index) =>
                    <Message message={message} key={index} />
                )}
            </ul>}
        </div>
        <div className="form">
            <Input onClick={sendMessage} change={handleChange} value={value}/>
            <Button name={name} click={handleClick} />
            <button onClick={handleDelete}>Delete</button>
        </div>
    </>
}