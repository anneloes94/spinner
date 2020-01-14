let count = 100
let array = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
for (let char of array) {
  setTimeout(() => {
  process.stdout.write(`\r${char}     `);
}, count);
  count += 200;
}
