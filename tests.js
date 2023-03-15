const log = console.log;
const fs = require('fs');
const path = require('path');

const file_path = path.join(__dirname, 'data', 'users.json');
fs.readFile(file_path, 'utf-8', (err, data) => {
    if (err) throw err;
    log(JSON.parse(data));
});

