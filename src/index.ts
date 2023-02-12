import "reflect-metadata";

import app from "./app";
import { AppDataSource } from "./db";

const main = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();

    app.listen(app.get("port"));
    console.log("Server running on port:", app.get("port"));
  } catch (error) {
    console.error(error);
  }
};

main();
