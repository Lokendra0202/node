var fs = require('fs');

fs.open("sample.txt", "r", (err, fd) => {
  if (err) {
    console.log("Error opening file: " + err);
    return; 
  }

  var buf = Buffer.alloc(100);

  fs.read(fd, buf, 0, 100, 0, (err, bytesRead, buffer) => {
    if (err) {
      throw err;
    }

    console.log(`Read ${bytesRead} bytes from file.`);
    console.log(buf.toString('utf8', 0, bytesRead));

    fs.close(fd, (err) => {
      if (err) throw err;
    });
  });
});

var data = "My new data";

wd = Buffer.from(data, 'utf8');
fs.writeFile("sample.txt", wd, (err) => {
  if (err) {
    throw err;
  }
  console.log("Buffer data written to file successfully.");
});