const { readFile } = require("fs");
const { reject, get } = require("lodash");
const { resolve } = require("path");

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

// getText("../content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const start = async () => {
  try {
    const first = await getText("../content/first.txt");
    const second = await getText("../content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
  // Or direct way or use can use the try block approach
  //   const first = await getText("../content/first.txt");
  //   console.log(first);
};

start();
