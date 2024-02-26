
import io from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { Paper } from "@mui/material";
import Form from '../Chat/Form/Form';
import MessageField from "./Chat/MessageField/MessageField";

type Message = {
      id: number;
      text: string;
  
    };

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const socketInstance:any = useRef(null);
  
  useEffect(() => {
    const socket:any = io('http://localhost:8085', { transports: ["websocket"] });
    socketInstance.current = socket;

    socket.on('load_messages', (messages:any) => {
      setMessages(messages);
    });

    socket.on('new_message', (message:Message) => {
      setMessages((prevMessages:any) => {
        try {
          return [...prevMessages, message];
        } catch (error) {
          return prevMessages;
        }
      });
    });

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const storedUsername = JSON.parse(storedUser).name;
      setUsername(storedUsername);
    }

    return () => {
      socket.disconnect();
    };
  }, []);
  function addZero(i:any) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
  const sendMessage = (message:any) => {
    const d = new Date();
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let s = addZero(d.getSeconds());
let time = h + ":" + m ;
    if (socketInstance.current) {
      socketInstance.current.emit('new_message', {
        username: username,
        'message': message,
        date:time,
      });
    }
  };

  return (
    <div>
      <Paper>
        <MessageField messages={messages}  />
        <Form sendMessage={sendMessage} />
      </Paper>
    </div>
  );
};

export default Chat;
