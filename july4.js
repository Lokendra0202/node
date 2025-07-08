const fs = require('fs');

fs.readFile('myy.json', 'utf8', (err,data) => {
    if (err) {
        console.error(err);
        return;

    }
    const jsonData = JSON.parse(data);
    console.log('JSON content : ',jsonData);
})