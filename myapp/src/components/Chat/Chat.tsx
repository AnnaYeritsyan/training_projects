// Chat.js
import io from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { Paper } from "@mui/material";
import Form from '../Chat/Form/Form';
import MessageField from "./Chat/MessageField/MessageField";

type Message = {
    id: number;
    text: string;
    // Add other properties as needed
  };
  

const Chat = () => {
  const [messages, setMessages] = useState<any>([]);

  const socketInstance = useRef<any>(null)
  useEffect(() => {
    const socket = io('http://localhost:8085', { transports: ["websocket"] });
   socketInstance.current =socket
    socket.on('load_messages', (messages) => {
      setMessages(messages);
    });


    socket.on('new_message', (message:Message) => {
      setMessages((prevMessages:any) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect(); 
    };
  }, []);

  const sendMessage = (message:string) => {
    // const socket = io('http://localhost:8085', { transports: ["websocket"] });
    if(socketInstance.current){
        socketInstance.current.emit('new_message', message);

    }
  };

  return (
    <div>
      <Paper>
        <MessageField messages={messages} />
        <Form sendMessage={sendMessage} />
      </Paper>
    </div>
  );
};

export default Chat;
