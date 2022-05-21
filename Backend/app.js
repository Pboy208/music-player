require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");

const authRoute = require("./routes/auth-router");
const userRoute = require("./routes/user-router");
const songRoute = require("./routes/song-router");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cookieParser());



app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});


app.use("/auth", authRoute);

app.use("/user", userRoute);
app.use("/song",songRoute);

app.use((error, req, res, next) => {
    res.status(error.errorCode);
    res.json({ message: error.message });
});

// app.use((err, req, res, next) => {
//     res.locals.error = err;
//     const status = err.status || 500;
//     res.status(status);
//     res.render('error');
//   });

const server = app.listen(process.env.LISTENING_PORT || 3000);

