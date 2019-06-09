import mongoose from 'mongoose';
import * as config from "../../configs/config.json";

const dbSettings = config.db;

class Connect {
  static mongoConnect() {
    mongoose
      .connect(dbSettings.connectPathWorld, {
        useCreateIndex: true,
        useNewUrlParser: true
      })
      .then(() => console.log("Connected to MongoDB"))
      .catch(err => console.log("Could not connect to MongoDB"));
  }
}
module.exports = Connect;
