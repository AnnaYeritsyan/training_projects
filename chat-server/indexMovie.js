const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
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


app.post('/', (req, res) => {
    fs.readFile('./dbMovie.json', 'utf8', (err, data) => {
        if (err) {
            throw new Error(`Error reading movies: ${err} `);
        }
        const movies = JSON.parse(data);
        const newMovies = movies.concat(req.body)
        fs.writeFileSync('./dbMovie.json', JSON.stringify(newMovies))
        res.send(newMovies)
    });
})
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
