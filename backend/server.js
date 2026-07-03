import { app } from "./src/app.js";
import dbConnect from "./src/config/db.js";
import { env } from "./src/config/env.js";

dbConnect()

app.listen(env.PORT,()=>{
    console.log("Server Created")
})