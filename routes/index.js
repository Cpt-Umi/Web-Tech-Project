const express = require("express");
const router = express.Router()
const db = require('../models/index')

router.get("/", async (req, res) => {
    const result = await db.Record.aggregate([
        {
            $match: {
                checkedIn: true
            }
        }, {
            $group: {
                _id: "$employeeID",
                workinghours: {
                    $sum: {
                        $divide: [
                            { $subtract: ["$checkOutTime", "$checkInTime"] },
                            1000 * 60 * 60
                        ]
                    }
                }
            }

        }
    ]);

    res.json(result);
})




module.exports = router;