// import mongoose from "mongoose";

// export const createDBConn = async () => {
//   try {
//     const DB_USERNAME = process.env.DB_USERNAME;
//     const DB_PASSWORD = process.env.DB_PASSWORD;
//     const MONGO_URI = process.env.MONGO_URI.replace(
//       "<db_username>",
//       DB_USERNAME
//     ).replace("<db_password>", DB_PASSWORD);

//     await mongoose.connect(MONGO_URI);
//   } catch (err) {
//     console.log(err);
//   }
// };

import mongoose from "mongoose";

let isConnected;

export const createDBConn = async () => {
  if (isConnected) return;

  try {
    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const MONGO_URI = process.env.MONGO_URI.replace(
      "<db_username>",
      DB_USERNAME
    ).replace("<db_password>", DB_PASSWORD);

    const db = await mongoose.connect(MONGO_URI);
    isConnected = db.connections[0].readyState;
  } catch (err) {
    console.error("DB Connection Error:", err);
    throw err;
  }
};
