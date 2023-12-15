const { log } = require("console");
const { readFile, writeFile, read, write } = require("fs");

// Ist way of reading a file

// readFile("./content/first.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

readFile("./content/first.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = data;
  readFile("./content/second.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = data;
    writeFile(
      "./content/result_async.txt",
      `This is combined result of both files : ${first} , ${second}`,
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(data);
      }
    );
  });
});
