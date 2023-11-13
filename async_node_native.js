const { readFile, read, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile); // converting to a promise
const writeFilePromise = util.promisify(writeFile); // or else no need to do like this just in
//first line add at last .promises

const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/second.txt", "utf8");
    await writeFilePromise(
      "./content/result-gernade.txt",
      `This is coming from both file ${first} , ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
