import { app } from "./src/app.js";
import dbConnect from "./src/config/db.js";

dbConnect()

app.listen(process.env.PORT,()=>{
    console.log("Server Created")
})