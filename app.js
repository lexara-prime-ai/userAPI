const { User, getUserDetailsOnLogin } = require('./module');
const log = console.log;
const fs = require('fs');
const path = require('path');

const http = require('http').createServer((req, res) => {
    console.log(req.url, '', req.method);
    User.log(getUserDetailsOnLogin);
    res.write('User detected...');
    const file_path = path.join(__dirname, 'data', 'users.json');
    fs.readFile(file_path, 'utf-8', (err, data) => {
        if (err) throw err;
        log(JSON.parse(data));
        res.end(data);
    });
}).listen(8000, () => console.log(`App is running at http://127.0.0.1:8000`));

