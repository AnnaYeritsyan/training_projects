// Form.js
import { Button,OutlinedInput } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import SendIcon from '@mui/icons-material/Send';

const Form = ({ sendMessage }:any) => {
    const [message, setMessage] = useState("");

    const handleMessageChange = (e:any) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e:SyntheticEvent) => {
        e.preventDefault();
        console.log("send");
        sendMessage(message); 
        setMessage("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <OutlinedInput value={message} onChange={handleMessageChange} placeholder="Please enter message" />
            <Button variant="contained" endIcon={<SendIcon />} type="submit"></Button>
        </form>
    );
};

export default Form;
