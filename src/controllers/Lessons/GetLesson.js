const db = require("../../models/db");

const GetLesson = async (req, res) => {
    const Id = req.params.id;
    let sqlSelect = `select * from lessons where id = ${Number(Id)};`;

    db.query(sqlSelect, (err, result) => {
        //if there was found any result with the value provided 3
        if (result.length > 0) {
            res.json({
                result: result[0],
                succes: true,
            });
        }

        // if there wasn't found any result with the values provided 5
        else if (result.length == 0) {
            res.json({
                message: "Aula não existe",
                succes: false,
            });
        }
    });
};

module.exports = { GetLesson };
