const csvWriter = require('fast-csv');

const mydata = [
    {name : 'John', age: 30, city: 'New York'},
    {name : 'Jane', age: 25, city: 'Los Angeles'},
];
csvWriter.writeToPath('newData.csv', mydata, { headers: true })
.on('finish', () => console.log('CSV file written successfully'));