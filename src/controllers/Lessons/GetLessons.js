const db = require("../../models/db");

const GetLessons = async (req, res) => {
    const Trail = req.params.trail;
    let sqlSelect = `select * from lessons where course_name = '${Trail}';`;

    db.query(sqlSelect, (err, result) => {
        //if there was found any result with the value provided 3
        if (result.length > 0) {
            res.json({
                result: result,
                succes: true,
            });
        }

        //if there wasn't found any result with the values provided 5
        else if (result.length == 0) {
            res.json({
                message: "Aula não existe",
                succes: false,
            });
        }
    });
};

module.exports = { GetLessons };
