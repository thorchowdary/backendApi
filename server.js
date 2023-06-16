const exprss = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const app = exprss();
const dotenv = require("dotenv").config();

connectDb();
app.use(exprss.json());
app.use(errorHandler);
app.use("/api/users",require("./routes/userRoutes"));
app.use("/api/contacts",require("./routes/contactRoutes")); //it is a middleware to connect the routes and express


const port = process.env.port || 4545;
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})