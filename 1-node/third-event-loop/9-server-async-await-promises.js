const { readFile, writeFile } = require('fs').promises;

const start = async () => {
    try {
        const first = await readFile('../content/first.txt', 'utf8');
        const second = await readFile('../content/second.txt', 'utf8');
        let result = `${first} ${second}`;
        await writeFile('../content/my_granade.txt', `This is awesome: ${result}`, { flag: 'a' })
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

start()