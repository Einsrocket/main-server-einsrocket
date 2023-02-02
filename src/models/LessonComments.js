const db = require("./db");

// Checking if the lesson_comments Table exists
let sql = "select id from lesson_comments where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating lesson_comments Table
        let sql = `CREATE TABLE lesson_comments (id INT NOT NULL PRIMARY KEY auto_increment, lesson_id int, description TEXT, author TEXT );`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating lesson_comments table", err);
            }

            if (result) {
                console.log("lesson_comments table Created");
            }
        });
    }
    if (result) console.log("lesson_comments table found");
});
