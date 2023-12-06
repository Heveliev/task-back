const {tasksService} = require("../../models");
const {HttpError} = require("../../helpers");


const deleteTaskById = async(req, res) => {
    const {id} = req.params;
    const result = await tasksService.deleteTaskById(id);
    if(!result) {
        throw HttpError(404, `Movie with ${id} not found`);

    };
    res.json({
        message: "Delete success",
    });
};

module.exports = deleteTaskById;