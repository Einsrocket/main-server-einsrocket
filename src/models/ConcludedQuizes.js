const db = require("./db");

// Checking if the concluded_quizes Table exists
let sql = "select id from concluded_quizes where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating concluded_quizes Table
        let sql = `CREATE TABLE concluded_quizes (id INT NOT NULL PRIMARY KEY auto_increment, lesson_id int, author TEXT, category TEXT );`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating concluded_quizes table", err);
            }

            if (result) {
                console.log("concluded_quizes table Created");
            }
        });
    }
    if (result) console.log("concluded_quizes table found");
});
