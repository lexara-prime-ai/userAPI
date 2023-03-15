// DUMMY DATA
const User = {
    first_name: 'John',
    last_name: 'Doe',
    age: 25,
    online: true,
    log(msg) {
        console.log(msg);
        writeFile;
    }
};
// GET USER DETAILS ON LOGIN
const getUserDetailsOnLogin = `
********** USER DETECTED **********\n\n
User: ${User.first_name} ${User.last_name},\nOnline Status: ${User.online}\n
`;
// WRITE USER DETAILS TO FILE
const fs = require('fs');
const path = require('path');

var dir_path = path.join(__dirname, 'output');
var file_path = path.join(dir_path + '.log');

const writeFile = fs.appendFile(file_path,
    getUserDetailsOnLogin,
    err => {
        if (err) console.error(`${err.name}\t${err.message}`);
    });

module.exports = {
    User, getUserDetailsOnLogin, writeFile
};
