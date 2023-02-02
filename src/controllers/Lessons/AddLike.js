const db = require("../../models/db");

const AddLike = async (req, res) => {
    const { lesson_id, author } = req.body;

    let sql = `select * from lesson_likes where lesson_id = ${Number(lesson_id)} and author = '${author}';`;

    //searching if a the user alreay liked the lesson
    db.query(sql, (err, result) => {
        if (result.length > 0) {
            let sql = `delete from lesson_likes where lesson_id = ${Number(lesson_id)} and author = '${author}';`;

            db.query(sql, (err, result) => {
                let sql = `update lessons set likes = likes-1 where id = ${Number(lesson_id)};`;

                db.query(sql, (err, result) => {
                    res.json({
                        message: "Like deletado com sucesso",
                        like: false,
                    });
                });
            });
        }

        // if a the user did not liked the lesson
        if (result.length === 0) {
            let sql = `insert into lesson_likes (lesson_id, author) values(${Number(lesson_id)}, '${author}');`;

            db.query(sql, (err, result) => {
                let sql = `update lessons set likes = likes+1 where id = ${Number(lesson_id)};`;

                db.query(sql, (err, result) => {
                    res.json({
                        message: "Like adicionado com sucesso",
                        like: true,
                    });
                });
            });
        }

        if (err) {
            res.json({ message: "Falha ao adicionar like", succes: false });
            console.log(err);
        }
    });
};

module.exports = { AddLike };
