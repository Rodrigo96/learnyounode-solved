let args = process.argv.slice(2);
let output = args.map(arg => Number(arg)).reduce((acc, next) => {
    return acc + next;
});

console.log(output);