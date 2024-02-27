
import io from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { Paper } from "@mui/material";
import Form from '../Chat/Form/Form';
import MessageField from "./Chat/MessageField/MessageField";
import Users from "./Users/Users";
// import './Chat.css'
type Message = {
      id: number;
      user:string;
      message: string;
      date:string;

    };

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const socketInstance = useRef<null | any>(null);
  const storedUser = localStorage.getItem('user');   
  useEffect(() => {
    const socket:any = io('http://10.70.178.228:8085', { transports: ["websocket"] });
    // const socket:any = io('http://localhost:8085', { transports: ["websocket"] });
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

    
  
    if (storedUser) {
      const storedUsername = JSON.parse(storedUser).name;
      setUsername(storedUsername);
    }
  console.log(username)
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
// let s = addZero(d.getSeconds());
let time = h + ":" + m ;
    if (socketInstance.current) {
    
      console.log(username)
    console.log(message)
      socketInstance.current.emit('new_message', {
        id: message.length,
        username: username,
        message: message,
        date:time,
      });
    }
  };

  return (
    <div>
      <Paper>
        <Users />
        <MessageField messages={messages}  />
        <Form sendMessage={sendMessage} />
      </Paper>
    </div>
  );
};

export default Chat;
