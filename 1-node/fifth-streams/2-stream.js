const { createReadStream } = require('fs');

const stream = createReadStream('../content/big.txt', { highWaterMark: 90000, encoding: 'utf8' });

// default is 64kb 
// last  buffer - remainder 
// highWaterMark - control size 
// const stream = createReadStream('../content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

stream.on('data', (results) => {
    console.log(results);
})
stream.on('error', (err) => console.log(err))