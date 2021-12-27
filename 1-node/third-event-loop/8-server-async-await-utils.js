const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise('../content/first.txt', 'utf8');
        const second = await readFilePromise('../content/second.txt', 'utf8');
        let result = `${first} ${second}`;
        await writeFilePromise('../content/my_granade.txt', `This is awesome: ${result}`, { flag: 'a' })

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

start()