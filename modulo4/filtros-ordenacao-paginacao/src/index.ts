import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getOrderStaff } from "./endpoints/getOrderStaff";
import {getStaffByName} from "./endpoints/getStaffByName"
import { getStaffByType } from "./endpoints/getStaffByType";
import {getLimitPage} from "./endpoints/getLimitPage"
import { getAllFilters } from "./endpoints/getAllfilters";



app.get("/recipes", getAllRecipes)
app.get("/staff/:type", getStaffByType)
app.get("/staff", getStaffByName)
app.get("/order", getOrderStaff)
app.get("/pages", getLimitPage)
app.get("/all-filters", getAllFilters)



