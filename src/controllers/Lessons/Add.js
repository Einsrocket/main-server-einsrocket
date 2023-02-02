const db = require("../../models/db");

// handle user registation
const addLesson = async (req, res) => {
    const { lesson_number, course_name,  course_id, title, description, video, teacher, teacher_avatar, teacher_ocupation } = req.body;
    
    

    //if the input values where  provided
    if (lesson_number, course_name, course_id && title && description && video && teacher && teacher_avatar && teacher_ocupation) {

        let sqlInsert = `insert into lessons (course_name,course_id, title, description, video, teacher, teacher_avatar, teacher_ocupation, likes, comments, lesson_number) values('${course_name}', ${Number(course_id)}, '${title}', '${description}', '${video}', '${teacher}', '${teacher_avatar}', '${teacher_ocupation}', 0, 0, ${Number(lesson_number)});`;
        //inserting a new user into the database
        db.query(sqlInsert, (err, result) => {
            if (result) {
                return res.json({
                    message: "Aula adicionada",
                    succes: true,
                });
            }
            if (err) {
                res.json({
                    message: "Falha ao adicionar aula",
                    succes: false,
                });
                console.log(err);
            }
        });
    }
    // if the all the values were not succesfuly provided
    else {
        return res.json({ message: "preencha todos campos", succes: false });
    }
};

module.exports = { addLesson };
