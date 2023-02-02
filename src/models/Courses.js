const db = require("./db");

// Checking if the Courses Table exists
let sql = "select id from courses where id < 40;";

db.query(sql, (err, result) => {
    if (err) {
        // Creating Courses Table
        let sql = `CREATE TABLE courses (id INT NOT NULL PRIMARY KEY auto_increment, avatar TEXT, title TEXT, first_description TEXT,  second_description TEXT, banner TEXT, date TEXT, likes TEXT, teacher TEXT, first_topic TEXT, second_topic TEXT, third_topic TEXT, category TEXT);`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error creating Courses table", err);
            }

            if (result) {
                console.log("Courses table Created");

                let sql = `insert into courses (avatar, title, first_description, second_description, likes, teacher, first_topic, second_topic, third_topic, category) values('/assets/images/d6.png', 'Conectar', 'Trilha do conhecimento de ingles que dara inicio a jornada prática de introdução aos estudos para conhecer o universo da lingua inglesa.', 'Neste curso voce vai aprender a base fundametal para iniciar a jornada do seu aprendizado em ingles.', 0, 'Ainsley', 'Conhecendo o idioma', 'Primeiras frases', 'Iniciando com os verbos', 'discover');`;

                db.query(sql, (err, result) => {
                    if (err) {
                        console.log("Error adding first courses row", err);
                    }
        
                    if (result) {
                        console.log("First courses row added");
                    }
                });
            }
        });
    }
    if (result) console.log("Courses table found");
});
