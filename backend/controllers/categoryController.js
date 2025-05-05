import { CategoryModel } from "../model/category.js";

export const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await CategoryModel.create({
      name: name,
    });
    return res
      .status(200)
      .send({
        success: true,
        category: category,
      })
      .end();
  } catch (error) {
    console.log(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getCategories = async (_, res) => {
  try {
    const categories = await CategoryModel.find();
    return res
      .status(200)
      .send({
        success: true,
        categories: categories,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await CategoryModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        category: category,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
