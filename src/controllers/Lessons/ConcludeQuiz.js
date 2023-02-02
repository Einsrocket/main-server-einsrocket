const db = require("../../models/db");

const ConcludeQuiz = async (req, res) => {
    const {lesson_id, author, category, user_id, points} = req.body;
    
    
    let sql = `insert into concluded_quizes (lesson_id, author, category) values(${lesson_id}, '${author}', '${category}');`;

    db.query(sql, (err, result) => {
        if (err) {
            console.log("Error adding  concluded_quizes row", err);

            res.json({succes: false, message: "Error adding  concluded_quizes row", err});
        }
        
        if (result) {
            console.log(" concluded_quizes row added", points);

            let sql = `update users set points = points+${points} where id = ${user_id}`;

            db.query(sql, (err, result) => {
                res.json({succes: true, message: " concluded_quizes row added", updated_points: true, points: points, user_id});
            });

        }
    });
};

module.exports = { ConcludeQuiz };
