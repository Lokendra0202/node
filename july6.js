const fs = require('fs');

const data = {
    key : 45,
    name: 'Ritesh'
};

fs.writeFile('myy2.json', JSON.stringify(data),'utf8', (err) => {
    if (err)
{
    console.error(err);
    return;
    }
    console.log('JSON file written successfully');
})