const db = require('./models/index');

db.Record.aggregate([
    {
        $group: {
            _id: "$employeeId",
            workinghours: {
                $sum: {
                    $divide: [
                        {
                            $subtract: [{ $toDate: "$checkOutTime" },
                            { $toDate: "$checkInTime" }]
                        },
                        1000 * 60 * 60
                    ]
                }
            }
        }
    }
]).then((result) => console.log(result));

// db.Record.find().then(result=>console.log(result))