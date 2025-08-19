import express from "express";
import {
  createOrder,
  getOrders,
  updateOrder,
} from "../controllers/OrderController.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", getOrders);
orderRouter.put("/:orderId", updateOrder);

export default orderRouter;
