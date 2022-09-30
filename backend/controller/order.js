import { orders } from '../model/order.js';

export const getOrder = async (req, res) => {
  try {
    res.json(orders);
  } catch (error) {
    console.log(error);
  }
};
