const db = require("../../models/db");

const GetAll = async (req, res) => {
    let sqlSelect = `select * from courses;`;

    db.query(sqlSelect, (err, result) => {
        //if there was found any course with the value provided 2
        if (result.length > 0) {
            res.json({
                result: result,
                succes: true,
            });
        }

        //if there wasn't found any user with the values provided 3
        else if (result.length == 0) {
            res.json({
                message: "Nenhum curso encontrado",
                succes: false,
            });
        }
    });
};

module.exports = { GetAll };
