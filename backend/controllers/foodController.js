import { CategoryModel } from "../model/category.js";
import { FoodModel } from "../model/food.js";

export const createFood = async (req, res) => {
  const { name, price, image, ingredients, category } = req.body;
  try {
    const food = await FoodModel.create({
      name: name,
      price: price,
      image: image,
      ingredients: ingredients,
      category: category,
    });
    return res
      .status(200)
      .send({
        success: true,
        food: food,
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

// export const getFoodsByCategoryId = async (req, res) => {
//   const { categoryId } = req.body;
//   try {
//     const food = await FoodModel.find({ category: categoryId }).populate(
//       "category"
//     );
//     const category = await CategoryModel.findById(categoryId);
//     return res
//       .status(200)
//       .send({
//         success: true,
//         category: category,
//         food: food,
//       })
//       .end();
//   } catch (error) {
//     console.error(error, "err");
//     return res
//       .status(400)
//       .send({
//         success: false,
//         message: error,
//       })
//       .end();
//   }
// };

export const getFoodById = async (req, res) => {
  const { id } = req.params;
  try {
    const food = await FoodModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        food: food,
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

export const getFoodsByCategoryId = async (req, res) => {
  try {
    const food = await CategoryModel.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "category",
          as: "foods",
        },
      },
      { $project: { name: 1, foods: 1 } },
    ]);

    return res
      .status(200)
      .send({
        success: true,
        food: food,
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
