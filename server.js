const express = require('express');
const app = express();
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('cities_file.json', 'utf8'));

app.get('/search', (req, res) => {
    const searchTerm = req.query.term.toLowerCase();
    const results = data.filter(item => item.city.toLowerCase().startsWith(searchTerm)).map(item => item.city);
    res.json(results);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
