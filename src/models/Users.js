const db = require("./db");

// Checking if the Users Table exists
let sql = "select id from users where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating users Table
        let sql = `CREATE TABLE users (id INT NOT NULL PRIMARY KEY auto_increment, username VARCHAR(100) NOT NULL , phone TEXT, email TEXT, points int DEFAULT 0, password TEXT , country TEXT, city TEXT, state TEXT, avatar TEXT , banner TEXT , biography TEXT , interests TEXT, ocupation TEXT, is_premium TEXT, next_payment_day TEXT, entry_date TEXT, made_tutorial TEXT, is_active TEXT, is_admin TEXT, is_special TEXT, conections int DEFAULT 0, activation_code int DEFAULT 123456);`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating Users table", err);
            }

            if (result) {
                console.log("Users table Created");
            }
        });
    }
    if (result) console.log("Users table found");
});
