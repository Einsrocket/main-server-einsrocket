const db = require("../../models/db");

// handle comment uploads
const FindCommentsById = async (req, res) => {
    const { lesson_id } = req.body;
    
    // query
    let sql = `select * from lesson_comments where lesson_id = ${Number(lesson_id)};`;

    db.query(sql, (err, result) => {
        if (result) {
            res.json({ result, succes: true });
        }

        if (err) {
            console.log(err);
            res.json({
                succes: false,
            });
        }
    });
};

module.exports = { FindCommentsById };
