const { Task } = require('../models');

exports.getTasks = async (req, res) => {
    const tasks = await Task.findAll();
    res.json(tasks);
};

exports.createTask = async (req, res) => {
    const { title, description } = req.body;
    const task = await Task.create({ title, description });
    res.json(task);
};
