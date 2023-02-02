const db = require("../../models/db");


const UpdateUser = async (req, res) => {
    const { id, 
            email, 
            city,
            phone,
            biography, 
            state,
            country,
            ocupation,
        } = req.body;

        
        let sql = `update users set email = "${email}" where id = ${id};`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                res.json({
                    message: `Falha ao atualizar email`,
                    succes: false,
                });
            }
            //if there already is a user with a similar username
            else if (result){
                let sql = `update users set phone = "${phone}" where id = ${id};`;

                db.query(sql, (err, result) => {
                    if (result){
                        let sql = `update users set city = "${city}" where id = ${id};`;

                        db.query(sql, (err, result) => {
                            if (result){
                                let sql = `update users set biography = "${biography}" where id = ${id};`;

                                db.query(sql, (err, result) => {
                                    if (result){
                                        let sql = `update users set state = "${state}" where id = ${id};`;
        
                                        db.query(sql, (err, result) => {
                                            if (result){
                                                let sql = `update users set country = "${country}" where id = ${id};`;
                
                                                db.query(sql, (err, result) => {
                                                    if (result){
                                                        let sql = `update users set ocupation = "${ocupation}" where id = ${id};`;
                        
                                                        db.query(sql, (err, result) => {
                                                            res.json({
                                                                message: `atualizado`,
                                                                succes: true,
                                                            });
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
                
        });
};


module.exports = { UpdateUser };
