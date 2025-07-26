import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

const port = process.env.PORT || 8000;

connectDB()
.then( ()=> {
    app.on("error", (error) => {
        console.log(`\nERROR !! ${error}`);
    });
    app.get('/', (req,res) => {
        res.send("Hi User")
    })
    app.listen(port, () => {
    console.log(`\nServer is running at http://localhost:${port}`);
    });
})
.catch((error) => {
    console.error(`\nMONGODB CONNECTION ERROR !! ${error}` );
});
