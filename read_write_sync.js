const { readFileSync, writeFileSync, read, write } = require("fs");

// to get the contents froma file read
const first = readFileSync("./content/first.txt", "utf8");

const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

// for writeFileSync it will write the content in a file and it will overwrite the text if already exist
writeFileSync(
  "./content/result.txt",
  `This is the result of both files : ${first} , ${second}`
);

// for appending the data in a file just add flag with a to append
writeFileSync("./content/result.txt", "Appending the data", { flag: "a" });
