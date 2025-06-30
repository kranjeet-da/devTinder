const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://nodedev:ZhjrzUUQPvq8n2uv@namastenode.jw3vlph.mongodb.net/devTinder"
    );
};

module.exports = connectDB;