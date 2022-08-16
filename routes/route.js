import express from "express";
import { verifyfunction, verifyuser, verifyadmin } from "../middleware/verifyToken.js";
import { healthcheckController,loginController,signupController,productAddController,productModifyController,productViewcontroller,deleteUser,updateUser,viewUser, orderAddController, orderdetailsAddController, vieworderController, orderCompleteController } from "../controller/index.js";

const routes = express.Router();

routes.get("/",(req,res)=>{
    res.json(
        {
            "name":"Shoyeb",
            "Lisence":"MIT"
        }
    );
})

//healthcheck controller 

routes.get("/healthcheck", healthcheckController.healthcheck);

routes.post("/register",signupController.register);

routes.post("/login", loginController.login);

routes.get("/view", verifyadmin, viewUser.viewUser);

routes.get("/view/:id",verifyuser, viewUser.viewUserbyId);

routes.post("/update/:id", verifyuser, updateUser.updateUser );

routes.delete("/delete/:id", verifyadmin, deleteUser.deleteUser);

//product routes

routes.post("/product/add", productAddController.AddProduct);

routes.get("/product/view", verifyuser, productViewcontroller.ViewProduct);

routes.get("/product/view/:id", verifyuser, productViewcontroller.ViewProductById);

routes.put("/product/update/:id", verifyadmin, productModifyController.UpdateProduct);

routes.delete("/product/delete/:id", verifyadmin, productModifyController.DeleteProduct);

//order controllers

routes.post("/order/add/:id", verifyuser, orderAddController.Orderadd);

routes.post("/order/details/add/:id",verifyuser, orderdetailsAddController.AddOrderDetails);

routes.get("/order/view/pending/:id",verifyadmin, vieworderController.ViewPendingOrder);

routes.get("/order/view/delivered/:id", verifyadmin, vieworderController.ViewCompleteOrder);

routes.put("/order/complete/:order_id/:id", verifyadmin, orderCompleteController.CompleteOrder);


export default routes;
