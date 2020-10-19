import React, { useState } from 'react';

const NewMessageForm = ({onSend}) => {
    const [inputText, setInputText] = useState('');

    const _handleTextChange = text => {
        setInputText(text);
    };
    
    const _handleSend = () => {
        onSend(inputText);
        setInputText('');
    }

    return (
        <div>
            <input
                type="text"
                data-testid="messageText"
                value={inputText}
                onChange={(e) => _handleTextChange(e.target.value)}
            />
            <button
                data-testid="sendButton"
                onClick={_handleSend}
            >
                Send
            </button>
        </div>
    );
};

export default NewMessageForm;
