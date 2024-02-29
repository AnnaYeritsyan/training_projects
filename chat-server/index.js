const express = require('express');
const cors=require('cors')
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');
// const io = socketIo(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });


const app = express();
const server = http.createServer(app);
const io = socketIo(server);


app.use(cors())
app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('A user connected');

  // Send existing messages to the client
  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const messages = JSON.parse(data);
    socket.emit('load_messages', messages);
  });
  messages.push(message)
      fs.writeFile('./db.json', JSON.stringify(messages), (err) => {
        if (err) {
          console.error(err);
          return;
        }
        io.emit('new_message', newMessage);
      });
 
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 8085;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const fs = require('fs');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// app.use(express.static('public'));

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Send existing messages to the client
//   fs.readFile('./db.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const messages = JSON.parse(data);
//     socket.emit('load_messages', messages);
//   });

//   // Handle new messages
//   socket.on('new_message', (message) => {
//     fs.readFile('./db.json', 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       const messages = JSON.parse(data);
//       messages.push(message);

//       fs.writeFile('./db.json', JSON.stringify(messages), (err) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//         io.emit('new_message', message);
//       });
//     });
//   });

//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });
// });

// const PORT = process.env.PORT || 8085;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

