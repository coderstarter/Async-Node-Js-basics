const EventEmitter = require("events");
const customEmitter = new EventEmitter();
customEmitter.on("response", () => {
  console.log("Data is received");
});

customEmitter.on("response", (name, id) => {
  console.log(`Data is received from ${name} with ${id}`);
});

customEmitter.emit("response", "John", 23);
