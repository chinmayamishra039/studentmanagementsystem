const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/student-management", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err.message));

//for mongoose connection
mongoose.connection.on("connected", () => {
  console.log("mongoose connected to mongodb");
});

mongoose.connection.on("error", (err) => {
  console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoose disconnected to mongodb");
});
//after connection it will simply display in console otherwise it will not  display in console
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exist(0);
});
