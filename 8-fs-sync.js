const fs = require('fs');

const first = fs.readFileSync('./content/first.txt','utf8');
const second=fs.readFileSync('./content/second.txt','utf8');

fs.writeFileSync('./content/result.txt',`here is the result: ${first},${second}`,{flag:'a'})
