const db = require("../../models/db");

const CheckLike = async (req, res) => {
    const { lesson_id, author } = req.body;

    let sql = `select * from lesson_likes where lesson_id = '${lesson_id}' and author = '${author}';`;

    //searching if a the user alreay liked the like
    db.query(sql, (err, result) => {
        if (result.length > 0) {
            res.json({
                message: "Like encontrado",
                like: true,
            });
        }

        if (result.length === 0) {
            res.json({
                message: "Like nao encontrado",
                like: false,
            });
        }

        if (err) {
            res.json({ message: "Falha ao procurar like", succes: false });
            console.log(err);
        }
    });
};

module.exports = { CheckLike };
