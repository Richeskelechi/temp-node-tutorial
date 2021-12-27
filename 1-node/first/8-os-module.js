const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method to return the system on/upTime in seconds
console.log(`The system upTime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
};
const str = JSON.stringify(currentOS);
console.log(`Details about my OS is ${str}`);