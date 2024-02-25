// Form.js
import { Button } from "@mui/material";
import { SyntheticEvent, useState } from "react";

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
            <input type="text" value={message} onChange={handleMessageChange} />
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default Form;
