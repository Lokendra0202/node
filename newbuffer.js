buf = Buffer.alloc(26);

len = buf.write("simple easy learning");
console.log("Octets written : " + len);

console.log(len.toString('hex'));