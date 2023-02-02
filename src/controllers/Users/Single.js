const db = require("../../models/db");
const { format } = require("date-fns");

const GetUser = async (req, res) => {
    const Username = req.params.username;
    let sqlSelect = `select * from users where Username = '${Username}';`;

    db.query(sqlSelect, (err, result) => {
        //if there was found any user with the value provided
        if (result.length > 0) {
            res.json({
                result: result[0],
                entry_date: format(Number(result[0].entry_date), "MM-yyyy"),
                succes: true,
            });
        }

        //if there wasn't found any user with the values provided
        else if (result.length == 0) {
            res.json({
                message: "Usuario não existe",
                succes: false,
            });
        }
    });
};

module.exports = { GetUser };
