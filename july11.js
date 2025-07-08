const fs = require('fs');
fs.readFile('data.json', 'utf8', (err,data) => {
    if (err) { console.error("Error reading file:", err);
        return;
    }

const jsonData = JSON.parse(data);
//console.log(jsonData);
console.log("Name:", jsonData.name);
console.log("Mobile Number:", jsonData.mobno);  
console.log("City:", jsonData.address.city);
console.log("State:", jsonData.address.state);
console.log("Pincode:", jsonData.address.pincode);
    
});