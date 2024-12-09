import mongoose from "mongoose";
import app from "./app";
import config from "./config";

main();
// .catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("connecting mongodb successfull");
  } catch (err) {
    console.log(err);
  }

  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
}
