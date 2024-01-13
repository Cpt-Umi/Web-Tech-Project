const db = require("./models/index");

// db.Record.aggregate([
//     {
//         $group: {
//             _id: "$employeeId",
//             workinghours: {
//                 $sum: {
//                     $divide: [
//                         {
//                             $subtract: [{ $toDate: "$checkOutTime" },
//                             { $toDate: "$checkInTime" }]
//                         },
//                         1000 * 60 * 60
//                     ]
//                 }
//             }
//         }
//     }
// ]).then((result) => console.log(result));

// db.Record.find().then(result=>console.log(result))

let startDate = new Date("2024-01-01T00:00:00.000Z");
let endDate = new Date("2024-01-31T23:59:59.999Z");
console.log(startDate);
db.Record.find({
  checkInTime: {
    $gt: startDate,
    $lt: endDate,
  },
}).then((res) => console.log(res));
