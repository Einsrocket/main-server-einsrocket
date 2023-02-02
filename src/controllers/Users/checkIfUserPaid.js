const db = require("../../models/db");const {
    format,
    isAfter,
} = require("date-fns");


// handle user registation 1
const checkIfUserPaid = async (req, res) => {
    const Username = req.params.username;
    let sqlSelect = `select * from users where username = '${Username}';`;
    

    db.query(sqlSelect, (err, result) => {
        //if there was found any user with the value provided 3
        if (result.length > 0) {
            // verifying if the time user can use the platform expired
            var isDateAfter = isAfter(new Date(), Number(result[0].next_payment_day));

            res.json({
                todaysDate: format(new Date(), 'yyyy-MM-dd'),
                paymentDate: format(Number(result[0].next_payment_day), 'yyyy-MM-dd'),
                // needToPay: isDateAfter,
                needToPay: false,
                succes: true,
            });
        }

        //if there wasn't found any user with the values provided 5
        else if (result.length == 0) {
            res.json({
                message: "Usuario não existe",
                succes: false,
            });
        }
    });
};

module.exports = { checkIfUserPaid };
