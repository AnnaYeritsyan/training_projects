import { Box, Paper, Typography } from "@mui/material";

const MessageField = ({ messages }: any) => {
  console.log(messages); 

  return (
    <Paper sx={{ height: '28rem', width: '50%', bgcolor: 'rgb(185 197 188 / 30%)', overflowY: 'auto' }}>
      <Box p={2}>
        {messages.map((message: any, index: number) => (
          <Typography key={index} component="div" gutterBottom>
            <strong>{message.username}: </strong>
            {message.message}
            <Typography variant="caption" color="text.secondary">
              {message.date}
            </Typography>
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};

export default MessageField;
