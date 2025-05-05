import { FoodOrderModel } from "../model/food-order.js";

export const createFoodOrder = async (req, res) => {
  const { userId, foods, totalPrice } = req.body;
  try {
    const order = await FoodOrderModel.create({
      user: userId,
      foodOrderItems: foods,
      totalPrice,
    });
    return res
      .status(200)
      .send({
        success: true,
        order: order,
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

export const getOrderByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const foodOrder = await FoodOrderModel.find({
      user: userId,
    }).populate("user");
    return res
      .status(200)
      .send({
        success: true,
        foodOrder: foodOrder,
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

export const getFoodOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const foodOrder = await FoodOrderModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        foodOrder: foodOrder,
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
