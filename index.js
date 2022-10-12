import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
//import Users from "./models/UserModel.js";

const app = express()

try {
    await db.authenticate()
    console.log("database connected")
    // await Users.sync();
} catch (error) {
    console.error(error)
}

app.use(router)
app.use(express.json())
app.listen(3000,()=>{
    console.log(`server running at http://localhost:3000`)
})