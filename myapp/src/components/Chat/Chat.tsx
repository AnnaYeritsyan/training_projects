import io from "socket.io-client";
import { Button } from "@mui/material";

const Chat = () => {
  const handleSend = () => {
    const socket = io('http://localhost:8085');
    socket.emit('message', 'Hello from client');
    socket.on('response', (data) => {
      console.log('Response from server:', data);
    
    });
  }
    return (
        <div >
             CHat
             <Button onClick={handleSend}>send</Button>
        </div>
    );
};
export default Chat;