const ToDoModel = require("../model/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const { user_id } = req.query;

  const todo = await ToDoModel.find({ user_id }).sort({ createdAt: -1 });
  res.send(todo);
};

module.exports.saveToDo = (req, res) => {
  const { text, user_id } = req.body;

  ToDoModel.create({ text, user_id })
    .then((data) => {
      console.log("Added Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = (req, res) => {
  const id = req.params.id;

  console.log("id ---> ", req.body.data);

  ToDoModel.findByIdAndDelete(id)
    .then(() => res.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};

module.exports.updateToDo = (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send("Updated Successfully..."))
    .catch((err) => console.log(err));
};
