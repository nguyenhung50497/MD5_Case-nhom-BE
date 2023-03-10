import { Router } from "express";
import homeController from "../controller/HomeController";
import { auth } from "../middleware/auth";
import { userAuth } from "../middleware/user";
export const homeRouter = Router();
homeRouter.get("", homeController.index);
homeRouter.get("/images", homeController.getImages);
homeRouter.get("/images/:idHome", homeController.getImagesByIdHome);
// homeRouter.get('/find-home-by-name',homeController.findHome);
homeRouter.use(auth);
homeRouter.get("/users", homeController.getAllHome);
homeRouter.get('/find-by-address',homeController.findHomeByAddress);
homeRouter.get('/for-rent',homeController.findHomeForRent);
homeRouter.get('/rented',homeController.findHomeRented);
homeRouter.get("/my-homes", homeController.getMyHome);
homeRouter.post("", userAuth, homeController.createHome);
homeRouter.put("/:idHome", userAuth, homeController.editHome);
homeRouter.delete("/:idHome", homeController.deleteHome);
homeRouter.get("/find-by-id/:idHome", userAuth, homeController.findByIdHome);
homeRouter.get("/rent-home/:idHome", homeController.countHome);
homeRouter.get("/my-home/:idUser", homeController.findHomeByIdUser);
