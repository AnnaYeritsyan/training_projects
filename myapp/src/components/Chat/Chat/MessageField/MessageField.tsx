import { Box, Paper, Typography } from "@mui/material";

const MessageField = ({ messages }: any) => {
  console.log(messages); 

  return (
    <Paper sx={{ height: '28rem', width: '50%', bgcolor: 'rgb(185 197 188 / 30%)', overflowY: 'auto' }}>
      <Box p={2}>
        {messages.map((messages: any, index: number) => (
          <Typography key={index} component="div" gutterBottom>
            <strong>{messages.username}: </strong>
            {messages.message}
            <Typography variant="caption" color="text.secondary">
              {messages.date}
            </Typography>
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};

export default MessageField;
