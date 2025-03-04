import { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { InputMessage } from './InputMessage'
import { Messages } from "./Messages";

export const Chat = ({card, clearChat, updateClearChatState}) => {
    const { data } = useContext(ChatContext);
    // console.log(data);
    // console.log(data);
    // (`card from Chat: ${card}`);

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.firstName}</span>
                <span>{data.user?.displayName}</span>
            </div>
            <Messages />
            <InputMessage card={card} clearChat={clearChat} updateClearChatState={updateClearChatState} />
        </div>
    );
};