const Chapters = require("../model/chaptersModel");
const mongoose = require("mongoose");
const cloudinary = require("../helper/cloudinary");

// get all chapters
const getChapters = async (req, res) => {
  try {
    const user_id = req.user._id;
    const chapters = await Chapters.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(chapters);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

//get all chapters student
const getChapters_st = async (req, res) => {
  try {
    const chapters = await Chapters.find({});
    res.status(200).json(chapters);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};

//get a single chapters
const getchapter = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "no such id" });
    }

    const chapters = await Chapters.findById(id);

    if (!chapters) {
      return res.status(404).json({ error: "no such workout" });
    }
    res.status(200).json(chapters);
  } catch (err) {
    res.status(400).json(err);
  }
};

//create new chapters
const createChapters = async (req, res) => {
  const title = req.body.title;
  console.log(req.user);
  try {
    const user_id = req.user._id;
    if (req.file !== undefined) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        public_id: `${title}_Course`,
      });
      const img = result.url;
      const chapters_img = await Chapters.create({ title, img, user_id });
      res.status(200).json(chapters_img);
    } else {
      const chapter = await Chapters.create({ title, user_id });
      res.status(200).json(chapter);
    }
  } catch (err) {
    console.log(err);
  }
};

//update a  chapters

const updateChapter = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such id" });
  }

  const chapters = await Chapters.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!chapters) {
    return res.status(404).json({ error: "no such workout" });
  }

  res.status(200).json(chapters);
};

//delete a chapters

const deleteChapter = async (req, res) => {
  const { id } = req.params;

  try {
    const public_id = `${req.body.title}_Course`;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "no such id" });
    }
    const result = await cloudinary.uploader
      .destroy(public_id)
      .then((result) => console.log(result));
    const chapters = await Chapters.findByIdAndDelete({ _id: id });

    console.log(result);
    if (!chapters) {
      return res.status(404).json({ error: "no such workout" });
    }

    res.status(200).json(chapters);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getChapters,
  getChapters_st,
  getchapter,
  createChapters,
  deleteChapter,
  updateChapter,
};
