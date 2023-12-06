const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const tasksPath = path.join(__dirname,"tasks.json");

const updateTasks = async (tasks) => await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2));
const getAllTasks = async () => {
    const data = await fs.readFile(tasksPath);
    return JSON.parse(data);
}

const addTask = async (data) => {
    const tasks = await getAllTasks();
    const newTask = {
        id: nanoid(),
        ...data,

    };
    tasks.push(newTask);
    await updateTasks(tasks);
    return newTask;
}

const updateTaskById = async (id, data) => {
    const tasks = await getAllTasks();
    const index = tasks.findIndex(item => item.id === id);
    if(index === -1) {
        return null;
    };
    tasks[index] = {id, ... data};
    await updateTasks(tasks);
    return tasks[index];
}

const deleteTaskById = async (id) => {
    const tasks = await getAllTasks();
    const index = tasks.findIndex(item => item.id === id);
    if(index === -1) {
        return null;
    };
    const [result] = tasks.splice(index,1);
    await updateTasks(tasks);
    return result;

}

module.exports = {
    getAllTasks,
    addTask,
    updateTaskById,
    deleteTaskById,
}