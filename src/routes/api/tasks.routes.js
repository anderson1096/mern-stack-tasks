const express = require('express');
const router = express.Router();
const Task = require('../../models/task');


// index
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// show 
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

//create
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const task = new Task ({ title, description });
    await task.save();
    res.json({
        status: 'Task created!'
    });
});


// update
router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    await Task.findOneAndUpdate(req.params.id, { title, description });
    res.json({
        status: 'Task updated!'
    });
});

// delete
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        status: 'Task deleted!'
    });
})


module.exports = router;