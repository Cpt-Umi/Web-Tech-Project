const express = require("express");
const router = express.Router();
const db = require("../models/index.js");

// router.get("/", async (req, res) => {
//   // const result = await db.Record.aggregate([
//   //     {
//   //         $match: {
//   //             checkedIn: true
//   //         }
//   //     }, {
//   //         $group: {
//   //             _id: "$employeeID",
//   //             workinghours: {
//   //                 $sum: {
//   //                     $divide: [
//   //                         { $subtract: ["$checkOutTime", "$checkInTime"] },
//   //                         1000 * 60 * 60
//   //                     ]
//   //                 }
//   //             }
//   //         }

//   //     }
//   // ]);
//   // res.json(result);
//   const result = await db.Record.find();
//   res.json(result);
// });

router.post("/", async (req, res) => {
    const { calendarData, currentMonth, currentYear } = req.body;
    //   console.log(calendarData);

    let startDate = new Date(
        Date.UTC(currentYear, currentMonth - 1, 1, 0, 0, 0, 0)
    );
    let endDate = new Date(Date.UTC(currentYear, currentMonth, 1, 0, 0, 0, 0));
    endDate.setUTCMilliseconds(endDate.getUTCMilliseconds() - 1);
    const result = await db.Record.find();

    const filterOut = result
        .filter(
            (record) =>
                record.checkInTime >= startDate && record.checkOutTime < endDate
        )
        .sort((a, b) => a.recordId - b.recordId);
    console.log(filterOut);

    //   console.log("Start: ", startDate);
    //   console.log("End: ", endDate);
    //   const result = await db.Record.find({
    //     checkInTime: {
    //       $gt: startDate,
    //       $lt: endDate,
    //     },
    //   });
});

module.exports = router;
