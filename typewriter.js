const sentence = "hello there from lighthouse labs";
/// create a function that creates the setTimeout

let delay = 0;

const printLetter = (char, time) => {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  delay += 50;
};
for (const char of sentence) {
  printLetter(char, delay)
}
setTimeout(() => {
  process.stdout.write('\n')
}, delay);