const fs = require('fs');

const data = {
    name: 'Lokendra.',
    mobno: 9981654321,
    address: {
        city: 'Indore',
        state: 'MP',
        pincode: 452001
    },
};

setTimeout(() => {
    fs.writeFile('data.json', JSON.stringify(data), 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Data written to file successfully.');

        fs.readFile('data.json', 'utf8', (err, jsondata) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Read data:', jsondata);
        });
    });
}, 3000);
