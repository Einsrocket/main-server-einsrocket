const db = require("../../models/db");

const GetQuizes = async (req, res) => {
    const {lesson_id, author, category} = req.body;
    
    let sqlSelect = `select * from concluded_quizes where lesson_id = ${lesson_id} and author = '${author}' and category = '${category}';`;

    db.query(sqlSelect, (err, result) => {
        //if  user made quiz
        if (result.length > 0) {
            res.json({
                message: `user alredy made quiz from trail ${category}`,
                madeQuiz: 'true',
            });
        }
        
        //if user did not make quiz
        else if (result.length == 0) {

            let sql = `select * from quiz where lesson_id = ${lesson_id} and category = '${category}';`;

            db.query(sql, (err, result) => {
                //if user made quiz we are getting the quiz data
                if (result.length > 0) {
                    res.json({
                        message: `quiz was found in quiz table from trail ${category}`,
                        result,
                        madeQuiz: 'false',
                    });
                }
                
                //if there is not such a thing
                else if (result.length == 0) {
                    res.json({
                        message: `quiz was not found from table quiz in trail ${category}`,
                        succes: false,
                        madeQuiz: 'does not exist',
                    });
                }
            })
        }
    });
};

module.exports = { GetQuizes };
