const db = require("../../models/db");


const passedTutorial = async (req, res) => {
    const { id } = req.body;

        
        let sql = `update users set made_tutorial = "true" where id = ${id};`;

        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                res.json({
                    message: `Falha ao atualizar made_tutorial`,
                    succes: false,
                });
            }
            else if (result){
                res.json({
                    message: `atualizado`,
                    succes: true,
                });
            }
                
        });
};


module.exports = { passedTutorial };
