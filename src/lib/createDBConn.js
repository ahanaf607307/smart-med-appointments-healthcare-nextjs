import mongoose from "mongoose";

export const createDBConn = async () => {
  try {
    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const MONGO_URI = process.env.MONGO_URI.replace(
      "<db_username>",
      DB_USERNAME
    ).replace("<db_password>", DB_PASSWORD);

    await mongoose.connect(MONGO_URI);
  } catch (err) {
    console.log(err);
  }
};
