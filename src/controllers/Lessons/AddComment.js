const db = require("../../models/db");

// handle comment uploads
const AddComment = async (req, res) => {
    const { lesson_id, author, description } = req.body;


    // query
    let sql = `insert into lesson_comments (lesson_id, author, description) values(${Number(lesson_id)}, '${author}', '${description}');`;

    db.query(sql, (err, result) => {
        if (result) {

            let sql = `update lessons set comments = comments+1 where id = ${Number(lesson_id)};`;

            db.query(sql, (err, result) => {
                res.json({ message: "Comentario adicionado", succes: true });
            });
        }

        if (err) {
            res.json({
                message: "Falha ao adicionar Comentario",
                succes: false,
            });
            console.log(err);
        }
    });
};

module.exports = { AddComment };
