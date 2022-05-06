import React from "react";

export const Message = ({ message }) => {
    return (
        <div>
            <div>{message.author}</div>
            <div>{message.message}</div>
            <div>12:03</div>
            <hr />
        </div>
    );
};
