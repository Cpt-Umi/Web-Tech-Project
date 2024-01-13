const mongoose = require("mongoose");

const Record = require("../models/record");

(async () => {
  await mongoose.connect(
    `mongodb://127.0.0.1:27017/webtech?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.0`
  );
})();

module.exports = {
  Record: require("./record"),
};
