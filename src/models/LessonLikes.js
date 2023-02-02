const db = require("./db");

// Checking if the LessonLikes Table exists
let sql = "select id from lesson_likes where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating lesson_likes Table
        let sql = `CREATE TABLE lesson_likes (id INT NOT NULL PRIMARY KEY auto_increment, lesson_id int, author varchar(100) );`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating lesson_likes table", err);
            }

            if (result) {
                console.log("lesson_likes table Created");
            }
        });
    }
    if (result) console.log("lesson_likes table found");
});
