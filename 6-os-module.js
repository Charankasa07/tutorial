const os = require('os')

const user = os.userInfo()

console.log(user);

const uptime= os.uptime()

console.log(`the systme uptime is ${uptime} seconds`);

const info ={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}

console.log(info);