const Category = require('../../../models/category.model');

const categoryCreateHandler = (req, res) => {
  let name = req.body.name;
  let description = req.body.description;
  try {
    const createCategory = new Category({ name: name, description: description });
    createCategory.save();
    res.json({
      status: true,
      msg: "Category Created Successfully",
    });
  } catch (error) {
    res.json({
      status: false,
      msg: "Error To Insert Data " + error,
    });
  }
};

const categoryGetHandler = async (req, res) => {
  try {
    const categories = await Category.find({}).sort({createdAt:-1});
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching categories');
  }
};

const categoryDeleteHandler = async (req,res) =>
  {
    let id = req.body.id;
    if(id=="")
      {
        res.json({
          "status":false,
          "msg":"id Must be requried ",
        })
        process.exit(1);
      }
    try {
      const isDeleted = await Category.deleteOne({_id:id})
      if(isDeleted)
        {
          res.json({
            "status":true,
            "msg":"Deleted SuccessFully.",
          })
        }
    } catch (error) {
      res.status(500).send('Error delete category');
    }
  }
module.exports = {categoryCreateHandler, categoryGetHandler, categoryDeleteHandler};