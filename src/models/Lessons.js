const db = require("./db");

// Checking if the Lessons Table exists
let sql = "select id from lessons where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating Lessons Table
        let sql = `CREATE TABLE lessons (id INT NOT NULL PRIMARY KEY auto_increment, course_name TEXT, course_id int, title TEXT, description TEXT,   video TEXT, likes int , comments int, teacher TEXT, teacher_avatar TEXT, teacher_ocupation TEXT, lesson_number int);`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating Lessons table", err);
            }

            if (result) {
                console.log("Lessons table Created");
            }
        });
    }
    if (result) console.log("Lessons table found");
});
