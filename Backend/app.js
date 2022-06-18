require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const authRoute = require("./routes/auth-router");
const userRoute = require("./routes/user-router");
const songRoute = require("./routes/song-router");
const postRoute = require("./routes/post-router");
const albumRoute = require("./routes/album-router");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// Swagger API
const options = {
    definition:{
        openapi: "3.0.0",
        info:{
            title: "Music Social API DOC",
            version: "1.0.0",
            description: "Backend API for FE dev"
        },
        server: {
            url: "http://localhost:" + process.env.LISTENING_PORT
        }
    },
    apis : ["./routes/*.js"]
}
const specs = swaggerJsdoc(options);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});



app.use("/auth", authRoute);

app.use("/user", userRoute);
app.use("/song",songRoute);
app.use("/post",postRoute);
app.use("/album",albumRoute);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

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

