import React from 'react';

class MessageList extends React.PureComponent {
    render() {
        return <ul>{this.props.messages.map(msg => <li>{msg}</li>)}</ul>
    }
}

export class ChatApp extends React.Component {
    state = {
        messages: [],
        inputMsg: '',
    };

    handleInput = evt => {
        this.setState({inputMsg: evt.target.value});
    };

    handleSend = () => {
        const text = this.state.inputMsg;
        if (text) {
            const newMessage = [...this.state.messages, text];
            this.setState({
                messages: newMessage,
                inputMsg: '',
            });
        }
    };

    render() {
        return (
            <div>
                <MessageList messages={this.state.messages}/>
                <div>
                    <input value={this.state.inputMsg} onInput={this.handleInput}/>
                    <button onClick={this.handleSend}>Send</button>
                </div>
            </div>
        );
    }

}

export default ChatApp;