const multer = require("multer");
const uuid = require("uuid");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './app/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        cb(null, true);
    } else {
        cb(new Error("Accepted images: jpeg,png"), false);
    }
};

const upload = multer({ dest: "images/", storage, fileFilter: fileFilter });

module.exports = upload;