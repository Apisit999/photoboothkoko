const express = require("express")
const fs = require("fs")

const app = express()

app.use(express.json())
app.use(express.static("public"))

/* รับข้อมูลการจอง */
app.post("/api/booking", (req, res) => {

    const data = req.body

    let bookings = []

    if (fs.existsSync("./database/bookings.json")) {
        bookings = JSON.parse(fs.readFileSync("./database/bookings.json", "utf8"))
    }

    bookings.push(data)

    fs.writeFileSync("./database/bookings.json", JSON.stringify(bookings, null, 2))

    res.json({ status: "success" })

})

/* ให้ Admin ดึงข้อมูล */
app.get("/api/bookings", (req, res) => {

    if (!fs.existsSync("./database/bookings.json")) {
        return res.json([])
    }

    const bookings = JSON.parse(fs.readFileSync("./database/bookings.json", "utf8"))

    res.json(bookings)

})

app.listen(3000, () => {
    console.log("Server running http://localhost:3000")
})
app.delete("/api/bookings", (req, res) => {

    fs.writeFileSync("./database/bookings.json", "[]")

    res.json({ status: "deleted" })

})