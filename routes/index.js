const express = require("express");
const router = express.Router()
const db = require('../models/index.js')

router.get("/", async (req, res) => {
    // const result = await db.Record.aggregate([
    //     {
    //         $match: {
    //             checkedIn: true
    //         }
    //     }, {
    //         $group: {
    //             _id: "$employeeID",
    //             workinghours: {
    //                 $sum: {
    //                     $divide: [
    //                         { $subtract: ["$checkOutTime", "$checkInTime"] },
    //                         1000 * 60 * 60
    //                     ]
    //                 }
    //             }
    //         }

    //     }
    // ]);
    // res.json(result);
    const result = await db.Record.find();
    res.json(result)
})

router.post("/", (req, res) => {
    console.log(req.body)
})

module.exports = router;