const mongoose = require("mongoose");
// const Record = require("../models/record")

(async () => {
    await mongoose.connect(`mongodb://127.0.0.1:27017/Project`);
})();

module.exports = {
    Record: require("./record"),
};
