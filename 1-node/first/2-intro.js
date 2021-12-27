// GLOBALS -NO WINDOWS 

// __dirname        - path to current directory 
// __filename       - file name 
// require          - function to use modules (commonJS)
// module           - info about current module (file)
// process          - infro about env where the program is executed 

console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(process);
setInterval(() => {
    console.log('Hello World');
}, 1000);
setTimeout(() => {
    console.log('Delay for 4 mins');
}, 4000);