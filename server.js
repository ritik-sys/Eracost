const express = require("express")
const app = express()
const db = require('./config/db')
app.use(express.json({ extended: false }))


//Routes
app.use("/api/users", require('./Routes/users'))
app.use("/api/auth", require('./Routes/auth'))
app.use("/api/postConfirmation", require('./Routes/postConfirmation'))
//Home page
db()
app.get("/", (req, res) => {
    res.send("Home")
})

//server
app.listen(process.env.PORT || 5000, () => {
    console.log("server up at 5000");
})
