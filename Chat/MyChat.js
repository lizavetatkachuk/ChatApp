import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import Chatkit from "@pusher/chatkit";
const CHATKIT_TOKEN_PROVIDER_ENDPOINT = " https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3c432e8b-8092-43c8-b487-84812fa8a87b/token";
const CHATKIT_INSTANCE_LOCATOR = " v1:us1:3c432e8b-8092-43c8-b487-84812fa8a87b";
const CHATKIT_ROOM_ID = "i15613464";
const CHATKIT_USER_NAME = " tkachuk_lizaveta";
export default class MyChat extends React.Component {
    state = {
        messages: []
    };

    componentDidMount() {
        const tokenProvider = new Chatkit.TokenProvider({
            url: CHATKIT_TOKEN_PROVIDER_ENDPOINT
    }
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: CHATKIT_INSTANCE_LOCATOR,
            userId: CHATKIT_USER_NAME,
            tokenProvider: tokenProvider
        });
        chatManager.connect().then(currentUser => {
            this.currentUser = currentUser;
            this.currentUser.subscribeToRoom({
                roomId: CHATKIT_ROOM_ID,
                hooks: {
                    onNewMessage: message => alert(message.text)
                }
            });
        });
    }
    render()
        {
        return <GiftedChat messages={this.state.messages} />;
    }

}