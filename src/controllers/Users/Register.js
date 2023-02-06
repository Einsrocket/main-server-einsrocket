const bcrypt = require("bcrypt");
const db = require("../../models/db");
const JWT = require("jsonwebtoken");
const { addWeeks, parseISO } = require("date-fns");

const secret = "well, well, that is a secret I guess";

// handle user registation
const addUser = async (req, res) => {
    const { username, password, email } = req.body;

    var date = addWeeks(new Date(), 1); //next week date
    var date_two = new Date(); // todays date

    // utc date for next week date
    var new_utc = Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    );

    // utc date for todays date
    var second_new_utc = Date.UTC(
        date_two.getUTCFullYear(),
        date_two.getUTCMonth(),
        date_two.getUTCDate(),
        date_two.getUTCHours(),
        date_two.getUTCMinutes(),
        date_two.getUTCSeconds()
    );

    const NextPaymentDay = new_utc;
    const EntryDate = second_new_utc;

    const hashedPassword = await bcrypt.hash(password, 10);
    const token = await JWT.sign({ password }, secret, {
        expiresIn: 1209600,
    });

    //if the input values where  provided
    if (username && password && email) {
        let sqlSelect = `select * from users where email = '${email}';`;

        db.query(sqlSelect, (err, result) => {
            if (err) return console.log(err);
            //if there already is a user with a similar email
            else if (result.length > 0)
                return res.json({
                    message: `Voce não pode usar este email, porque ele já está  ocupado.`,
                    succes: false,
                });
            //if there are no users with a similar username
            else if (result.length == 0) {
                let sqlSelect = `select * from users where username = '${username}';`;

                db.query(sqlSelect, (err, result) => {
                    if (err) return console.log(err);
                    //if there already is a user with a similar username
                    else if (result.length > 0)
                        return res.json({
                            message: `Nome de usuario ocupado`,
                            succes: false,
                        });
                    //if there are no users with a similar username
                    else if (result.length == 0) {
                        let sqlSelect = `select * from users where Password = '${hashedPassword}';`;

                        //if there are users with a similar password
                        db.query(sqlSelect, (err, result) => {
                            if (err) return console.log(err);
                            //if there is a user with a similar password
                            else if (result.length > 0)
                                return res.json({
                                    message: `Escolha outra palavra passe`,
                                    succes: false,
                                });
                            //if there are no users with a similar password
                            else if (result.length == 0) {
                                let sqlInsert = `insert into users (email, password, username, is_premium, conections, next_payment_day, entry_date, made_tutorial, activation_code) values('${email}', '${hashedPassword}', '${username}', 'false', 0, '${NextPaymentDay}', '${EntryDate}', 'false', ${
                                    8347 + Math.floor(Math.random() * 17836)
                                });`;

                                //inserting a new user into the database
                                db.query(sqlInsert, (err, result) => {
                                    if (result) {
                                        return res.json({
                                            message: "Usuario adicionado",
                                            succes: true,
                                            token,
                                            NextPaymentDay,
                                            EntryDate,
                                        });
                                    }
                                    if (err) {
                                        res.json({
                                            message:
                                                "Falha ao adicionar usuario",
                                            succes: false,
                                        });
                                        console.log(err);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
    // if the all the values were not succesfuly provided
    else {
        return res.json({ message: "preencha todos campos", succes: false });
    }
};

module.exports = { addUser };
