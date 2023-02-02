const db = require("../../models/db");

const Questions = [
    {
        questionsText: 'god exists?',
        answerOptions: [
            {answerText: 'yes', isCorrect: false},
            {answerText: 'no', isCorrect: false},
            {answerText: 'maybe', isCorrect: false},
            {answerText: 'I dont know', isCorrect: true},
        ]
    },
]

const AddQuiz = async (req, res) => {
    let sql = `insert into quiz (lesson_id, content, category) values(1, '${JSON.stringify(Questions)}', 'discover');`;

    db.query(sql, (err, result) => {
        if (err) {
            res.json({message: "Error adding quiz ", err});
        }
            
        if (result) {
        res.json({message: "quiz  added"});
        }
    });
};

module.exports = { AddQuiz };
