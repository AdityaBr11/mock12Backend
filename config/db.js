const mongoose=require("mongoose")
mongoose.set("strictQuery", false);
const env = require("dotenv");
env.config();

const connection =mongoose.connect(process.env.mongoURL);

module.exports={
    connection,
}
