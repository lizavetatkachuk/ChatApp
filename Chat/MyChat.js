import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import Chatkit from "@pusher/chatkit";

export default class MyChat extends React.Component {
    state = {
        messages: []
    };

    componentDidMount() {
        
    }

    render() {
        return <GiftedChat messages={this.state.messages} />;
    }
}