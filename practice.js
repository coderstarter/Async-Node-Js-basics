const { readFile } = require("fs");
const { get } = require("lodash");
const { util } = require("util");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(data);
      }
    });
  });
};

// one way
// getText("./content/first.txt");

//two way using Promise
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// use of await async
// const start = async () => {
//   const first = await getText("./content/first.txt");
//   console.log(first);
// };

// or more cleaner way
const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
