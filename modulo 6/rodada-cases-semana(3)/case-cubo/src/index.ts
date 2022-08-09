import app from "./app"
import { UserBusiness } from "./business/UserBusiness"
import { UserController } from "./controller/UserController"
import { UserDataBase } from "./data/UserDataBase"


const userController = new UserController(
    new UserBusiness(new UserDataBase())
)

app.post("/participations", userController.sendParticipation)

app.get("/participations", userController.getAllParticipations)