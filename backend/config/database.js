const mongoose = require("mongoose");

//DB_URI="mongodb://127.0.0.1:27017/Ecommerce"
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    }).catch(() => { console.log("Error Occured while connecting TO MongoDB") });;
};

connectDatabase()
module.exports = connectDatabase;