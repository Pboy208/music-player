const Album = require("../models/album");
const HttpError = require("../models/http-error");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;
require("dotenv").config();

module.exports = {
    getNewAlbum: tryCatchBlock(null, async (req, res, next) => {
        const result = await Album.getNewAlbum();
        return res.status(200).send({message: "GET_NEW_ALBUM_SUCCESS",data: result[0]})
    }),
};