import React from 'react';
import { useSelector } from 'react-redux';

export const SocketPage = () => {
    const socketMessage = useSelector((state) => state.socketMessage);

    return (
        <div>
            <h1>Socket Message: {socketMessage}</h1>
        </div>
    );
}