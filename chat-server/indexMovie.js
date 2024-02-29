const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');


const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.static('public'));


app.get('/', (req, res) => {
  fs.readFile('./dbMovie.json', 'utf8', (err, data) => {
    if (err) {
        throw new Error(`Error reading movies: ${err} `);
    }
    const movies = JSON.parse(data);
    res.send(movies)
  });
})

const PORT = process.env.PORT || 3004;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
