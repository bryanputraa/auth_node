//inisialisasi library
const express = require("express")
const app = express()

//import fungsi authorization auth
const auth = require("./auth")

//import route user
const user = require("./user")
app.use("/", user)

//import route pegawai
const pegawai = require("./pegawai")
app.use("/pegawai", auth, pegawai)


//membuat web server dengan port 2000
app.listen(2000, () => {
    console.log("server run on port 2000")
})