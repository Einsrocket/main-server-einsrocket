const db = require("./db");

// Checking if the quiz Table exists
let sql = "select id from quiz where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating quiz Table
        let sql = `CREATE TABLE quiz (id INT NOT NULL PRIMARY KEY auto_increment, lesson_id int, content TEXT, category TEXT );`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating quiz table", err);
            }

            if (result) {
                console.log("quiz table Created");
            }
        });
    }
    if (result) console.log("quiz table found");
});
